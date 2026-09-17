import { getCurrentLanguage, applyLanguage, toggleLanguage, TRANSLATIONS } from './i18n.js';
import { getInitialData, submitGrievance, APPS_SCRIPT_URL, fetchLocationsFromSheet } from './api.js';
import { DEFAULT_CONFIG } from '../config/defaultConfig.js';

// Application State
let currentConfig = DEFAULT_CONFIG;
let grievances = [];
let searchQuery = '';
let statusFilterQuery = '';
let isSubmittingGrievance = false;

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

    const currentLang = getCurrentLanguage();
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.hi;
    const isDark = theme === 'dark';
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    if (text) text.textContent = isDark ? t.themeLight : t.themeDark;
    btn.setAttribute('aria-label', isDark ? (currentLang === 'en' ? 'Switch to Light Mode' : 'लाइट मोड में बदलें') : (currentLang === 'en' ? 'Switch to Dark Mode' : 'डार्क मोड में बदलें'));
    btn.setAttribute('title', isDark ? (currentLang === 'en' ? 'Switch to Light Mode' : 'लाइट मोड में बदलें') : (currentLang === 'en' ? 'Switch to Dark Mode' : 'डार्क मोड में बदलें'));
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
    applyLanguage(getCurrentLanguage());
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
        const currentLang = getCurrentLanguage();
        timeEl.textContent = '🕒 ' + now.toLocaleString(currentLang === 'en' ? 'en-IN' : 'hi-IN', options);
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
    const lang = getCurrentLanguage();
    const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;

    // 1. Populate Block Dropdown (from config.blocks or config.locations hierarchy)
    const blockSelect = document.getElementById('block');
    if (blockSelect) {
        const blocksList = (config.blocks && config.blocks.length > 0)
            ? config.blocks
            : ((config.locations && Object.keys(config.locations).length > 0)
                ? Object.keys(config.locations).map(b => ({ value: b, label: b }))
                : []);

        const currentValue = blockSelect.value;
        let html = '';
        if (blocksList.length === 0) {
            html = `<option value="">${lang === 'en' ? '-- Loading from Sheet... --' : '-- शीट से लोड हो रहा है... --'}</option>`;
        } else {
            html = `<option value="">${t.optSelectBlock}</option>`;
            blocksList.forEach(b => {
                const isSelected = b.value === currentValue ? 'selected' : '';
                html += `<option value="${escapeHtml(b.value)}" ${isSelected}>${escapeHtml(b.label || b.value)}</option>`;
            });
            html += `<option value="__OTHER__">${t.optOther}</option>`;
        }
        blockSelect.innerHTML = html;

        // If a block was already selected, refresh dependent dropdowns
        if (currentValue && config.locations) {
            handleBlockChange();
        }
    }

    // 2. Populate Reason Dropdown
    const reasonSelect = document.getElementById('reason');
    if (reasonSelect && Array.isArray(config.reasons)) {
        const currentValue = reasonSelect.value;
        let html = `<option value="">${t.optSelectReason}</option>`;
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
        let html = `<option value="">${t.optAllStatuses}</option>`;
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

// Block Aliases for seamless matching across spellings and variants
const BLOCK_ALIASES = {
    'दंतेवाड़ा': 'दंतेवाड़ा',
    'दंतेवाडा': 'दंतेवाड़ा',
    'dantewada': 'दंतेवाड़ा',
    'गीदम': 'गीदम',
    'geedam': 'गीदम',
    'gidam': 'गीदम',
    'कुआकोंडा': 'कुआकोंडा',
    'कोवाकोंडा': 'कुआकोंडा',
    'kuakonda': 'कुआकोंडा',
    'kuwakonda': 'कुआकोंडा',
    'kovakonda': 'कुआकोंडा',
    'कटेकल्याण': 'कटेकल्याण',
    'कटे कल्याण': 'कटेकल्याण',
    'katekalyan': 'कटेकल्याण'
};

/**
 * Find matching block entry in locations taking aliases and variations into account
 */
function findBlockInLocations(locations, blockName) {
    if (!locations || !blockName) return null;
    const bTrim = blockName.trim();
    if (locations[bTrim]) return { blockKey: bTrim, data: locations[bTrim] };

    const canon = BLOCK_ALIASES[bTrim] || BLOCK_ALIASES[bTrim.toLowerCase()];
    if (canon && locations[canon]) return { blockKey: canon, data: locations[canon] };

    for (const [key, val] of Object.entries(locations)) {
        if (key.toLowerCase() === bTrim.toLowerCase()) {
            return { blockKey: key, data: val };
        }
        const keyCanon = BLOCK_ALIASES[key] || BLOCK_ALIASES[key.toLowerCase()];
        if (keyCanon && canon && keyCanon === canon) {
            return { blockKey: key, data: val };
        }
    }
    return null;
}

/**
 * Ensures every block contains its namesake Gram Panchayat and Village options.
 * E.g., Dantewada block -> Dantewada village, Geedam block -> Geedam village,
 * Kuakonda/Kovakonda block -> Kovakonda/Kuakonda village, Katekalyan block -> Katekalyan/Kate Kalyan village.
 */
function ensureBlockNamesakeVillages(locations) {
    if (!locations || typeof locations !== 'object') return;

    const blockSpecs = [
        {
            names: ["दंतेवाड़ा", "दंतेवाडा", "Dantewada"],
            gpNames: ["दंतेवाड़ा", "दंतेवाडा"],
            villages: ["दंतेवाड़ा", "दंतेवाडा", "दंतेवाड़ा (मुख्यालय)", "दंतेवाडा (मुख्यालय)"]
        },
        {
            names: ["गीदम", "Geedam", "Gidam"],
            gpNames: ["गीदम"],
            villages: ["गीदम", "गीदम (मुख्यालय)"]
        },
        {
            names: ["कुआकोंडा", "कोवाकोंडा", "Kuakonda", "Kovakonda", "Kuwakonda"],
            gpNames: ["कुआकोंडा", "कोवाकोंडा"],
            villages: ["कुआकोंडा", "कोवाकोंडा", "कुआकोंडा (मुख्यालय)", "कोवाकोंडा (मुख्यालय)"]
        },
        {
            names: ["कटेकल्याण", "कटे कल्याण", "Katekalyan", "Kate Kalyan"],
            gpNames: ["कटेकल्याण", "कटे कल्याण"],
            villages: ["कटेकल्याण", "कटे कल्याण", "कटेकल्याण (मुख्यालय)", "कटे कल्याण (मुख्यालय)"]
        }
    ];

    blockSpecs.forEach(spec => {
        // Find existing matching keys in locations
        const matchingKeys = Object.keys(locations).filter(k => 
            spec.names.includes(k) || (BLOCK_ALIASES[k] && spec.names.includes(BLOCK_ALIASES[k]))
        );

        const keysToProcess = matchingKeys.length > 0 ? matchingKeys : [spec.names[0]];

        keysToProcess.forEach(bKey => {
            if (!locations[bKey]) locations[bKey] = {};
            const blockObj = locations[bKey];

            // Find or create primary Gram Panchayat
            let targetGp = null;
            for (const gp of spec.gpNames) {
                if (blockObj[gp]) {
                    targetGp = gp;
                    break;
                }
            }
            if (!targetGp) {
                targetGp = spec.gpNames[0];
                blockObj[targetGp] = [];
            }
            if (!Array.isArray(blockObj[targetGp])) {
                blockObj[targetGp] = [];
            }

            // Ensure namesake villages are present at top
            spec.villages.forEach(v => {
                if (!blockObj[targetGp].includes(v)) {
                    blockObj[targetGp].unshift(v);
                }
            });
        });
    });
}

/**
 * Build flat village index for instant lookup & datalist autocomplete
 */
function buildVillagesIndex(locations) {
    allVillagesIndex = [];
    if (!locations || typeof locations !== 'object') return;

    ensureBlockNamesakeVillages(locations);

    for (const [block, panchayats] of Object.entries(locations)) {
        if (!block || block === '__OTHER__' || !panchayats || typeof panchayats !== 'object') continue;
        for (const [panchayat, villages] of Object.entries(panchayats)) {
            if (!panchayat || panchayat === '__OTHER__' || !Array.isArray(villages)) continue;
            for (const village of villages) {
                if (!village || village === '__OTHER__') continue;
                const vTrim = village.trim();
                const pTrim = panchayat.trim();
                const bTrim = block.trim();

                const exists = allVillagesIndex.some(item => 
                    item.village.toLowerCase() === vTrim.toLowerCase() &&
                    item.panchayat.toLowerCase() === pTrim.toLowerCase() &&
                    item.block.toLowerCase() === bTrim.toLowerCase()
                );
                if (!exists) {
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
}

/**
 * Get available villages based on selected Block and Panchayat
 */
function getAvailableVillages(filterBlock = null, filterPanchayat = null) {
    if (allVillagesIndex.length === 0) return [];

    let items = allVillagesIndex;

    // Filter by block if selected (alias-aware)
    if (filterBlock && filterBlock !== '__OTHER__') {
        const filterCanon = BLOCK_ALIASES[filterBlock.trim()] || filterBlock.trim().toLowerCase();
        items = items.filter(item => {
            const itemCanon = BLOCK_ALIASES[item.block] || item.block.toLowerCase();
            return itemCanon === filterCanon || item.block.toLowerCase() === filterBlock.toLowerCase();
        });
    }

    // Filter by panchayat if selected (alias-aware)
    if (filterPanchayat && filterPanchayat !== '__OTHER__') {
        const pFilterCanon = BLOCK_ALIASES[filterPanchayat.trim()] || filterPanchayat.trim().toLowerCase();
        items = items.filter(item => {
            const itemPCanon = BLOCK_ALIASES[item.panchayat] || item.panchayat.toLowerCase();
            return itemPCanon === pFilterCanon || item.panchayat.toLowerCase() === filterPanchayat.toLowerCase();
        });
    }

    // Deduplicate
    const seen = new Set();
    const uniqueItems = [];
    for (const item of items) {
        const key = filterPanchayat ? item.village.toLowerCase() : `${item.village}|${item.panchayat}`.toLowerCase();
        if (!seen.has(key)) {
            seen.add(key);
            uniqueItems.push(item);
        }
    }

    // Sort: if filterBlock is active, prioritize exact namesake village to top!
    const sorted = [...uniqueItems].sort((a, b) => {
        if (filterBlock) {
            const fbCanon = BLOCK_ALIASES[filterBlock.trim()] || filterBlock.trim();
            const aCanon = BLOCK_ALIASES[a.village.trim()] || a.village.trim();
            const bCanon = BLOCK_ALIASES[b.village.trim()] || b.village.trim();
            const aMatchesBlock = aCanon === fbCanon || a.village.includes(filterBlock.trim());
            const bMatchesBlock = bCanon === fbCanon || b.village.includes(filterBlock.trim());
            if (aMatchesBlock && !bMatchesBlock) return -1;
            if (!aMatchesBlock && bMatchesBlock) return 1;
        }
        return a.village.localeCompare(b.village, 'hi');
    });

    return sorted;
}

let activeVillageItemIndex = -1;

/**
 * Render items in the custom interactive village dropdown menu
 */
function renderVillageDropdownMenu(query = '') {
    const menu = document.getElementById('villageDropdownMenu');
    const villageInput = document.getElementById('village');
    const toggleBtn = document.getElementById('toggleVillageDropdownBtn');
    if (!menu || !villageInput) return;

    const currentBlock = document.getElementById('block') ? document.getElementById('block').value : '';
    const currentPanchayat = document.getElementById('panchayat') ? document.getElementById('panchayat').value : '';

    const available = getAvailableVillages(currentBlock, currentPanchayat);
    const q = (query || '').trim().toLowerCase();

    let filtered = available;
    if (q) {
        filtered = available.filter(item => {
            return item.village.toLowerCase().includes(q) ||
                   (item.panchayat && item.panchayat.toLowerCase().includes(q)) ||
                   (item.block && item.block.toLowerCase().includes(q));
        });
    }

    if (filtered.length === 0) {
        menu.innerHTML = `
            <div class="village-dropdown-empty">
                <span>"${escapeHtml(query)}" से मेल खाता कोई गाँव नहीं मिला</span>
                <div style="font-size:0.75rem; color:#94a3b8; margin-top:3px;">(आप इस नाम को सीधे दर्ज कर सकते हैं)</div>
            </div>
        `;
        menu.style.display = 'block';
        if (toggleBtn) toggleBtn.classList.add('open');
        activeVillageItemIndex = -1;
        return;
    }

    let html = '';
    const currentVal = villageInput.value.trim().toLowerCase();

    filtered.forEach((item, index) => {
        const isSelected = item.village.toLowerCase() === currentVal;
        const selectedClass = isSelected ? ' selected' : '';

        let subText = '';
        if (!currentPanchayat && item.panchayat) {
            subText = `<span class="village-item-sub">पं: ${escapeHtml(item.panchayat)}</span>`;
        } else if (!currentBlock && item.block) {
            subText = `<span class="village-item-sub">${escapeHtml(item.panchayat)}, ${escapeHtml(item.block)}</span>`;
        }

        html += `
            <div class="village-dropdown-item${selectedClass}" 
                 data-village="${escapeHtml(item.village)}" 
                 data-panchayat="${escapeHtml(item.panchayat)}" 
                 data-block="${escapeHtml(item.block)}"
                 data-index="${index}"
                 role="option"
                 aria-selected="${isSelected}">
                <span class="village-item-main">${escapeHtml(item.village)}</span>
                ${subText}
            </div>
        `;
    });

    menu.innerHTML = html;
    menu.style.display = 'block';
    if (toggleBtn) toggleBtn.classList.add('open');
    activeVillageItemIndex = -1;

    // Attach mousedown handlers so click doesn't blur input before selecting
    const items = menu.querySelectorAll('.village-dropdown-item');
    items.forEach(el => {
        el.addEventListener('mousedown', (e) => {
            e.preventDefault();
            selectVillageFromDropdown(el.dataset.village, el.dataset.panchayat, el.dataset.block);
        });
    });
}

function openVillageDropdown(query = '') {
    renderVillageDropdownMenu(query);
}

function closeVillageDropdown() {
    const menu = document.getElementById('villageDropdownMenu');
    const toggleBtn = document.getElementById('toggleVillageDropdownBtn');
    if (menu) menu.style.display = 'none';
    if (toggleBtn) toggleBtn.classList.remove('open');
    activeVillageItemIndex = -1;
}

function toggleVillageDropdown() {
    const menu = document.getElementById('villageDropdownMenu');
    const isOpen = menu && menu.style.display === 'block';
    if (isOpen) {
        closeVillageDropdown();
    } else {
        const villageInput = document.getElementById('village');
        if (villageInput) villageInput.focus();
        openVillageDropdown('');
    }
}

function selectVillageFromDropdown(village, panchayat, block) {
    const villageInput = document.getElementById('village');
    const blockSelect = document.getElementById('block');
    const panchayatSelect = document.getElementById('panchayat');

    if (!villageInput) return;

    villageInput.value = village;
    closeVillageDropdown();

    const clearBtn = document.getElementById('clearVillageBtn');
    if (clearBtn) clearBtn.style.display = 'flex';

    // Auto-fill block and panchayat if not already selected
    const currentBlock = blockSelect ? blockSelect.value : '';
    const currentPanchayat = panchayatSelect ? panchayatSelect.value : '';

    if (!currentBlock || !currentPanchayat) {
        applyLocationAutoFill({
            village: village,
            panchayat: panchayat,
            block: block
        });
    }

    villageInput.classList.add('autofill-highlight');
    setTimeout(() => villageInput.classList.remove('autofill-highlight'), 800);

    villageInput.dispatchEvent(new Event('input', { bubbles: true }));
    villageInput.dispatchEvent(new Event('change', { bubbles: true }));
}

function updateActiveVillageItem(items) {
    items.forEach((el, idx) => {
        if (idx === activeVillageItemIndex) {
            el.classList.add('active');
            el.scrollIntoView({ block: 'nearest' });
        } else {
            el.classList.remove('active');
        }
    });
}

/**
 * Populate the <datalist id="allVillagesDatalist">
 * Supports optional filtering by Block and/or Gram Panchayat
 */
function populateAllVillagesDatalist(filterBlock = null, filterPanchayat = null) {
    const datalist = document.getElementById('allVillagesDatalist');
    const villageInput = document.getElementById('village');
    const sorted = getAvailableVillages(filterBlock, filterPanchayat);

    if (datalist) {
        let html = '';
        if (filterPanchayat && filterPanchayat !== '__OTHER__') {
            const seenV = new Set();
            sorted.forEach(item => {
                if (!seenV.has(item.village)) {
                    seenV.add(item.village);
                    html += `<option value="${escapeHtml(item.village)}"></option>`;
                }
            });
            if (villageInput && (!villageInput.value || !filterPanchayat)) {
                villageInput.placeholder = 'गाँव का नाम लिखें या चुनें';
            }
        } else if (filterBlock && filterBlock !== '__OTHER__') {
            sorted.forEach(item => {
                html += `<option value="${escapeHtml(item.village)} (पंचायत: ${escapeHtml(item.panchayat)})">${escapeHtml(item.village)}</option>`;
            });
            if (villageInput && !villageInput.value) {
                villageInput.placeholder = 'गाँव का नाम लिखें या चुनें';
            }
        } else {
            sorted.forEach(item => {
                html += `<option value="${escapeHtml(item.displayLabel)}">${escapeHtml(item.village)}</option>`;
            });
            if (villageInput && !villageInput.value) {
                villageInput.placeholder = 'गाँव का नाम लिखें या चुनें';
            }
        }
        datalist.innerHTML = html;
    }

    // Also refresh custom dropdown if currently open
    const menu = document.getElementById('villageDropdownMenu');
    if (menu && menu.style.display === 'block') {
        renderVillageDropdownMenu(villageInput ? villageInput.value : '');
    }
}

/**
 * Find matching village(s) from user query
 */
function findVillageMatches(query, filterBlock = null) {
    const q = (query || '').trim().toLowerCase();
    if (!q) return [];

    let pool = allVillagesIndex;
    if (filterBlock && filterBlock !== '__OTHER__') {
        const filterCanon = BLOCK_ALIASES[filterBlock.trim()] || filterBlock.trim().toLowerCase();
        const blockPool = pool.filter(v => {
            const bCanon = BLOCK_ALIASES[v.block] || v.block.toLowerCase();
            return bCanon === filterCanon || v.block.toLowerCase() === filterBlock.toLowerCase();
        });
        if (blockPool.length > 0) {
            pool = blockPool;
        }
    }

    // 1. Exact match with displayLabel e.g. "गीदम (पंचायत: गीदम, ब्लॉक: गीदम)"
    const exactDisplay = pool.find(v => v.displayLabel.toLowerCase() === q);
    if (exactDisplay) return [exactDisplay];

    // 1b. If formatted like "ग्राम (पंचायत: ...)"
    if (q.includes('(')) {
        const vPart = q.split('(')[0].trim().toLowerCase();
        const parenPart = q.slice(q.indexOf('(')).toLowerCase();
        const matched = pool.find(v => {
            return v.village.toLowerCase() === vPart && (parenPart.includes(v.panchayat.toLowerCase()) || parenPart.includes(v.block.toLowerCase()));
        });
        if (matched) return [matched];
    }

    // 2. Exact match with village name e.g. "गीदम" or "दंतेवाड़ा"
    const exactVillage = pool.filter(v => v.village.toLowerCase() === q);
    if (exactVillage.length > 0) return exactVillage;

    // 2b. Check aliases for exact village name (e.g. कोवाकोंडा <-> कुआकोंडा, दंतेवाड़ा <-> दंतेवाडा, कटेकल्याण <-> कटे कल्याण)
    const qCanon = BLOCK_ALIASES[query.trim()] || BLOCK_ALIASES[q];
    if (qCanon) {
        const aliasVillage = pool.filter(v => {
            const vCanon = BLOCK_ALIASES[v.village] || BLOCK_ALIASES[v.village.toLowerCase()];
            return vCanon === qCanon || v.village.toLowerCase() === qCanon.toLowerCase();
        });
        if (aliasVillage.length > 0) return aliasVillage;
    }

    // 3. Prefix match e.g. "गीद"
    const prefixMatches = pool.filter(v => v.village.toLowerCase().startsWith(q));
    if (prefixMatches.length > 0) return prefixMatches;

    // 4. Contains match anywhere in searchKey
    return pool.filter(v => v.searchKey.includes(q));
}

/**
 * Handle Village input: auto-fills Block and Gram Panchayat if matching village is typed/chosen
 */
function handleVillageInput(query) {
    const clearBtn = document.getElementById('clearVillageBtn');
    const rawVal = (query || '').trim();

    if (clearBtn) {
        clearBtn.style.display = rawVal ? 'flex' : 'none';
    }

    if (!rawVal) {
        return;
    }

    const currentBlock = document.getElementById('block') ? document.getElementById('block').value : '';
    const currentPanchayat = document.getElementById('panchayat') ? document.getElementById('panchayat').value : '';

    // If both block and panchayat are already manually chosen and user is just typing simple village name, don't overwrite
    if (currentBlock && currentPanchayat && !rawVal.includes('(')) {
        return;
    }

    const matches = findVillageMatches(rawVal, currentBlock);

    if (matches.length === 0) {
        return;
    }

    // If exactly 1 match, or user selected an option with '(', or all matches belong to the same block & panchayat
    const allSameLocation = matches.length > 0 && matches.every(m => {
        const mCanon = BLOCK_ALIASES[m.block] || m.block;
        const firstCanon = BLOCK_ALIASES[matches[0].block] || matches[0].block;
        const mpCanon = BLOCK_ALIASES[m.panchayat] || m.panchayat;
        const firstPCanon = BLOCK_ALIASES[matches[0].panchayat] || matches[0].panchayat;
        return mCanon === firstCanon && mpCanon === firstPCanon;
    });

    if (matches.length === 1 || rawVal.includes('(') || allSameLocation) {
        const match = matches[0];
        applyLocationAutoFill(match);
    }
}

/**
 * Apply the auto-filled Block, Panchayat, and Village to the form controls
 */
function applyLocationAutoFill(match) {
    const blockSelect = document.getElementById('block');
    const panchayatSelect = document.getElementById('panchayat');
    const villageInput = document.getElementById('village');

    // 1. Select Block
    if (blockSelect) {
        let matchedOptionVal = null;
        const matchCanon = BLOCK_ALIASES[match.block] || match.block;
        for (const opt of blockSelect.options) {
            const optCanon = BLOCK_ALIASES[opt.value] || opt.value;
            if (opt.value === match.block || optCanon === matchCanon) {
                matchedOptionVal = opt.value;
                break;
            }
        }
        if (matchedOptionVal) {
            blockSelect.value = matchedOptionVal;
        } else {
            blockSelect.value = match.block;
        }

        blockSelect.classList.add('autofill-highlight');
        setTimeout(() => blockSelect.classList.remove('autofill-highlight'), 1200);

        // Populate Panchayats for this Block
        const found = findBlockInLocations(currentConfig.locations, blockSelect.value || match.block);
        if (found && found.data) {
            const panchayats = Object.keys(found.data);
            const selCanon = BLOCK_ALIASES[blockSelect.value] || blockSelect.value;
            const sortedPanchayats = [...panchayats].sort((a, b) => {
                const aCanon = BLOCK_ALIASES[a] || a;
                const bCanon = BLOCK_ALIASES[b] || b;
                if (aCanon === selCanon && bCanon !== selCanon) return -1;
                if (bCanon === selCanon && aCanon !== selCanon) return 1;
                return a.localeCompare(b, 'hi');
            });

            let html = '<option value="">-- ग्राम पंचायत चुनें / Select Gram Panchayat --</option>';
            sortedPanchayats.forEach(p => {
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
        let matchedPVal = null;
        const matchPCanon = BLOCK_ALIASES[match.panchayat] || match.panchayat;
        for (const opt of panchayatSelect.options) {
            const optPCanon = BLOCK_ALIASES[opt.value] || opt.value;
            if (opt.value === match.panchayat || optPCanon === matchPCanon) {
                matchedPVal = opt.value;
                break;
            }
        }
        if (matchedPVal) {
            panchayatSelect.value = matchedPVal;
        } else {
            panchayatSelect.value = match.panchayat;
        }
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
    closeVillageDropdown();
    const clearBtn = document.getElementById('clearVillageBtn');
    if (clearBtn) clearBtn.style.display = 'flex';
}

/**
 * Clear the Village input and reset status
 */
function clearVillage(shouldFocus = false) {
    const villageInput = document.getElementById('village');
    const clearBtn = document.getElementById('clearVillageBtn');
    if (villageInput) {
        villageInput.value = '';
        if (shouldFocus) {
            villageInput.focus();
            openVillageDropdown('');
        } else {
            closeVillageDropdown();
        }
    }
    if (clearBtn) clearBtn.style.display = 'none';
}

/**
 * Handle Block selection -> Populate Gram Panchayats dynamically (Original Cascading Flow Step 1)
 */
function handleBlockChange() {
    const blockSelect = document.getElementById('block');
    const panchayatSelect = document.getElementById('panchayat');
    const villageInput = document.getElementById('village');
    const panchayatCustom = document.getElementById('panchayatCustom');

    const selectedBlock = blockSelect ? blockSelect.value : '';

    if (panchayatCustom) panchayatCustom.style.display = 'none';

    const found = findBlockInLocations(currentConfig.locations, selectedBlock);

    if (!selectedBlock || !found || !found.data) {
        if (panchayatSelect) {
            panchayatSelect.innerHTML = '<option value="">-- पहले ब्लॉक चुनें / Select Block First --</option>';
            panchayatSelect.disabled = true;
            panchayatSelect.value = '';
        }
        // Reset datalist to district-wide
        populateAllVillagesDatalist(null, null);
        return;
    }

    // Populate Gram Panchayats of the selected Block
    const panchayats = Object.keys(found.data);

    // Sort so the block's namesake Panchayat is listed first!
    const selCanon = BLOCK_ALIASES[selectedBlock] || selectedBlock;
    const sortedPanchayats = [...panchayats].sort((a, b) => {
        const aCanon = BLOCK_ALIASES[a] || a;
        const bCanon = BLOCK_ALIASES[b] || b;
        if (aCanon === selCanon && bCanon !== selCanon) return -1;
        if (bCanon === selCanon && aCanon !== selCanon) return 1;
        return a.localeCompare(b, 'hi');
    });

    let html = '<option value="">-- ग्राम पंचायत चुनें / Select Gram Panchayat --</option>';
    sortedPanchayats.forEach(p => {
        html += `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`;
    });
    html += '<option value="__OTHER__">➕ अन्य / Other (मैन्युअल दर्ज करें)</option>';

    if (panchayatSelect) {
        panchayatSelect.innerHTML = html;
        panchayatSelect.disabled = false;
        panchayatSelect.value = '';
    }

    // Filter village datalist to this block (namesake village will appear right at top!)
    populateAllVillagesDatalist(selectedBlock, null);

    // If current village doesn't belong to this block, clear it
    if (villageInput && villageInput.value) {
        const vClean = villageInput.value.split('(')[0].trim();
        const belongs = allVillagesIndex.some(v => {
            const vCanon = BLOCK_ALIASES[v.block] || v.block.toLowerCase();
            return v.village.toLowerCase() === vClean.toLowerCase() && (vCanon === selCanon || v.block.toLowerCase() === selectedBlock.toLowerCase());
        });
        if (!belongs) {
            villageInput.value = '';
            const clearBtn = document.getElementById('clearVillageBtn');
            if (clearBtn) clearBtn.style.display = 'none';
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

    const found = findBlockInLocations(currentConfig.locations, selectedBlock);

    if (!selectedPanchayat || !found || !found.data) {
        populateAllVillagesDatalist(selectedBlock, null);
        return;
    }

    // Find panchayat in found.data (direct or alias)
    let gpVillages = found.data[selectedPanchayat];
    if (!gpVillages) {
        const pCanon = BLOCK_ALIASES[selectedPanchayat] || selectedPanchayat;
        for (const [gpKey, vList] of Object.entries(found.data)) {
            const gpCanon = BLOCK_ALIASES[gpKey] || gpKey;
            if (gpCanon === pCanon) {
                gpVillages = vList;
                break;
            }
        }
    }

    if (!gpVillages) {
        populateAllVillagesDatalist(selectedBlock, null);
        return;
    }

    // Populate datalist with only villages under this specific Panchayat!
    populateAllVillagesDatalist(selectedBlock, selectedPanchayat);

    // If current village doesn't belong to this panchayat, clear it
    if (villageInput && villageInput.value) {
        const vClean = villageInput.value.split('(')[0].trim().toLowerCase();
        const belongs = gpVillages.some(v => v.toLowerCase() === vClean);
        if (!belongs) {
            villageInput.value = '';
            const clearBtn = document.getElementById('clearVillageBtn');
            if (clearBtn) clearBtn.style.display = 'none';
        }
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
 * Live character counter for Enrollment Number (alphanumeric, max 28 characters)
 */
function updateEnrollmentCounter() {
    const enrollmentInput = document.getElementById('enrollment');
    const enrollmentCounter = document.getElementById('enrollmentCounter');
    const enrollmentHint = document.getElementById('enrollmentHint');

    if (!enrollmentInput) return;
    const count = (enrollmentInput.value || '').length;
    const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'hi';

    if (enrollmentCounter) {
        enrollmentCounter.classList.remove('count-zero', 'count-partial', 'count-complete');
        if (count === 0) {
            enrollmentCounter.textContent = lang === 'en' ? '0 / 28 chars' : '0 / 28 वर्ण';
            enrollmentCounter.classList.add('count-zero');
        } else if (count < 28) {
            enrollmentCounter.textContent = lang === 'en' ? `${count} / 28 chars (${28 - count} left)` : `${count} / 28 वर्ण (${28 - count} शेष)`;
            enrollmentCounter.classList.add('count-partial');
        } else {
            enrollmentCounter.textContent = lang === 'en' ? '✓ 28 / 28 Complete' : '✓ 28 / 28 वर्ण पूर्ण';
            enrollmentCounter.classList.add('count-complete');
        }
    }

    if (enrollmentHint) {
        enrollmentHint.classList.remove('hint-zero', 'hint-partial', 'hint-complete');
        if (count === 0) {
            enrollmentHint.innerHTML = lang === 'en'
                ? 'Enter 28-character Enrollment Number (letters & numbers, currently <strong>0</strong> entered)'
                : '28 वर्णों (अंक/अक्षर) का एनरोलमेंट नंबर दर्ज करें (अभी <strong>0</strong> दर्ज हैं)';
            enrollmentHint.classList.add('hint-zero');
        } else if (count < 28) {
            enrollmentHint.innerHTML = lang === 'en'
                ? `Entered characters: <strong>${count}</strong> / 28 (still need <strong>${28 - count}</strong> more)`
                : `दर्ज वर्ण: <strong>${count}</strong> / 28 (अभी <strong>${28 - count}</strong> वर्ण और भरने हैं)`;
            enrollmentHint.classList.add('hint-partial');
        } else {
            enrollmentHint.innerHTML = lang === 'en'
                ? '✓ <strong>28 characters complete</strong>'
                : '✓ <strong>28 वर्ण पूरे हो चुके हैं</strong>';
            enrollmentHint.classList.add('hint-complete');
        }
    }
}

/**
 * Live digit counter & hint for Aadhaar Number (supports 4 digits or 12 digits option)
 */
function updateAadharCounter() {
    const aadharInput = document.getElementById('aadhar');
    const aadharCounter = document.getElementById('aadharCounter');
    const aadharHint = document.getElementById('aadharHint');

    if (!aadharInput) return;
    const count = (aadharInput.value || '').length;
    const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'hi';
    const checkedRadio = document.querySelector('input[name="aadharMode"]:checked');
    const mode = checkedRadio ? checkedRadio.value : '12';

    if (aadharCounter) {
        aadharCounter.classList.remove('count-zero', 'count-partial', 'count-complete');
        if (mode === '4') {
            if (count === 0) {
                aadharCounter.textContent = lang === 'en' ? '0 / 4 digits' : '0 / 4 अंक';
                aadharCounter.classList.add('count-zero');
            } else if (count < 4) {
                aadharCounter.textContent = lang === 'en' ? `${count} / 4 digits (${4 - count} left)` : `${count} / 4 अंक (${4 - count} शेष)`;
                aadharCounter.classList.add('count-partial');
            } else {
                aadharCounter.textContent = lang === 'en' ? '✓ 4 / 4 Complete' : '✓ 4 / 4 अंक पूर्ण';
                aadharCounter.classList.add('count-complete');
            }
        } else {
            // 12 digits mode (or either 4 or 12 digits)
            if (count === 0) {
                aadharCounter.textContent = lang === 'en' ? '0 / 12 digits (or 4)' : '0 / 12 अंक (या 4)';
                aadharCounter.classList.add('count-zero');
            } else if (count < 4) {
                aadharCounter.textContent = lang === 'en' ? `${count} / 12 digits` : `${count} / 12 अंक`;
                aadharCounter.classList.add('count-partial');
            } else if (count === 4) {
                aadharCounter.textContent = lang === 'en' ? '✓ 4 digits valid (or 12)' : '✓ 4 अंक मान्य (या 12)';
                aadharCounter.classList.add('count-complete');
            } else if (count < 12) {
                aadharCounter.textContent = lang === 'en' ? `${count} / 12 digits (${12 - count} left)` : `${count} / 12 अंक (${12 - count} शेष)`;
                aadharCounter.classList.add('count-partial');
            } else {
                aadharCounter.textContent = lang === 'en' ? '✓ 12 / 12 Complete' : '✓ 12 / 12 अंक पूर्ण';
                aadharCounter.classList.add('count-complete');
            }
        }
    }

    if (aadharHint) {
        aadharHint.classList.remove('hint-zero', 'hint-partial', 'hint-complete');
        if (mode === '4') {
            if (count === 0) {
                aadharHint.innerHTML = lang === 'en'
                    ? 'Enter last 4 digits of Aadhaar (currently <strong>0</strong> entered)'
                    : 'आधार के अंतिम 4 अंक दर्ज करें (अभी <strong>0</strong> अंक भरे हैं)';
                aadharHint.classList.add('hint-zero');
            } else if (count < 4) {
                aadharHint.innerHTML = lang === 'en'
                    ? `Entered digits: <strong>${count}</strong> / 4 (still need <strong>${4 - count}</strong> more digits)`
                    : `दर्ज अंक: <strong>${count}</strong> / 4 (अभी <strong>${4 - count}</strong> अंक और भरने हैं)`;
                aadharHint.classList.add('hint-partial');
            } else {
                aadharHint.innerHTML = lang === 'en'
                    ? '✓ <strong>Last 4 digits complete</strong>'
                    : '✓ <strong>अंतिम 4 अंक पूरे हो चुके हैं</strong>';
                aadharHint.classList.add('hint-complete');
            }
        } else {
            if (count === 0) {
                aadharHint.innerHTML = lang === 'en'
                    ? 'Enter full 12-digit Aadhaar number or last 4 digits (currently <strong>0</strong> entered)'
                    : '12 अंकों का पूरा आधार नंबर या अंतिम 4 अंक दर्ज करें (अभी <strong>0</strong> अंक भरे हैं)';
                aadharHint.classList.add('hint-zero');
            } else if (count < 4) {
                aadharHint.innerHTML = lang === 'en'
                    ? `Entered digits: <strong>${count}</strong> (need <strong>${4 - count}</strong> for last-4, or up to 12)`
                    : `दर्ज अंक: <strong>${count}</strong> (अंतिम 4 अंकों हेतु <strong>${4 - count}</strong> और, या पूरे 12 अंक)`;
                aadharHint.classList.add('hint-partial');
            } else if (count === 4) {
                aadharHint.innerHTML = lang === 'en'
                    ? '✓ <strong>4 digits (Last 4 digits) valid</strong> (or you may enter up to 12 digits)'
                    : '✓ <strong>4 अंक (अंतिम 4 अंक) मान्य हैं</strong> (आप चाहें तो पूरे 12 अंक भी दर्ज कर सकते हैं)';
                aadharHint.classList.add('hint-complete');
            } else if (count < 12) {
                aadharHint.innerHTML = lang === 'en'
                    ? `Entered digits: <strong>${count}</strong> / 12 (still need <strong>${12 - count}</strong> more for full Aadhaar)`
                    : `दर्ज अंक: <strong>${count}</strong> / 12 (पूरे 12 अंकों हेतु <strong>${12 - count}</strong> अंक और भरने हैं)`;
                aadharHint.classList.add('hint-partial');
            } else {
                aadharHint.innerHTML = lang === 'en'
                    ? '✓ <strong>Full 12-digit Aadhaar complete</strong>'
                    : '✓ <strong>12 अंकों का पूरा आधार नंबर पूर्ण हो चुका है</strong>';
                aadharHint.classList.add('hint-complete');
            }
        }
    }
}

/**
 * Handle switching between 4-digit and 12-digit Aadhaar input mode
 */
function setAadharMode(mode) {
    const aadharInput = document.getElementById('aadhar');
    const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'hi';
    const radio = document.querySelector(`input[name="aadharMode"][value="${mode}"]`);
    if (radio && !radio.checked) {
        radio.checked = true;
    }

    if (aadharInput) {
        if (mode === '4') {
            aadharInput.maxLength = 4;
            aadharInput.pattern = "[0-9]{4}";
            aadharInput.placeholder = lang === 'en' ? 'Enter last 4 digits (e.g. 1234)' : 'अंतिम 4 अंक दर्ज करें (उदा. 1234)';
            if (aadharInput.value.length > 4) {
                aadharInput.value = aadharInput.value.slice(-4);
            }
        } else {
            aadharInput.maxLength = 12;
            aadharInput.pattern = "([0-9]{4}|[0-9]{12})";
            aadharInput.placeholder = lang === 'en' ? '12-digit Aadhaar number or last 4 digits' : '12 अंकों का आधार नंबर या अंतिम 4 अंक';
        }
        updateAadharCounter();
    }
}

let isResettingForm = false;

/**
 * Fully reset and refresh the Grievance Form back to initial pristine state
 */
function resetGrievanceForm(isFromNativeReset = false) {
    if (isResettingForm) return;
    isResettingForm = true;

    try {
        const form = document.getElementById('grievanceForm');
        // Only call native form.reset() if NOT already inside the native reset event
        if (form && !isFromNativeReset) {
            form.reset();
        }
        clearVillage(false);
        handleBlockChange();
        setDefaultDate();
        updateEnrollmentCounter();

        // Reset Aadhaar mode to 12 digits default
        const aadharMode12Radio = document.querySelector('input[name="aadharMode"][value="12"]');
        if (aadharMode12Radio) {
            aadharMode12Radio.checked = true;
        }
        const aadharInput = document.getElementById('aadhar');
        if (aadharInput) {
            aadharInput.maxLength = 12;
            aadharInput.pattern = "([0-9]{4}|[0-9]{12})";
        }
        updateAadharCounter();

        // Reset status radio to first status option
        const firstStatusRadio = document.querySelector('input[name="status"]');
        if (firstStatusRadio) {
            firstStatusRadio.checked = true;
        }
    } finally {
        isResettingForm = false;
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
            if (isResettingForm) return;
            setTimeout(() => {
                resetGrievanceForm(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                const applicantName = document.getElementById('applicantName');
                if (applicantName) {
                    applicantName.focus({ preventScroll: true });
                }
            }, 10);
        });
    }

    // Village Input & Interactive Dropdown Listeners
    const villageInput = document.getElementById('village');
    const toggleVillageBtn = document.getElementById('toggleVillageDropdownBtn');

    if (villageInput) {
        villageInput.addEventListener('input', (e) => {
            handleVillageInput(e.target.value);
            openVillageDropdown(e.target.value);
        });

        villageInput.addEventListener('change', (e) => {
            handleVillageInput(e.target.value);
        });

        villageInput.addEventListener('focus', () => {
            openVillageDropdown(villageInput.value);
        });

        villageInput.addEventListener('click', () => {
            openVillageDropdown(villageInput.value);
        });

        villageInput.addEventListener('cut', () => {
            setTimeout(() => {
                handleVillageInput(villageInput.value);
                openVillageDropdown('');
            }, 10);
        });

        villageInput.addEventListener('keydown', (e) => {
            const menu = document.getElementById('villageDropdownMenu');
            const isMenuOpen = menu && menu.style.display === 'block';

            if (!isMenuOpen) {
                if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    openVillageDropdown('');
                    return;
                }
            }

            if (!menu || menu.style.display !== 'block') return;
            const items = menu.querySelectorAll('.village-dropdown-item');
            if (items.length === 0) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                activeVillageItemIndex = (activeVillageItemIndex + 1) % items.length;
                updateActiveVillageItem(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                activeVillageItemIndex = (activeVillageItemIndex - 1 + items.length) % items.length;
                updateActiveVillageItem(items);
            } else if (e.key === 'Enter') {
                if (activeVillageItemIndex >= 0 && activeVillageItemIndex < items.length) {
                    e.preventDefault();
                    const el = items[activeVillageItemIndex];
                    selectVillageFromDropdown(el.dataset.village, el.dataset.panchayat, el.dataset.block);
                }
            } else if (e.key === 'Escape') {
                closeVillageDropdown();
            }
        });
    }

    if (toggleVillageBtn) {
        toggleVillageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleVillageDropdown();
        });
    }

    // Close village dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const wrap = document.querySelector('.village-input-wrap');
        if (wrap && !wrap.contains(e.target)) {
            closeVillageDropdown();
        }
    });

    const clearVillageBtn = document.getElementById('clearVillageBtn');
    if (clearVillageBtn) {
        clearVillageBtn.addEventListener('click', () => clearVillage(true));
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

    // 2. Aadhaar number: numbers only, max 4 or 12 digits depending on selected mode
    const aadharInput = document.getElementById('aadhar');
    if (aadharInput) {
        aadharInput.addEventListener('input', (e) => {
            const checkedRadio = document.querySelector('input[name="aadharMode"]:checked');
            const maxLen = checkedRadio && checkedRadio.value === '4' ? 4 : 12;
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, maxLen);
            updateAadharCounter();
        });
        aadharInput.addEventListener('paste', () => {
            setTimeout(() => {
                if (aadharInput) {
                    const checkedRadio = document.querySelector('input[name="aadharMode"]:checked');
                    const maxLen = checkedRadio && checkedRadio.value === '4' ? 4 : 12;
                    aadharInput.value = aadharInput.value.replace(/\D/g, '').slice(0, maxLen);
                    updateAadharCounter();
                }
            }, 10);
        });
    }

    // Aadhaar mode selector radio buttons
    const aadharModeRadios = document.querySelectorAll('input[name="aadharMode"]');
    aadharModeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            setAadharMode(e.target.value);
        });
    });
    updateAadharCounter();

    // 3. Enrollment number: alphanumeric (letters + numbers), max 28 characters
    const enrollmentInput = document.getElementById('enrollment');
    if (enrollmentInput) {
        enrollmentInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 28);
            updateEnrollmentCounter();
        });
        enrollmentInput.addEventListener('paste', () => {
            setTimeout(() => {
                if (enrollmentInput) {
                    enrollmentInput.value = enrollmentInput.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 28);
                    updateEnrollmentCounter();
                }
            }, 10);
        });
    }
    updateEnrollmentCounter();

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

    // Prevent duplicate submissions / rapid multiple clicks
    if (isSubmittingGrievance) {
        return;
    }

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

    // 2. Aadhaar Validation: If provided, must be either 4 digits (last 4) or 12 digits
    if (aadharVal) {
        const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'hi';
        const checkedMode = document.querySelector('input[name="aadharMode"]:checked')?.value || '12';
        if (checkedMode === '4' && aadharVal.length !== 4) {
            alert(lang === 'en'
                ? `⚠️ Last 4 digits of Aadhaar must be exactly 4 digits.\nCurrent length: ${aadharVal.length}`
                : `⚠️ आधार के अंतिम 4 अंक ठीक 4 अंकों के होने चाहिए।\nवर्तमान में ${aadharVal.length} अंक दर्ज हैं।`);
            document.getElementById('aadhar').focus();
            return;
        }
        if (aadharVal.length !== 4 && aadharVal.length !== 12) {
            alert(lang === 'en'
                ? `⚠️ Aadhaar number must be either 4 digits (last 4 digits) or 12 digits.\nCurrent length: ${aadharVal.length}`
                : `⚠️ आधार नंबर या तो 4 अंक (अंतिम 4 अंक) या पूरे 12 अंकों का होना चाहिए।\nवर्तमान में ${aadharVal.length} अंक दर्ज हैं।`);
            document.getElementById('aadhar').focus();
            return;
        }
    }

    // 3. Enrollment Validation: If provided, must be exactly 28 characters
    if (enrollmentVal && enrollmentVal.length !== 28) {
        const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'hi';
        alert(lang === 'en'
            ? `⚠️ Enrollment number must be exactly 28 characters (letters/digits).\nCurrent length: ${enrollmentVal.length}`
            : `⚠️ एनरोलमेंट नंबर ठीक 28 वर्णों (अंक/अक्षर) का होना चाहिए।\nEnrollment number must be exactly 28 characters.`);
        document.getElementById('enrollment').focus();
        return;
    }

    // 4. Email Validation: If provided, must be valid email format
    if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        alert('⚠️ कृपया एक मान्य ईमेल पता दर्ज करें (उदा. example@gmail.com)\nPlease enter a valid email address.');
        document.getElementById('email').focus();
        return;
    }
    
    // Lock submission flag & disable submit button immediately
    isSubmittingGrievance = true;
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.pointerEvents = 'none';
        submitBtn.innerHTML = '⏳ जमा हो रहा है... कृपया प्रतीक्षा करें | Submitting...';
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

        // Completely reset and refresh the form
        resetGrievanceForm();

        // Scroll page smoothly to top so user sees the fresh new form from top
        window.scrollTo({ top: 0, behavior: 'smooth' });

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
            submitBtn.style.pointerEvents = '';
            submitBtn.innerHTML = originalBtnText;
        }
        // Cooldown timer to prevent rapid duplicate clicks
        setTimeout(() => {
            isSubmittingGrievance = false;
        }, 1200);
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
        const lang = getCurrentLanguage();
        const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;
        if (synced) {
            statusEl.className = 'modal-status-badge synced';
            statusEl.textContent = t.modalSynced;
        } else {
            statusEl.className = 'modal-status-badge local';
            statusEl.textContent = t.modalOffline;
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
    // Scroll smoothly to the very top of the page and focus the first input
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const applicantName = document.getElementById('applicantName');
    if (applicantName) {
        setTimeout(() => applicantName.focus({ preventScroll: true }), 150);
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

    const lang = getCurrentLanguage();
    const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;
    let html = `
        <div class="stat-card stat-card-total">
            <div class="stat-card-header">
                <span class="stat-label">${t.kpiTotal}</span>
                <span class="stat-icon-badge total-badge">📊</span>
            </div>
            <div class="stat-number">${total}</div>
            <div class="stat-meta">${t.kpiTotalMeta}</div>
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
                <div class="stat-meta">${t.kpiStatusMeta}${escapeHtml(status.id)}</div>
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
        const lang = getCurrentLanguage();
        const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;
        container.innerHTML = `<div class="chart-empty-state">${t.chartEmptyState}</div>`;
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

    const lang = getCurrentLanguage();
    const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;

    if (countBadge) {
        countBadge.textContent = `${t.showingPrefix} ${filtered.length} ${t.showingSuffix}`;
    }

    if (filtered.length === 0) {
        if (grievances.length === 0) {
            container.innerHTML = `
                <div class="empty-message">
                    ${t.tableEmpty}
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="empty-message">
                    ${t.tableEmptySearch}
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
                        <th>${t.thApplicant}</th>
                        <th>${t.thLocation}</th>
                        <th>${t.thReason}</th>
                        <th>${t.thDate}</th>
                        <th>${t.thStatus}</th>
                        <th>${t.thDescription}</th>
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
        const lang = getCurrentLanguage();
        return isNaN(date.getTime()) ? dateStr : date.toLocaleDateString(lang === 'en' ? 'en-IN' : 'hi-IN');
    } catch (e) {
        return dateStr;
    }
}

// Bind to window for HTML inline onclick handlers
window.switchTab = switchTab;
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;
window.__toggleLanguage = toggleLanguage;

// Hook called by i18n.js when language changes
window.__onLanguageChanged = function(lang) {
    updateThemeToggleButton(getCurrentTheme());
    renderFormOptions(currentConfig);
    updateDashboard();
    displayGrievances();
    updateEnrollmentCounter();
    updateAadharCounter();
    const checkedMode = document.querySelector('input[name="aadharMode"]:checked')?.value || '12';
    const aadharInput = document.getElementById('aadhar');
    if (aadharInput) {
        if (checkedMode === '4') {
            aadharInput.placeholder = lang === 'en' ? 'Enter last 4 digits (e.g. 1234)' : 'अंतिम 4 अंक दर्ज करें (उदा. 1234)';
        } else {
            aadharInput.placeholder = lang === 'en' ? '12-digit Aadhaar number or last 4 digits' : '12 अंकों का आधार नंबर या अंतिम 4 अंक';
        }
    }
};

// Start app on DOM ready
window.addEventListener('DOMContentLoaded', init);
