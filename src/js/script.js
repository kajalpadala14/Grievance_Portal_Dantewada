import { getInitialData, submitGrievance, APPS_SCRIPT_URL, fetchLocationsFromSheet } from './api.js';
import { DEFAULT_CONFIG } from '../config/defaultConfig.js';

// Application State
let currentConfig = DEFAULT_CONFIG;
let grievances = [];
let searchQuery = '';
let statusFilterQuery = '';

/**
 * Theme Management (Light / Dark Mode)
 */
const THEME_STORAGE_KEY = 'dantewada_portal_theme';

function getCurrentTheme() {
    try {
        if (localStorage.getItem('portal-theme')) {
            localStorage.removeItem('portal-theme');
        }
        const saved = localStorage.getItem(THEME_STORAGE_KEY);
        if (saved === 'dark' || saved === 'light') {
            return saved;
        }
    } catch (e) {
        // Ignore localStorage error
    }
    return 'light'; // Default is Light Mode
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeToggleButton(theme);
}

function updateThemeToggleButton(theme) {
    const btn = document.getElementById('themeToggleBtn');
    const icon = document.getElementById('themeToggleIcon');
    const text = document.getElementById('themeToggleText');
    if (!btn) return;

    const isDark = theme === 'dark';
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    if (text) text.textContent = isDark ? 'लाइट मोड | Light' : 'डार्क मोड | Dark';
    btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    btn.setAttribute('title', isDark ? 'लाइट मोड में बदलें | Switch to Light Mode' : 'डार्क मोड में बदलें | Switch to Dark Mode');
}

let _themeThrottleLock = false;
export function toggleTheme(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (_themeThrottleLock) return;
    _themeThrottleLock = true;
    setTimeout(() => { _themeThrottleLock = false; }, 200);

    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = current === 'dark' ? 'light' : 'dark';
    try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (e) {
        // Ignore localStorage error
    }
    applyTheme(nextTheme);
}

function initTheme() {
    const theme = getCurrentTheme();
    applyTheme(theme);

    if (window.matchMedia) {
        try {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                try {
                    const saved = localStorage.getItem(THEME_STORAGE_KEY);
                    if (!saved) {
                        applyTheme(e.matches ? 'dark' : 'light');
                    }
                } catch (err) {
                    // Ignore error
                }
            });
        } catch (e) {
            // Older browser fallback
        }
    }
}

/**
 * Initialize application
 */
async function init() {
    initTheme();
    setDefaultDate();
    setupEventListeners();
    startLiveClock();

    // 1. First render with default/cached config immediately for fast initial paint
    applyPortalConfig(currentConfig);
    renderFormOptions(currentConfig);
    updateDashboard();

    // 2. Fetch fresh initial data from backend (Config + Grievances)
    try {
        const initial = await getInitialData();
        if (initial.config) {
            currentConfig = initial.config;
            applyPortalConfig(currentConfig);
            renderFormOptions(currentConfig);
        }
        if (initial.grievances) {
            grievances = initial.grievances;
        }
    } catch (err) {
        console.error('Error loading initial data:', err);
    }

    // 3. Update dashboard and table with the loaded data
    updateDashboard();
    displayGrievances();
    logApiStatus();
}

/**
 * Log API connection status in browser console
 */
function logApiStatus() {
    if (APPS_SCRIPT_URL && APPS_SCRIPT_URL.trim() !== '') {
        console.log('%c[Grievance Portal] Connected to Google Apps Script API', 'color: #27ae60; font-weight: bold;');
    } else {
        console.log('%c[Grievance Portal] Running in Local Mode (.env VITE_APPS_SCRIPT_URL not set)', 'color: #f39c12; font-weight: bold;');
    }
}

/**
 * Start Live Clock in Portal Header
 */
function startLiveClock() {
    const timeEl = document.getElementById('livePortalTime');
    if (!timeEl) return;
    function updateClock() {
        const now = new Date();
        const options = { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
        };
        timeEl.textContent = '🕒 ' + now.toLocaleString('hi-IN', options);
    }
    updateClock();
    setInterval(updateClock, 1000);
}

/**
 * Apply Portal Branding and Information from Config
 */
function applyPortalConfig(config) {
    if (!config || !config.portalInfo) return;

    const titleEl = document.getElementById('portalTitle');
    const subtitleEl = document.getElementById('portalSubtitle');
    const hoursEl = document.getElementById('portalHours');
    const copyrightEl = document.getElementById('portalCopyright');

    if (titleEl && config.portalInfo.title) titleEl.textContent = config.portalInfo.title;
    if (subtitleEl && config.portalInfo.subtitle) subtitleEl.textContent = config.portalInfo.subtitle;
    if (hoursEl && config.portalInfo.officeHours) hoursEl.textContent = config.portalInfo.officeHours;
    if (copyrightEl && config.portalInfo.copyright) copyrightEl.textContent = config.portalInfo.copyright;
}

/**
 * Dynamically populate form dropdowns and radio buttons
 */
function renderFormOptions(config) {
    if (!config) return;

    // 1. Populate Block Dropdown (from config.locations hierarchy or config.blocks)
    const blockSelect = document.getElementById('block');
    if (blockSelect) {
        const blocksList = (config.locations && Object.keys(config.locations).length > 0)
            ? Object.keys(config.locations).map(b => ({ value: b, label: b }))
            : (config.blocks || []);

        const currentValue = blockSelect.value;
        let html = '';
        if (blocksList.length === 0) {
            html = '<option value="">-- शीट से लोड हो रहा है... / Loading from Sheet... --</option>';
        } else {
            html = '<option value="">-- चयन करें / Select Block --</option>';
            blocksList.forEach(b => {
                const isSelected = b.value === currentValue ? 'selected' : '';
                html += `<option value="${escapeHtml(b.value)}" ${isSelected}>${escapeHtml(b.label || b.value)}</option>`;
            });
            html += '<option value="__OTHER__">➕ अन्य / Other (मैन्युअल दर्ज करें)</option>';
        }
        blockSelect.innerHTML = html;

        // If a block was already selected, refresh dependent dropdowns
        if (currentValue && config.locations && config.locations[currentValue]) {
            handleBlockChange();
        }
    }

    // 2. Populate Reason Dropdown
    const reasonSelect = document.getElementById('reason');
    if (reasonSelect && Array.isArray(config.reasons)) {
        const currentValue = reasonSelect.value;
        let html = '<option value="">-- कारण चुनें / Select Reason --</option>';
        config.reasons.forEach(r => {
            const isSelected = r.value === currentValue ? 'selected' : '';
            html += `<option value="${escapeHtml(r.value)}" ${isSelected}>${escapeHtml(r.label || r.value)}</option>`;
        });
        reasonSelect.innerHTML = html;
    }

    // 3. Populate Status Radio Options
    const statusContainer = document.getElementById('statusOptionsContainer');
    if (statusContainer && Array.isArray(config.statuses)) {
        let html = '';
        config.statuses.forEach((s, index) => {
            const checked = index === 0 ? 'checked' : '';
            const color = s.color || '#2563eb';
            html += `
                <label class="status-option-card" style="--status-color: ${color};">
                    <input type="radio" name="status" value="${escapeHtml(s.id)}" ${checked} required>
                    <span class="status-indicator-dot" style="background-color: ${color};"></span>
                    <span>${escapeHtml(s.label || s.id)}</span>
                </label>
            `;
        });
        statusContainer.innerHTML = html;
    }

    // 4. Populate Status Filter Dropdown in Table Toolbar
    const statusFilterSelect = document.getElementById('statusFilterSelect');
    if (statusFilterSelect && Array.isArray(config.statuses)) {
        let html = '<option value="">सभी स्थितियां | All Statuses</option>';
        config.statuses.forEach(s => {
            html += `<option value="${escapeHtml(s.id)}">${escapeHtml(s.label || s.id)}</option>`;
        });
        statusFilterSelect.innerHTML = html;
    }

    // 5. Build and populate Village reverse auto-fill index
    if (config.locations) {
        buildVillagesIndex(config.locations);
        populateAllVillagesDatalist();
    }
}

// Flat Index of all Villages across the District for Reverse Auto-fill
let allVillagesIndex = [];

/**
 * Build flat village index for instant lookup & datalist autocomplete
 */
function buildVillagesIndex(locations) {
    allVillagesIndex = [];
    if (!locations || typeof locations !== 'object') return;

    for (const [block, panchayats] of Object.entries(locations)) {
        if (!block || block === '__OTHER__' || !panchayats || typeof panchayats !== 'object') continue;
        for (const [panchayat, villages] of Object.entries(panchayats)) {
            if (!panchayat || panchayat === '__OTHER__' || !Array.isArray(villages)) continue;
            for (const village of villages) {
                if (!village || village === '__OTHER__') continue;
                const vTrim = village.trim();
                const pTrim = panchayat.trim();
                const bTrim = block.trim();
                allVillagesIndex.push({
                    village: vTrim,
                    panchayat: pTrim,
                    block: bTrim,
                    searchKey: `${vTrim} ${pTrim} ${bTrim}`.toLowerCase(),
                    displayLabel: `${vTrim} (पंचायत: ${pTrim}, ब्लॉक: ${bTrim})`
                });
            }
        }
    }
}

/**
 * Populate the <datalist id="allVillagesDatalist">
 * Supports optional filtering by Block and/or Gram Panchayat
 */
function populateAllVillagesDatalist(filterBlock = null, filterPanchayat = null) {
    const datalist = document.getElementById('allVillagesDatalist');
    const villageInput = document.getElementById('village');
    if (!datalist) return;

    if (allVillagesIndex.length === 0) {
        datalist.innerHTML = '';
        return;
    }

    let items = allVillagesIndex;

    // Filter by block if selected
    if (filterBlock && filterBlock !== '__OTHER__') {
        items = items.filter(item => item.block.toLowerCase() === filterBlock.toLowerCase());
    }

    // Filter by panchayat if selected
    if (filterPanchayat && filterPanchayat !== '__OTHER__') {
        items = items.filter(item => item.panchayat.toLowerCase() === filterPanchayat.toLowerCase());
    }

    // Sort alphabetically by village name
    const sorted = [...items].sort((a, b) => a.village.localeCompare(b.village, 'hi'));

    let html = '';
    if (filterPanchayat && filterPanchayat !== '__OTHER__') {
        // Panchayat is already known -> show only village names
        sorted.forEach(item => {
            html += `<option value="${escapeHtml(item.village)}"></option>`;
        });
        if (villageInput && (!villageInput.value || !filterPanchayat)) {
            villageInput.placeholder = `गाँव का नाम चुनें या लिखें (उदा. ${sorted.slice(0, 2).map(s => s.village).join(', ')}...)`;
        }
    } else if (filterBlock && filterBlock !== '__OTHER__') {
        // Block is known -> show village + panchayat
        sorted.forEach(item => {
            html += `<option value="${escapeHtml(item.village)} (पंचायत: ${escapeHtml(item.panchayat)})">${escapeHtml(item.village)}</option>`;
        });
        if (villageInput && !villageInput.value) {
            villageInput.placeholder = `गाँव का नाम लिखें या चुनें (ब्लॉक ${filterBlock} के अंतर्गत)`;
        }
    } else {
        // District-wide -> show village + panchayat + block
        sorted.forEach(item => {
            html += `<option value="${escapeHtml(item.displayLabel)}">${escapeHtml(item.village)}</option>`;
        });
        if (villageInput && !villageInput.value) {
            villageInput.placeholder = 'गाँव का नाम लिखें या चुनें (ब्लॉक व पंचायत स्वतः भर जाएंगे)';
        }
    }

    datalist.innerHTML = html;
}

/**
 * Find matching village(s) from user query
 */
function findVillageMatches(query) {
    const q = (query || '').trim().toLowerCase();
    if (!q) return [];

    // 1. Exact match with displayLabel e.g. "गीदम (पंचायत: गीदम, ब्लॉक: गीदम)"
    const exactDisplay = allVillagesIndex.find(v => v.displayLabel.toLowerCase() === q);
    if (exactDisplay) return [exactDisplay];

    // 1b. If formatted like "ग्राम (पंचायत: ...)"
    if (q.includes('(')) {
        const vPart = q.split('(')[0].trim();
        const parenPart = q.slice(q.indexOf('('));
        const matched = allVillagesIndex.find(v => {
            return v.village.toLowerCase() === vPart && (parenPart.includes(v.panchayat.toLowerCase()) || parenPart.includes(v.block.toLowerCase()));
        });
        if (matched) return [matched];
    }

    // 2. Exact match with village name e.g. "गीदम"
    const exactVillage = allVillagesIndex.filter(v => v.village.toLowerCase() === q);
    if (exactVillage.length > 0) return exactVillage;

    // 3. Prefix match e.g. "गीद"
    const prefixMatches = allVillagesIndex.filter(v => v.village.toLowerCase().startsWith(q));
    if (prefixMatches.length > 0) return prefixMatches;

    // 4. Contains match anywhere in searchKey
    return allVillagesIndex.filter(v => v.searchKey.includes(q));
}

/**
 * Handle Village input: auto-fills Block and Gram Panchayat if matching village is typed/chosen
 */
function handleVillageInput(query) {
    const statusEl = document.getElementById('autofillStatus');
    const clearBtn = document.getElementById('clearVillageBtn');
    const rawVal = (query || '').trim();

    if (clearBtn) {
        clearBtn.style.display = rawVal ? 'flex' : 'none';
    }

    if (!rawVal) {
        if (statusEl) {
            statusEl.style.display = 'none';
            statusEl.innerHTML = '';
        }
        return;
    }

    const currentBlock = document.getElementById('block') ? document.getElementById('block').value : '';
    const currentPanchayat = document.getElementById('panchayat') ? document.getElementById('panchayat').value : '';

    // If both block and panchayat are already manually chosen and user is just typing simple village name, don't overwrite
    if (currentBlock && currentPanchayat && !rawVal.includes('(')) {
        if (statusEl) statusEl.style.display = 'none';
        return;
    }

    const matches = findVillageMatches(rawVal);

    if (matches.length === 0) {
        if (statusEl && !currentBlock) {
            statusEl.className = 'autofill-status info';
            statusEl.style.display = 'flex';
            statusEl.innerHTML = `ℹ️ <strong>"${escapeHtml(rawVal)}"</strong> सूची में नहीं मिला। आप ऊपर ब्लॉक व पंचायत चुनकर इसे दर्ज कर सकते हैं।`;
        }
        return;
    }

    // If exactly 1 match or user selected an option with '('
    if (matches.length === 1 || rawVal.includes('(')) {
        const match = matches[0];
        applyLocationAutoFill(match);
    } else if (matches.length > 1) {
        // Multiple villages with same name
        if (statusEl) {
            statusEl.className = 'autofill-status info';
            statusEl.style.display = 'flex';
            statusEl.innerHTML = `ℹ️ <strong>"${escapeHtml(rawVal)}"</strong> नाम से <strong>${matches.length}</strong> गाँव मिले। कृपया लिस्ट से सही पंचायत वाला विकल्प चुनें।`;
        }
    }
}

/**
 * Apply the auto-filled Block, Panchayat, and Village to the form controls
 */
function applyLocationAutoFill(match) {
    const blockSelect = document.getElementById('block');
    const panchayatSelect = document.getElementById('panchayat');
    const villageInput = document.getElementById('village');
    const statusEl = document.getElementById('autofillStatus');

    // 1. Select Block
    if (blockSelect) {
        blockSelect.value = match.block;
        blockSelect.classList.add('autofill-highlight');
        setTimeout(() => blockSelect.classList.remove('autofill-highlight'), 1200);

        // Populate Panchayats for this Block
        if (currentConfig.locations && currentConfig.locations[match.block]) {
            const panchayats = Object.keys(currentConfig.locations[match.block]);
            let html = '<option value="">-- ग्राम पंचायत चुनें / Select Gram Panchayat --</option>';
            panchayats.forEach(p => {
                html += `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`;
            });
            html += '<option value="__OTHER__">➕ अन्य / Other (मैन्युअल दर्ज करें)</option>';
            if (panchayatSelect) {
                panchayatSelect.innerHTML = html;
                panchayatSelect.disabled = false;
            }
        }
    }

    // 2. Select Gram Panchayat
    if (panchayatSelect) {
        panchayatSelect.value = match.panchayat;
        panchayatSelect.classList.add('autofill-highlight');
        setTimeout(() => panchayatSelect.classList.remove('autofill-highlight'), 1200);
    }

    // 3. Update datalist to only show villages for this Panchayat
    populateAllVillagesDatalist(match.block, match.panchayat);

    // 4. Set clean village name in input (strips any "(पंचायत: ...)" string)
    if (villageInput) {
        villageInput.value = match.village;
        villageInput.classList.add('autofill-highlight');
        setTimeout(() => villageInput.classList.remove('autofill-highlight'), 1200);
    }

    // 5. Update status display with confirmation
    if (statusEl) {
        statusEl.className = 'autofill-status success';
        statusEl.style.display = 'flex';
        statusEl.innerHTML = `✓ <strong>स्वतः भर दिया गया:</strong> ब्लॉक: <strong>${escapeHtml(match.block)}</strong> | ग्राम पंचायत: <strong>${escapeHtml(match.panchayat)}</strong>`;
    }
}

/**
 * Clear the Village input and reset status
 */
function clearVillage() {
    const villageInput = document.getElementById('village');
    const clearBtn = document.getElementById('clearVillageBtn');
    const statusEl = document.getElementById('autofillStatus');
    if (villageInput) {
        villageInput.value = '';
        villageInput.focus();
    }
    if (clearBtn) clearBtn.style.display = 'none';
    if (statusEl) {
        statusEl.style.display = 'none';
        statusEl.innerHTML = '';
    }
}

/**
 * Handle Block selection -> Populate Gram Panchayats dynamically (Original Cascading Flow Step 1)
 */
function handleBlockChange() {
    const blockSelect = document.getElementById('block');
    const panchayatSelect = document.getElementById('panchayat');
    const villageInput = document.getElementById('village');
    const panchayatCustom = document.getElementById('panchayatCustom');
    const statusEl = document.getElementById('autofillStatus');

    const selectedBlock = blockSelect ? blockSelect.value : '';

    if (panchayatCustom) panchayatCustom.style.display = 'none';

    if (!selectedBlock || !currentConfig.locations || !currentConfig.locations[selectedBlock]) {
        if (panchayatSelect) {
            panchayatSelect.innerHTML = '<option value="">-- पहले ब्लॉक चुनें / Select Block First --</option>';
            panchayatSelect.disabled = true;
            panchayatSelect.value = '';
        }
        // Reset datalist to district-wide
        populateAllVillagesDatalist(null, null);
        if (statusEl) statusEl.style.display = 'none';
        return;
    }

    // Populate Gram Panchayats of the selected Block
    const panchayats = Object.keys(currentConfig.locations[selectedBlock]);
    let html = '<option value="">-- ग्राम पंचायत चुनें / Select Gram Panchayat --</option>';
    panchayats.forEach(p => {
        html += `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`;
    });
    html += '<option value="__OTHER__">➕ अन्य / Other (मैन्युअल दर्ज करें)</option>';

    if (panchayatSelect) {
        panchayatSelect.innerHTML = html;
        panchayatSelect.disabled = false;
        panchayatSelect.value = '';
    }

    // Filter village datalist to this block
    populateAllVillagesDatalist(selectedBlock, null);

    // If current village doesn't belong to this block, clear it
    if (villageInput && villageInput.value) {
        const vClean = villageInput.value.split('(')[0].trim();
        const belongs = allVillagesIndex.some(v => v.village.toLowerCase() === vClean.toLowerCase() && v.block.toLowerCase() === selectedBlock.toLowerCase());
        if (!belongs) {
            villageInput.value = '';
            if (statusEl) statusEl.style.display = 'none';
        }
    }
}

/**
 * Handle Gram Panchayat selection -> Populate Villages dynamically (Original Cascading Flow Step 2)
 */
function handlePanchayatChange() {
    const blockSelect = document.getElementById('block');
    const panchayatSelect = document.getElementById('panchayat');
    const villageInput = document.getElementById('village');
    const panchayatCustom = document.getElementById('panchayatCustom');
    const statusEl = document.getElementById('autofillStatus');

    const selectedBlock = blockSelect ? blockSelect.value : '';
    const selectedPanchayat = panchayatSelect ? panchayatSelect.value : '';

    if (selectedPanchayat === '__OTHER__') {
        if (panchayatCustom) {
            panchayatCustom.style.display = 'block';
            panchayatCustom.required = true;
            panchayatCustom.focus();
        }
        populateAllVillagesDatalist(null, null);
        return;
    }

    if (panchayatCustom) {
        panchayatCustom.style.display = 'none';
        panchayatCustom.required = false;
        panchayatCustom.value = '';
    }

    if (!selectedPanchayat || !currentConfig.locations || !currentConfig.locations[selectedBlock] || !currentConfig.locations[selectedBlock][selectedPanchayat]) {
        populateAllVillagesDatalist(selectedBlock, null);
        return;
    }

    // Populate datalist with only villages under this specific Panchayat!
    populateAllVillagesDatalist(selectedBlock, selectedPanchayat);

    // If current village doesn't belong to this panchayat, clear it
    if (villageInput && villageInput.value) {
        const vClean = villageInput.value.split('(')[0].trim();
        const villagesInGP = currentConfig.locations[selectedBlock][selectedPanchayat] || [];
        const belongs = villagesInGP.some(v => v.toLowerCase() === vClean.toLowerCase());
        if (!belongs) {
            villageInput.value = '';
        }
    }

    if (statusEl) {
        statusEl.style.display = 'none';
    }
}

/**
 * Set default date picker value to today
 */
function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.value = today;
    }
}

/**
 * Setup DOM event listeners
 */
function setupEventListeners() {
    const form = document.getElementById('grievanceForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        form.addEventListener('reset', () => {
            setTimeout(() => {
                clearVillage();
                handleBlockChange();
                setDefaultDate();
            }, 20);
        });
    }

    // Village Input & Reverse Auto-Fill Listener
    const villageInput = document.getElementById('village');
    if (villageInput) {
        villageInput.addEventListener('input', (e) => {
            handleVillageInput(e.target.value);
        });
        villageInput.addEventListener('change', (e) => {
            handleVillageInput(e.target.value);
        });
    }

    const clearVillageBtn = document.getElementById('clearVillageBtn');
    if (clearVillageBtn) {
        clearVillageBtn.addEventListener('click', clearVillage);
    }

    // Cascading Location Dropdown Listeners
    const blockSelect = document.getElementById('block');
    if (blockSelect) {
        blockSelect.addEventListener('change', handleBlockChange);
    }

    const panchayatSelect = document.getElementById('panchayat');
    if (panchayatSelect) {
        panchayatSelect.addEventListener('change', handlePanchayatChange);
    }

    // Refresh Locations directly from Google Sheet button
    const refreshBtn = document.getElementById('refreshLocationsBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', async () => {
            refreshBtn.disabled = true;
            const originalText = refreshBtn.innerHTML;
            refreshBtn.innerHTML = '⏳ लोड हो रहा है...';
            try {
                const locs = await fetchLocationsFromSheet();
                if (locs && Object.keys(locs).length > 0) {
                    currentConfig.locations = locs;
                    currentConfig.blocks = Object.keys(locs).map(b => ({ value: b, label: b }));
                    renderFormOptions(currentConfig);
                    alert(`✓ Google Sheet से सफलता पूर्वक ${Object.keys(locs).length} ब्लॉक और उनकी पंचायतें लोड हो गईं!`);
                } else {
                    alert('⚠️ Google Sheet की "Locations" शीट में कोई डेटा नहीं मिला या शीट खाली है।');
                }
            } catch (err) {
                alert('⚠️ Google Sheet से लोड नहीं हो सका: ' + err.message);
            } finally {
                refreshBtn.disabled = false;
                refreshBtn.innerHTML = originalText;
            }
        });
    }

    // 1. Phone number: numbers only, max 10 digits
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
        });
    }

    // 2. Aadhaar number: numbers only, max 12 digits
    const aadharInput = document.getElementById('aadhar');
    if (aadharInput) {
        aadharInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 12);
        });
    }

    // 3. Enrollment number: numbers only, max 28 digits
    const enrollmentInput = document.getElementById('enrollment');
    if (enrollmentInput) {
        enrollmentInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 28);
        });
    }

    // 4. Modal handlers
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeSubmissionModal);
    }

    const modalViewAllBtn = document.getElementById('modalViewAllBtn');
    if (modalViewAllBtn) {
        modalViewAllBtn.addEventListener('click', () => {
            closeSubmissionModal();
            switchTab(2);
        });
    }

    const modal = document.getElementById('submissionModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeSubmissionModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSubmissionModal();
        }
    });

    // 5. All Grievances Search & Filter Listeners
    const searchInput = document.getElementById('grievanceSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            displayGrievances();
        });
    }

    const statusFilterSelect = document.getElementById('statusFilterSelect');
    if (statusFilterSelect) {
        statusFilterSelect.addEventListener('change', (e) => {
            statusFilterQuery = e.target.value.trim();
            displayGrievances();
        });
    }

    // 6. Explicit tab click event listeners (ensures tabs switch reliably on every device)
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(index);
        });
    });
}

/**
 * Switch tabs in UI
 */
export function switchTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (tabs[tabIndex]) tabs[tabIndex].classList.add('active');
    if (buttons[tabIndex]) buttons[tabIndex].classList.add('active');

    if (tabIndex === 0) {
        updateDashboard();
    } else if (tabIndex === 2) {
        displayGrievances();
    }

    // Scroll smoothly to top of content on mobile
    const mainTabNav = document.getElementById('mainTabNav');
    if (mainTabNav) {
        mainTabNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Handle form submission
 */
async function handleFormSubmit(e) {
    e.preventDefault();

    const submitBtn = document.querySelector('.btn-submit');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '✓ जमा करें | SUBMIT';

    const blockVal = (document.getElementById('block').value || '').trim();

    const panchayatSelect = document.getElementById('panchayat');
    const panchayatCustom = document.getElementById('panchayatCustom');
    const panchayatVal = (panchayatSelect && panchayatSelect.value === '__OTHER__')
        ? (panchayatCustom ? panchayatCustom.value.trim() : '')
        : (panchayatSelect ? panchayatSelect.value.trim() : '');

    const villageInput = document.getElementById('village');
    let villageVal = (villageInput ? villageInput.value.trim() : '');
    if (villageVal.includes('(')) {
        villageVal = villageVal.split('(')[0].trim();
    }

    const phoneVal = (document.getElementById('phone').value || '').trim();
    const aadharVal = (document.getElementById('aadhar').value || '').trim();
    const enrollmentVal = (document.getElementById('enrollment').value || '').trim();
    const emailVal = (document.getElementById('email').value || '').trim();

    // 0. Location Validation
    if (!blockVal) {
        alert('⚠️ कृपया ब्लॉक का चयन करें।\nPlease select a Block.');
        document.getElementById('block').focus();
        return;
    }

    if (!panchayatVal) {
        alert('⚠️ कृपया ग्राम पंचायत का चयन करें या दर्ज करें।\nPlease select or enter Gram Panchayat.');
        if (panchayatSelect && panchayatSelect.value === '__OTHER__' && panchayatCustom) {
            panchayatCustom.focus();
        } else if (panchayatSelect) {
            panchayatSelect.focus();
        }
        return;
    }

    if (!villageVal) {
        alert('⚠️ कृपया ग्राम का चयन करें या दर्ज करें।\nPlease select or enter Village name.');
        if (villageInput) {
            villageInput.focus();
        }
        return;
    }

    // 1. Phone Validation: If provided, must be 10 digits
    if (phoneVal && phoneVal.length !== 10) {
        alert('⚠️ कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।\nPlease enter a valid 10-digit phone number.');
        document.getElementById('phone').focus();
        return;
    }

    // 2. Aadhaar Validation: If provided, must be exactly 12 digits
    if (aadharVal && aadharVal.length !== 12) {
        alert('⚠️ आधार नंबर ठीक 12 अंकों का होना चाहिए।\nAadhaar number must be exactly 12 digits.');
        document.getElementById('aadhar').focus();
        return;
    }

    // 3. Enrollment Validation: If provided, must be exactly 28 digits
    if (enrollmentVal && enrollmentVal.length !== 28) {
        alert('⚠️ एनरोलमेंट नंबर ठीक 28 अंकों का होना चाहिए।\nEnrollment number must be exactly 28 digits.');
        document.getElementById('enrollment').focus();
        return;
    }

    // 4. Email Validation: If provided, must be valid email format
    if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        alert('⚠️ कृपया एक मान्य ईमेल पता दर्ज करें (उदा. example@gmail.com)\nPlease enter a valid email address.');
        document.getElementById('email').focus();
        return;
    }
    
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ जमा हो रहा है... | Submitting...';
    }

    const selectedStatus = document.querySelector('input[name="status"]:checked');
    const defaultStatus = (currentConfig.statuses && currentConfig.statuses[0]) ? currentConfig.statuses[0].id : 'नई';

    const grievance = {
        id: 'GRV-' + Date.now(),
        applicantName: document.getElementById('applicantName').value,
        fatherName: document.getElementById('fatherName').value,
        age: document.getElementById('age').value,
        phone: phoneVal,
        block: blockVal,
        panchayat: panchayatVal,
        village: villageVal,
        email: emailVal,
        aadhar: aadharVal,
        enrollment: enrollmentVal,
        reason: document.getElementById('reason').value,
        description: document.getElementById('description').value,
        status: selectedStatus ? selectedStatus.value : defaultStatus,
        remarks: document.getElementById('remarks').value,
        date: document.getElementById('date').value
    };

    try {
        const result = await submitGrievance(grievance);
        
        // Add to local state and update views
        grievances.unshift(grievance);
        
        showSubmissionFeedback(result.syncedToSheet, result.error);
        openSubmissionModal(grievance, result.syncedToSheet);

        document.getElementById('grievanceForm').reset();
        handleBlockChange();
        setDefaultDate();
        updateDashboard();
        displayGrievances();

        setTimeout(() => {
            const successEl = document.getElementById('successMessage');
            if (successEl) {
                successEl.classList.remove('show');
            }
        }, 7000);

    } catch (err) {
        alert('त्रुटि: शिकायत जमा करने में समस्या आई। कृपया पुनः प्रयास करें।');
        console.error(err);
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    }
}

/**
 * Open submission confirmation modal popup
 */
function openSubmissionModal(grievance, synced) {
    const modal = document.getElementById('submissionModal');
    if (!modal) return;

    const idEl = document.getElementById('modalGrievanceId');
    const nameEl = document.getElementById('modalApplicantName');
    const statusEl = document.getElementById('modalSyncStatus');

    if (idEl) idEl.textContent = grievance.id || '-';
    if (nameEl) nameEl.textContent = grievance.applicantName || '-';

    if (statusEl) {
        if (synced) {
            statusEl.className = 'modal-status-badge synced';
            statusEl.textContent = '✓ Google Sheet में दर्ज';
        } else {
            statusEl.className = 'modal-status-badge local';
            statusEl.textContent = '⚠️ केवल स्थानीय सुरक्षित (Offline)';
        }
    }

    modal.classList.add('show');
}

/**
 * Close submission confirmation modal popup
 */
function closeSubmissionModal() {
    const modal = document.getElementById('submissionModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

/**
 * Show submission status alert (Google Sheet synced vs Offline fallback)
 */
function showSubmissionFeedback(synced, errorMsg = '') {
    const message = document.getElementById('successMessage');
    if (!message) return;

    if (synced) {
        message.className = 'success-message show success-synced';
        message.innerHTML = '✓ आपकी शिकायत सफलतापूर्वक Google Sheet में दर्ज हो गई है। | Grievance successfully synced to Google Sheet.';
    } else {
        message.className = 'success-message show warning-unsynced';
        message.innerHTML = `⚠️ <strong>चेतावनी:</strong> शिकायत केवल स्थानीय (Offline) रूप से सुरक्षित हुई है, <strong>Google Sheet में दर्ज नहीं हुई!</strong><br><small style="margin-top:5px;display:block;">कारण / Error: ${escapeHtml(errorMsg || "Apps Script permission error")}</small>`;
    }
}

/**
 * Update Dashboard metrics and charts dynamically
 */
function updateDashboard() {
    const total = grievances.length;
    const statuses = currentConfig.statuses || [];

    // Update tab badge count
    const tabCount = document.getElementById('tabGrievanceCount');
    if (tabCount) {
        tabCount.textContent = total;
    }

    // Render Stat Cards dynamically
    renderDashboardCards(total, statuses, grievances);

    // Render Charts dynamically
    drawDynamicStatusChart(statuses, grievances);
    drawDynamicBlockChart();
    drawDynamicReasonChart();
}

/**
 * Render Dashboard Stat Cards dynamically (1 Total card + 1 card per configured status)
 */
function renderDashboardCards(total, statuses, data) {
    const grid = document.getElementById('dashboardGrid');
    if (!grid) return;

    let html = `
        <div class="stat-card stat-card-total">
            <div class="stat-card-header">
                <span class="stat-label">कुल शिकायतें | Total Grievances</span>
                <span class="stat-icon-badge total-badge">📊</span>
            </div>
            <div class="stat-number">${total}</div>
            <div class="stat-meta">सभी पंजीकृत आवेदन</div>
        </div>
    `;

    const statusIcons = {
        'नई': '🆕',
        'लंबित': '⏳',
        'हल': '✅',
        'अस्वीकृत': '❌'
    };

    statuses.forEach(status => {
        const count = data.filter(g => String(g.status).trim() === String(status.id).trim()).length;
        const color = status.color || '#2563eb';
        const icon = statusIcons[status.id] || '📋';
        html += `
            <div class="stat-card" style="--accent-color: ${color};">
                <div class="stat-card-header">
                    <span class="stat-label">${escapeHtml(status.label || status.id)}</span>
                    <span class="stat-icon-badge" style="background-color: ${color}15; color: ${color};">${icon}</span>
                </div>
                <div class="stat-number" style="color: ${color};">${count}</div>
                <div class="stat-meta">स्थिति: ${escapeHtml(status.id)}</div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

/**
 * Draw Status Distribution Chart dynamically
 */
function drawDynamicStatusChart(statuses, data) {
    const chartData = statuses.map(status => {
        const count = data.filter(g => String(g.status).trim() === String(status.id).trim()).length;
        return {
            label: status.label || status.id,
            value: count,
            color: status.color || '#2563eb'
        };
    });

    const maxValue = chartData.length > 0 ? Math.max(...chartData.map(d => d.value), 1) : 1;
    renderChart('barChart', chartData, maxValue);
}

/**
 * Draw Block Distribution Chart dynamically
 */
function drawDynamicBlockChart() {
    const blockData = {};
    grievances.forEach(g => {
        if (g.block) {
            blockData[g.block] = (blockData[g.block] || 0) + 1;
        }
    });

    const data = Object.entries(blockData).map(([label, value]) => ({
        label,
        value,
        color: '#2563eb'
    }));

    const maxValue = data.length > 0 ? Math.max(...data.map(d => d.value), 1) : 1;
    renderChart('blockChart', data, maxValue);
}

/**
 * Draw Reason Distribution Chart dynamically
 */
function drawDynamicReasonChart() {
    const reasonData = {};
    grievances.forEach(g => {
        if (g.reason) {
            reasonData[g.reason] = (reasonData[g.reason] || 0) + 1;
        }
    });

    const data = Object.entries(reasonData).map(([label, value]) => ({
        label,
        value,
        color: '#7c3aed'
    }));

    const maxValue = data.length > 0 ? Math.max(...data.map(d => d.value), 1) : 1;
    renderChart('reasonChart', data, maxValue);
}

/**
 * Helper to render responsive bar charts
 */
function renderChart(containerId, data, maxValue) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';

    if (data.length === 0 || data.every(d => d.value === 0)) {
        container.innerHTML = '<div class="chart-empty-state">📊 कोई डेटा उपलब्ध नहीं | No data recorded yet</div>';
        return;
    }

    data.forEach(item => {
        const height = maxValue > 0 ? Math.round((item.value / maxValue) * 100) : 0;
        const bar = document.createElement('div');
        bar.className = 'bar-wrapper';
        bar.title = `${item.label}: ${item.value}`;
        bar.innerHTML = `
            <div class="bar-value">${item.value}</div>
            <div class="bar-track">
                <div class="bar" style="height: ${Math.max(height, 4)}%; background: ${item.color || '#2563eb'};"></div>
            </div>
            <div class="bar-label" title="${escapeHtml(item.label)}">${escapeHtml(item.label)}</div>
        `;
        container.appendChild(bar);
    });
}

function adjustColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

/**
 * Display All Grievances in Tab 3 with search, filter, and dynamic status badges
 */
function displayGrievances() {
    const container = document.getElementById('grievancesContainer');
    const countBadge = document.getElementById('grievanceCountBadge');
    if (!container) return;
    
    // Filter grievances by searchQuery and statusFilterQuery
    const filtered = grievances.filter(g => {
        const matchesSearch = !searchQuery || [
            g.applicantName,
            g.phone,
            g.aadhar,
            g.enrollment,
            g.reason,
            g.block,
            g.panchayat,
            g.village,
            g.id
        ].some(val => String(val || '').toLowerCase().includes(searchQuery));

        const matchesStatus = !statusFilterQuery || String(g.status || '').trim() === statusFilterQuery.trim();

        return matchesSearch && matchesStatus;
    });

    if (countBadge) {
        countBadge.textContent = `${filtered.length} शिकायतें | ${filtered.length} Records`;
    }

    if (filtered.length === 0) {
        if (grievances.length === 0) {
            container.innerHTML = `
                <div class="empty-message">
                    🔍 कोई शिकायत नहीं मिली | No grievances found<br>
                    नई शिकायतें यहाँ दिखाई देंगी | New grievances will appear here
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="empty-message">
                    🔍 खोजे गए विवरण से कोई शिकायत मेल नहीं खाती | No matching grievances found<br>
                    कृपया अन्य नाम, फ़ोन या कारण से खोजें | Try searching with another term
                </div>
            `;
        }
        return;
    }

    let html = `
        <div class="table-wrapper">
            <table class="grievance-table">
                <thead>
                    <tr>
                        <th>आवेदक | Applicant</th>
                        <th>ब्लॉक/स्थान | Block/Location</th>
                        <th>कारण | Reason</th>
                        <th>तारीख | Date</th>
                        <th>स्थिति | Status</th>
                        <th>विवरण | Description</th>
                    </tr>
                </thead>
                <tbody>
    `;

    filtered.forEach(g => {
        const desc = (g.description || '').substring(0, 60) + ((g.description && g.description.length > 60) ? '...' : '');
        const statusConfig = (currentConfig.statuses || []).find(s => String(s.id).trim() === String(g.status).trim());
        const statusColor = statusConfig ? statusConfig.color : '#2563eb';
        const locationText = [g.block, g.panchayat, g.village].filter(Boolean).join(' • ');

        html += `
            <tr>
                <td data-label="आवेदक | Applicant">
                    <span class="table-applicant-name">${escapeHtml(g.applicantName || 'अज्ञात / Unknown')}</span>
                    <span class="table-applicant-sub">${escapeHtml(g.phone ? '📞 ' + g.phone : (g.fatherName ? 'पिता: ' + g.fatherName : ''))}</span>
                </td>
                <td data-label="स्थान | Location">${escapeHtml(locationText || '-')}</td>
                <td data-label="कारण | Reason"><strong>${escapeHtml(g.reason || '-')}</strong></td>
                <td data-label="तारीख | Date">${formatDate(g.date) || '-'}</td>
                <td data-label="स्थिति | Status">
                    <span class="status-badge" style="background-color: ${statusColor}15; color: ${statusColor}; border: 1px solid ${statusColor}40;">
                        ${escapeHtml(g.status || 'नई')}
                    </span>
                </td>
                <td data-label="विवरण | Description">${escapeHtml(desc || '-')}</td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;
}

function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    try {
        const date = new Date(dateStr);
        return isNaN(date.getTime()) ? dateStr : date.toLocaleDateString('hi-IN');
    } catch (e) {
        return dateStr;
    }
}

// Bind to window for HTML inline onclick handlers
window.switchTab = switchTab;
window.toggleTheme = toggleTheme;

// Start app on DOM ready
window.addEventListener('DOMContentLoaded', init);
