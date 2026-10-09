/**
 * =========================================================================
 * i18n.js - Hindi / English Language Toggle & Translation Manager
 * Grievance Portal Dantewada
 * =========================================================================
 */

export const LANG_STORAGE_KEY = 'dantewada_portal_lang';

export const TRANSLATIONS = {
  hi: {
    langBtn: "English",
    govTag: "जिला प्रशासन दक्षिण बस्तर दंतेवाडा",
    portalTitle: "🔴 Aadhaar शिकायत पोर्टल",
    portalSubtitle: "दक्षिण बस्तर जिला, दंतेवाडा | समाधान एवं निगरानी प्रणाली",
    themeDark: "डार्क मोड",
    themeLight: "लाइट मोड",
    liveStatus: "ऑनलाइन पोर्टल",

    // Tabs
    tabDashboardTitle: "डैशबोर्ड",
    tabDashboardSub: "Dashboard",
    tabRegisterTitle: "शिकायत दर्ज करें",
    tabRegisterSub: "File Grievance",
    tabAllTitle: "सभी शिकायतें",
    tabAllSub: "All Grievances",

    // Dashboard
    kpiTotal: "कुल पंजीकृत शिकायतें",
    kpiTotalMeta: "सभी पंजीकृत आवेदन",
    kpiStatusMeta: "स्थिति: ",
    btnFileNew: "📝 नई शिकायत दर्ज करें",
    btnViewAllGrievances: "📋 सभी शिकायतें देखें",
    chartStatusTitle: "📈 शिकायत स्थिति वितरण",
    chartBlockTitle: "📍 ब्लॉक अनुसार शिकायतें",
    chartReasonTitle: "🏷️ कारण अनुसार शिकायतें",
    chartEmptyState: "📊 विश्लेषण के लिए अभी कोई शिकायत डेटा उपलब्ध नहीं है।",

    // Notice
    noticeHeading: "महत्वपूर्ण सूचना:",
    noticeBody: "कृपया सभी आवश्यक (*) क्षेत्र भरें। आपकी शिकायत 48 घंटे में प्रक्रिया की जाएगी।",

    // Form Sections
    secPersonal: "👤 व्यक्तिगत जानकारी",
    secAddress: "📍 पता जानकारी",
    secIdentity: "🆔 पहचान जानकारी",
    secGrievance: "📋 शिकायत विवरण",
    secStatus: "✓ वर्तमान स्थिति",
    secRemarks: "💬 टिप्पणियां",

    // Form Labels
    lblApplicantName: "हितग्राही / आवेदक का नाम",
    lblApplicantNameReq: "हितग्राही / आवेदक का नाम",
    lblFatherName: "पिता/पति का नाम",
    lblAge: "आयु",
    lblPhone: "दूरभाष (10 अंक)",
    lblBlock: "ब्लॉक",
    lblPanchayat: "ग्राम पंचायत",
    lblVillage: "ग्राम",
    lblEmail: "ईमेल",
    lblAadhar: "आधार नंबर (4 या 12 अंक)",
    aadharMode12: "12 अंक (पूरा आधार)",
    aadharMode4: "4 अंक (अंतिम 4 अंक)",
    lblEnrollment: "एनरोलमेंट नंबर (28 अंक/अक्षर)",
    lblReason: "ऑफिस आने का कारण",
    lblStatusSelect: "स्थिति चुनें",
    lblDescription: "शिकायत का विस्तृत विवरण",
    lblRemarks: "अतिरिक्त टिप्पणियां",
    lblDate: "आवेदन की तारीख",
    villageAutofillSuccess: "✓ स्वतः चयनित: ब्लॉक - {block} | ग्राम पंचायत - {panchayat}",

    // Placeholders
    phApplicantName: "पूरा नाम दर्ज करें",
    phFatherName: "नाम दर्ज करें",
    phAge: "आयु दर्ज करें",
    phPhone: "10 अंकों का मोबाइल नंबर",
    phVillage: "गाँव का नाम लिखें या चुनें",
    phPanchayatCustom: "ग्राम पंचायत का नाम लिखें",
    phEmail: "example@email.com",
    phAadhar: "12 अंकों का आधार नंबर या अंतिम 4 अंक",
    phAadhar12: "12 अंकों का आधार नंबर (पूरा आधार)",
    phAadhar4: "अंतिम 4 अंक दर्ज करें (उदा. 1234)",
    phEnrollment: "28 अंकों/अक्षरों का एनरोलमेंट नंबर",
    phDescription: "अपनी शिकायत का विस्तृत विवरण यहाँ दर्ज करें...",
    phRemarks: "कोई अतिरिक्त जानकारी यहाँ जोड़ें...",
    phSearch: "नाम, फोन, आधार, कारण या ब्लॉक से खोजें...",
    phOtherDistrict: "जिले का नाम लिखें (उदा. सुकमा, बस्तर, बीजापुर आदि)",
    phOtherPanchayat: "ग्राम पंचायत का नाम लिखें",
    phOtherVillage: "गाँव / ग्राम का नाम लिखें",

    // Other District Labels
    lblOtherDistrict: "जिला का नाम",
    lblOtherPanchayat: "ग्राम पंचायत का नाम",
    lblOtherVillage: "ग्राम / गाँव का नाम",
    lblOtherDistrictBadge: "अन्य जिला प्रकरण (प्रकरण संबंधित जिले को अग्रेषित किया जाएगा)",

    // Select Options
    optSelectBlock: "-- चयन करें / Select Block --",
    optSelectPanchayatFirst: "-- पहले ब्लॉक चुनें --",
    optSelectPanchayat: "-- ग्राम पंचायत चुनें --",
    optSelectVillageFirst: "-- पहले ग्राम पंचायत चुनें --",
    optSelectVillage: "-- ग्राम चुनें --",
    optSelectReason: "-- कारण चुनें / Select Reason --",
    optOther: "➕ अन्य जिला (मैन्युअल दर्ज करें)",
    optOtherDistrict: "➕ अन्य जिला (मैन्युअल दर्ज करें)",
    optAllStatuses: "सभी स्थितियां",
    optAllDates: "📅 सभी तिथियां",
    optDateToday: "📅 आज",
    optDateYesterday: "📅 कल",
    optDateLast7: "📅 पिछले 7 दिन",
    optDateLast30: "📅 पिछले 30 दिन",
    optDateThisMonth: "📅 इस महीने",
    optDateCustom: "📅 कस्टम तारीख...",
    lblFromDate: "तारीख से:",
    lblToDate: "तारीख तक:",
    btnClearDate: "रीसेट",
    btnClearDateTitle: "तारीख फ़िल्टर साफ़ करें",
    btnExportCsv: "Excel / CSV डाउनलोड",
    btnExportTitle: "फ़िल्टर किया हुआ डाटा CSV में डाउनलोड करें",
    noDataToExport: "डाउनलोड के लिए कोई डाटा उपलब्ध नहीं है",

    // Buttons
    btnSubmit: "✓ शिकायत दर्ज करें | SUBMIT",
    btnSubmitting: "⏳ शिकायत दर्ज हो रही है... | Submitting...",
    btnReset: "↻ फॉर्म साफ करें | RESET",

    // All Grievances Section
    allGrievancesTitle: "📋 सभी पंजीकृत शिकायतें",
    allGrievancesInfo: "यह सूची सभी जमा की गई शिकायतों को दिखाती है",
    thApplicant: "आवेदक",
    thLocation: "ब्लॉक/स्थान",
    thReason: "कारण",
    thDate: "तारीख",
    thStatus: "स्थिति",
    thDescription: "विवरण",
    showingPrefix: "कुल",
    showingSuffix: "शिकायतें",
    tableEmpty: "🔍 कोई शिकायत नहीं मिली | नई शिकायतें यहाँ दिखाई देंगी",
    tableEmptySearch: "🔍 खोजे गए विवरण से कोई शिकायत मेल नहीं खाती | कृपया अन्य नाम, फ़ोन या कारण से खोजें",

    // Modal
    modalSuccessTitle: "शिकायत दर्ज हो गई है!",
    modalSuccessSub: "आपकी शिकायत सफलता पूर्वक पंजीकृत कर ली गई है।",
    modalLblId: "शिकायत क्रमांक (ID):",
    modalLblName: "आवेदक का नाम:",
    modalLblStatus: "सिंक स्थिति:",
    modalSynced: "✓ Google Sheet में दर्ज",
    modalOffline: "⚠️ केवल स्थानीय सुरक्षित (Offline)",
    modalBtnClose: "✓ ठीक है",
    modalBtnViewAll: "📋 सभी शिकायतें देखें",

    // Status Edit Modal & Toast
    modalStatusTitle: "शिकायत स्थिति अपडेट करें",
    modalStatusSub: "शिकायत की वर्तमान स्थिति और टिप्पणी बदलें",
    lblNewStatus: "नई स्थिति चुनें / Select Status *",
    lblStatusRemarks: "टिप्पणी / Remarks (वैकल्पिक)",
    phStatusRemarks: "स्थिति परिवर्तन से संबंधित टिप्पणी दर्ज करें...",
    btnSaveStatus: "✓ स्थिति सुरक्षित करें",
    btnSavingStatus: "⏳ स्थिति अपडेट हो रही है...",
    btnCancel: "रद्द करें",
    statusUpdatedSuccess: "✓ स्थिति सफलतापूर्वक अपडेट कर दी गई!",
    statusUpdateFailed: "⚠️ स्थिति अपडेट करने में त्रुटि हुई",
    actionEditStatus: "स्थिति बदलें",

    // Footer
    portalCopyright: "© 2026 दक्षिण बस्तर दंतेवाडा जिला | सर्वाधिकार सुरक्षित",
    portalHours: "शिकायत पंजीकरण समय: 10:00 AM - 5:00 PM (सोमवार - शुक्रवार)"
  },
  en: {
    langBtn: "हिन्दी",
    govTag: "District Administration South Bastar Dantewada",
    portalTitle: "🔴 Aadhaar Grievance Portal",
    portalSubtitle: "South Bastar District, Dantewada | Redressal & Monitoring System",
    themeDark: "Dark Mode",
    themeLight: "Light Mode",
    liveStatus: "Live Portal",

    // Tabs
    tabDashboardTitle: "Dashboard",
    tabDashboardSub: "डैशबोर्ड",
    tabRegisterTitle: "File Grievance",
    tabRegisterSub: "शिकायत दर्ज करें",
    tabAllTitle: "All Grievances",
    tabAllSub: "सभी शिकायतें",

    // Dashboard
    kpiTotal: "Total Grievances",
    kpiTotalMeta: "All Registered Applications",
    kpiStatusMeta: "Status: ",
    btnFileNew: "📝 File New Grievance",
    btnViewAllGrievances: "📋 View All Grievances",
    chartStatusTitle: "📈 Grievance Status Distribution",
    chartBlockTitle: "📍 Grievances by Block",
    chartReasonTitle: "🏷️ Grievances by Reason",
    chartEmptyState: "📊 No grievance data available yet for analysis.",

    // Notice
    noticeHeading: "Important Notice:",
    noticeBody: "Please fill all required (*) fields. Your grievance will be processed within 48 hours.",

    // Form Sections
    secPersonal: "👤 Personal Information",
    secAddress: "📍 Address Information",
    secIdentity: "🆔 Identity Information",
    secGrievance: "📋 Grievance Details",
    secStatus: "✓ Current Status",
    secRemarks: "💬 Remarks",

    // Form Labels
    lblApplicantName: "Applicant Name",
    lblApplicantNameReq: "Applicant Name",
    lblFatherName: "Father/Husband Name",
    lblAge: "Age",
    lblPhone: "Phone Number (10 digits)",
    lblBlock: "Block",
    lblPanchayat: "Village Panchayat",
    lblVillage: "Village",
    lblEmail: "Email",
    lblAadhar: "Aadhaar Number (4 or 12 digits)",
    aadharMode12: "12 Digits (Full)",
    aadharMode4: "4 Digits (Last 4)",
    lblEnrollment: "Enrollment Number (28 chars)",
    lblReason: "Reason for Visit / Grievance",
    lblStatusSelect: "Select Status",
    lblDescription: "Detailed Description",
    lblRemarks: "Additional Remarks",
    lblDate: "Date of Application",
    villageAutofillSuccess: "✓ Auto-selected: Block - {block} | Gram Panchayat - {panchayat}",

    // Placeholders
    phApplicantName: "Enter full applicant name",
    phFatherName: "Enter name",
    phAge: "Enter age",
    phPhone: "10-digit mobile number",
    phVillage: "Enter or select village name",
    phPanchayatCustom: "Enter village panchayat name",
    phEmail: "example@email.com",
    phAadhar: "12-digit Aadhaar number or last 4 digits",
    phAadhar12: "12-digit Aadhaar number (Full)",
    phAadhar4: "Enter last 4 digits (e.g. 1234)",
    phEnrollment: "28-character Enrollment number",
    phDescription: "Enter detailed description of your grievance here...",
    phRemarks: "Add any additional remarks here...",
    phSearch: "Search by Name, Phone, Aadhaar, Reason or Block...",
    phOtherDistrict: "Enter District Name (e.g. Sukma, Bastar, Bijapur...)",
    phOtherPanchayat: "Enter Gram Panchayat Name",
    phOtherVillage: "Enter Village Name",

    // Other District Labels
    lblOtherDistrict: "District Name",
    lblOtherPanchayat: "Gram Panchayat Name",
    lblOtherVillage: "Village / Town Name",
    lblOtherDistrictBadge: "Other District Case (Will be forwarded to respective district)",

    // Select Options
    optSelectBlock: "-- Select Block --",
    optSelectPanchayatFirst: "-- Select Block First --",
    optSelectPanchayat: "-- Select Gram Panchayat --",
    optSelectVillageFirst: "-- Select Panchayat First --",
    optSelectVillage: "-- Select Village --",
    optSelectReason: "-- Select Reason --",
    optOther: "➕ Other District (Enter Manually)",
    optOtherDistrict: "➕ Other District (Enter Manually)",
    optAllStatuses: "All Statuses",
    optAllDates: "📅 All Dates",
    optDateToday: "📅 Today",
    optDateYesterday: "📅 Yesterday",
    optDateLast7: "📅 Last 7 Days",
    optDateLast30: "📅 Last 30 Days",
    optDateThisMonth: "📅 This Month",
    optDateCustom: "📅 Custom Range...",
    lblFromDate: "From Date:",
    lblToDate: "To Date:",
    btnClearDate: "Reset",
    btnClearDateTitle: "Clear Date Filter",
    btnExportCsv: "Download CSV / Excel",
    btnExportTitle: "Download filtered data as CSV",
    noDataToExport: "No grievances available to export",

    // Buttons
    btnSubmit: "✓ Submit Grievance",
    btnSubmitting: "⏳ Submitting Grievance...",
    btnReset: "↻ Reset Form",

    // All Grievances Section
    allGrievancesTitle: "📋 All Registered Grievances",
    allGrievancesInfo: "This list shows all submitted grievances",
    thApplicant: "Applicant",
    thLocation: "Block / Location",
    thReason: "Reason",
    thDate: "Date",
    thStatus: "Status",
    thDescription: "Description",
    showingPrefix: "Showing",
    showingSuffix: "records",
    tableEmpty: "🔍 No grievances found | New grievances will appear here",
    tableEmptySearch: "🔍 No matching grievances found | Try searching with another term",

    // Modal
    modalSuccessTitle: "Grievance Submitted Successfully!",
    modalSuccessSub: "Your grievance has been registered successfully.",
    modalLblId: "Grievance Token ID:",
    modalLblName: "Applicant Name:",
    modalLblStatus: "Sync Status:",
    modalSynced: "✓ Synced to Google Sheet",
    modalOffline: "⚠️ Saved Locally (Offline)",
    modalBtnClose: "✓ OK",
    modalBtnViewAll: "📋 View All Grievances",

    // Status Edit Modal & Toast
    modalStatusTitle: "Update Grievance Status",
    modalStatusSub: "Change grievance status and remarks",
    lblNewStatus: "Select New Status *",
    lblStatusRemarks: "Remarks (Optional)",
    phStatusRemarks: "Enter remarks regarding status change...",
    btnSaveStatus: "✓ Save Status",
    btnSavingStatus: "⏳ Saving Status...",
    btnCancel: "Cancel",
    statusUpdatedSuccess: "✓ Status updated successfully!",
    statusUpdateFailed: "⚠️ Failed to update status",
    actionEditStatus: "Change Status",

    // Footer
    portalCopyright: "© 2026 South Bastar Dantewada District | All Rights Reserved",
    portalHours: "Grievance Registration Hours: 10:00 AM - 5:00 PM (Monday - Friday)"
  }
};

export function getCurrentLanguage() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'en' || saved === 'hi') {
      return saved;
    }
  } catch (e) {}
  return 'hi';
}

let _langThrottleLock = false;
export function toggleLanguage(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (_langThrottleLock) return;
  _langThrottleLock = true;
  setTimeout(() => { _langThrottleLock = false; }, 200);

  const current = getCurrentLanguage();
  const nextLang = current === 'hi' ? 'en' : 'hi';
  try {
    localStorage.setItem(LANG_STORAGE_KEY, nextLang);
  } catch (err) {}
  applyLanguage(nextLang);
}

export function applyLanguage(lang) {
  const currentLang = (lang === 'en') ? 'en' : 'hi';
  const t = TRANSLATIONS[currentLang];
  document.documentElement.setAttribute('lang', currentLang);

  // 1. Language Toggle Button text
  const langText = document.getElementById('langToggleText');
  if (langText) langText.textContent = t.langBtn;

  // 2. Theme Toggle Button text
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const themeText = document.getElementById('themeToggleText');
  if (themeText) {
    themeText.textContent = isDark ? t.themeLight : t.themeDark;
  }

  // 3. Elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // 4. Input Placeholders with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // 4b. Element Titles / Tooltips with data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (t[key] !== undefined) {
      el.setAttribute('title', t[key]);
    }
  });

  // 5. Submit & Reset button text
  const submitBtn = document.querySelector('.btn-submit');
  if (submitBtn && !submitBtn.disabled) {
    submitBtn.innerHTML = t.btnSubmit;
  }
  const resetBtn = document.querySelector('.btn-reset');
  if (resetBtn) {
    resetBtn.innerHTML = t.btnReset;
  }

  // 6. Quick action buttons
  const btnActionPrimary = document.querySelector('.btn-action-primary');
  if (btnActionPrimary) btnActionPrimary.innerHTML = t.btnFileNew;

  const btnActionSecondary = document.querySelector('.btn-action-secondary');
  if (btnActionSecondary) btnActionSecondary.innerHTML = t.btnViewAllGrievances;

  // 7. Status filter first option
  const statusFilter = document.getElementById('statusFilterSelect');
  if (statusFilter && statusFilter.options.length > 0) {
    statusFilter.options[0].text = t.optAllStatuses;
  }

  // 8. Custom triggers for re-rendering dynamically populated sections
  if (typeof window.__onLanguageChanged === 'function') {
    window.__onLanguageChanged(currentLang);
  }
}

if (typeof window !== 'undefined') {
  window.toggleLanguage = toggleLanguage;
  window.__toggleLanguage = toggleLanguage;
  window.getCurrentLanguage = getCurrentLanguage;
  window.applyLanguage = applyLanguage;
}
