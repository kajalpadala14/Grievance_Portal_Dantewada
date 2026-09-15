import { getInitialData, submitGrievance, APPS_SCRIPT_URL, fetchLocationsFromSheet } from './api.js';
import { DEFAULT_CONFIG } from '../config/defaultConfig.js';

// Application State
let currentConfig = DEFAULT_CONFIG;
let grievances = [];

/**
 * Initialize application
 */
async function init() {
    setDefaultDate();
    setupEventListeners();

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
            html += `
                <label>
                    <input type="radio" name="status" value="${escapeHtml(s.id)}" ${checked} required>
                    ${escapeHtml(s.label || s.id)}
                </label>
            `;
        });
        statusContainer.innerHTML = html;
    }
}

/**
 * Handle Block selection -> Populate Gram Panchayats dynamically
 */
function handleBlockChange() {
    const blockSelect = document.getElementById('block');
    const panchayatSelect = document.getElementById('panchayat');
    const villageSelect = document.getElementById('village');
    const panchayatCustom = document.getElementById('panchayatCustom');
    const villageCustom = document.getElementById('villageCustom');

    const selectedBlock = blockSelect ? blockSelect.value : '';

    if (panchayatCustom) panchayatCustom.style.display = 'none';
    if (villageCustom) villageCustom.style.display = 'none';

    if (!selectedBlock || !currentConfig.locations || !currentConfig.locations[selectedBlock]) {
        if (panchayatSelect) {
            panchayatSelect.innerHTML = '<option value="">-- पहले ब्लॉक चुनें / Select Block First --</option>';
            panchayatSelect.disabled = true;
            panchayatSelect.value = '';
        }
        if (villageSelect) {
            villageSelect.innerHTML = '<option value="">-- पहले ग्राम पंचायत चुनें / Select Panchayat First --</option>';
            villageSelect.disabled = true;
            villageSelect.value = '';
        }
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

    // Reset Village dropdown until Panchayat is chosen
    if (villageSelect) {
        villageSelect.innerHTML = '<option value="">-- पहले ग्राम पंचायत चुनें / Select Panchayat First --</option>';
        villageSelect.disabled = true;
        villageSelect.value = '';
    }
}

/**
 * Handle Gram Panchayat selection -> Populate Villages dynamically
 */
function handlePanchayatChange() {
    const blockSelect = document.getElementById('block');
    const panchayatSelect = document.getElementById('panchayat');
    const villageSelect = document.getElementById('village');
    const panchayatCustom = document.getElementById('panchayatCustom');
    const villageCustom = document.getElementById('villageCustom');

    const selectedBlock = blockSelect ? blockSelect.value : '';
    const selectedPanchayat = panchayatSelect ? panchayatSelect.value : '';

    if (selectedPanchayat === '__OTHER__') {
        if (panchayatCustom) {
            panchayatCustom.style.display = 'block';
            panchayatCustom.required = true;
            panchayatCustom.focus();
        }
        if (villageSelect) {
            villageSelect.innerHTML = '<option value="__OTHER__">➕ अन्य / Other (मैन्युअल दर्ज करें)</option>';
            villageSelect.disabled = false;
            villageSelect.value = '__OTHER__';
        }
        if (villageCustom) {
            villageCustom.style.display = 'block';
            villageCustom.required = true;
        }
        return;
    }

    if (panchayatCustom) {
        panchayatCustom.style.display = 'none';
        panchayatCustom.required = false;
        panchayatCustom.value = '';
    }
    if (villageCustom) {
        villageCustom.style.display = 'none';
        villageCustom.required = false;
        villageCustom.value = '';
    }

    if (!selectedPanchayat || !currentConfig.locations || !currentConfig.locations[selectedBlock] || !currentConfig.locations[selectedBlock][selectedPanchayat]) {
        if (villageSelect) {
            villageSelect.innerHTML = '<option value="">-- पहले ग्राम पंचायत चुनें / Select Panchayat First --</option>';
            villageSelect.disabled = true;
            villageSelect.value = '';
        }
        return;
    }

    // Populate Villages under selected Gram Panchayat
    const villages = currentConfig.locations[selectedBlock][selectedPanchayat] || [];
    let html = '<option value="">-- ग्राम चुनें / Select Village --</option>';
    villages.forEach(v => {
        html += `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`;
    });
    html += '<option value="__OTHER__">➕ अन्य / Other (मैन्युअल दर्ज करें)</option>';

    if (villageSelect) {
        villageSelect.innerHTML = html;
        villageSelect.disabled = false;
        villageSelect.value = '';
    }
}

/**
 * Handle Village selection
 */
function handleVillageChange() {
    const villageSelect = document.getElementById('village');
    const villageCustom = document.getElementById('villageCustom');

    if (villageSelect && villageSelect.value === '__OTHER__') {
        if (villageCustom) {
            villageCustom.style.display = 'block';
            villageCustom.required = true;
            villageCustom.focus();
        }
    } else {
        if (villageCustom) {
            villageCustom.style.display = 'none';
            villageCustom.required = false;
            villageCustom.value = '';
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
 * Setup DOM event listeners
 */
function setupEventListeners() {
    const form = document.getElementById('grievanceForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        form.addEventListener('reset', () => {
            setTimeout(() => {
                handleBlockChange();
                setDefaultDate();
            }, 20);
        });
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

    const villageSelect = document.getElementById('village');
    if (villageSelect) {
        villageSelect.addEventListener('change', handleVillageChange);
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

    // 5. Explicit tab click event listeners (ensures tabs switch reliably on every device)
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

    const villageSelect = document.getElementById('village');
    const villageCustom = document.getElementById('villageCustom');
    const villageVal = (villageSelect && villageSelect.value === '__OTHER__')
        ? (villageCustom ? villageCustom.value.trim() : '')
        : (villageSelect ? villageSelect.value.trim() : '');

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
        if (villageSelect && villageSelect.value === '__OTHER__' && villageCustom) {
            villageCustom.focus();
        } else if (villageSelect) {
            villageSelect.focus();
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
        <div class="stat-card total" style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);">
            <div class="stat-label">कुल शिकायतें | Total</div>
            <div class="stat-number">${total}</div>
        </div>
    `;

    statuses.forEach(status => {
        const count = data.filter(g => String(g.status).trim() === String(status.id).trim()).length;
        const color = status.color || '#3498db';
        html += `
            <div class="stat-card" style="background: linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -25)} 100%);">
                <div class="stat-label">${escapeHtml(status.label || status.id)}</div>
                <div class="stat-number">${count}</div>
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
            color: status.color || '#3498db'
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
        color: '#667eea'
    }));

    const maxValue = data.length > 0 ? Math.max(...data.map(d => d.value)) : 1;
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
        color: '#764ba2'
    }));

    const maxValue = data.length > 0 ? Math.max(...data.map(d => d.value)) : 1;
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
        container.innerHTML = '<div style="text-align: center; padding: 40px; color: #7f8c8d;">कोई डेटा उपलब्ध नहीं | No data available</div>';
        return;
    }

    data.forEach(item => {
        const height = (item.value / maxValue) * 100;
        const bar = document.createElement('div');
        bar.className = 'bar-wrapper';
        bar.innerHTML = `
            <div class="bar-value">${item.value}</div>
            <div class="bar" style="height: ${height}%; background: linear-gradient(180deg, ${item.color} 0%, ${adjustColor(item.color, -20)} 100%);"></div>
            <div class="bar-label">${item.label}</div>
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
 * Display All Grievances in Tab 3 with dynamic status colors
 */
function displayGrievances() {
    const container = document.getElementById('grievancesContainer');
    if (!container) return;
    
    if (grievances.length === 0) {
        container.innerHTML = `
            <div class="empty-message">
                🔍 कोई शिकायत नहीं मिली | No grievances found<br>
                नई शिकायतें यहाँ दिखाई देंगी | New grievances will appear here
            </div>
        `;
        return;
    }

    let html = `
        <div class="table-wrapper">
            <table class="grievance-table">
                <thead>
                    <tr>
                        <th>आवेदक | Applicant</th>
                        <th>ब्लॉक/ग्राम | Block/Village</th>
                        <th>कारण | Reason</th>
                        <th>तारीख | Date</th>
                        <th>स्थिति | Status</th>
                        <th>विवरण | Description</th>
                    </tr>
                </thead>
                <tbody>
    `;

    grievances.forEach(g => {
        const desc = (g.description || '').substring(0, 50) + ((g.description && g.description.length > 50) ? '...' : '');
        const statusConfig = (currentConfig.statuses || []).find(s => String(s.id).trim() === String(g.status).trim());
        const statusColor = statusConfig ? statusConfig.color : '#3498db';
        const locationText = [g.block, g.village].filter(Boolean).join(' - ');

        html += `
            <tr>
                <td data-label="आवेदक | Applicant"><strong>${escapeHtml(g.applicantName || '')}</strong></td>
                <td data-label="स्थान | Location">${escapeHtml(locationText || '-')}</td>
                <td data-label="कारण | Reason">${escapeHtml(g.reason || '-')}</td>
                <td data-label="तारीख | Date">${formatDate(g.date) || '-'}</td>
                <td data-label="स्थिति | Status"><span class="status-badge" style="background-color: ${statusColor}20; color: ${statusColor}; border: 1px solid ${statusColor}50;">${escapeHtml(g.status || 'नई')}</span></td>
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

// Start app on DOM ready
window.addEventListener('DOMContentLoaded', init);
