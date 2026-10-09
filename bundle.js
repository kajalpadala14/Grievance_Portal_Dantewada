(() => {
  // src/js/i18n.js
  var LANG_STORAGE_KEY = "dantewada_portal_lang";
  var TRANSLATIONS = {
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
  function getCurrentLanguage() {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === "en" || saved === "hi") {
        return saved;
      }
    } catch (e) {
    }
    return "hi";
  }
  var _langThrottleLock = false;
  function toggleLanguage(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (_langThrottleLock) return;
    _langThrottleLock = true;
    setTimeout(() => {
      _langThrottleLock = false;
    }, 200);
    const current = getCurrentLanguage();
    const nextLang = current === "hi" ? "en" : "hi";
    try {
      localStorage.setItem(LANG_STORAGE_KEY, nextLang);
    } catch (err) {
    }
    applyLanguage(nextLang);
  }
  function applyLanguage(lang) {
    const currentLang = lang === "en" ? "en" : "hi";
    const t = TRANSLATIONS[currentLang];
    document.documentElement.setAttribute("lang", currentLang);
    const langText = document.getElementById("langToggleText");
    if (langText) langText.textContent = t.langBtn;
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const themeText = document.getElementById("themeToggleText");
    if (themeText) {
      themeText.textContent = isDark ? t.themeLight : t.themeDark;
    }
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== void 0) {
        el.textContent = t[key];
      }
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (t[key] !== void 0) {
        el.setAttribute("placeholder", t[key]);
      }
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (t[key] !== void 0) {
        el.setAttribute("title", t[key]);
      }
    });
    const submitBtn = document.querySelector(".btn-submit");
    if (submitBtn && !submitBtn.disabled) {
      submitBtn.innerHTML = t.btnSubmit;
    }
    const resetBtn = document.querySelector(".btn-reset");
    if (resetBtn) {
      resetBtn.innerHTML = t.btnReset;
    }
    const btnActionPrimary = document.querySelector(".btn-action-primary");
    if (btnActionPrimary) btnActionPrimary.innerHTML = t.btnFileNew;
    const btnActionSecondary = document.querySelector(".btn-action-secondary");
    if (btnActionSecondary) btnActionSecondary.innerHTML = t.btnViewAllGrievances;
    const statusFilter = document.getElementById("statusFilterSelect");
    if (statusFilter && statusFilter.options.length > 0) {
      statusFilter.options[0].text = t.optAllStatuses;
    }
    if (typeof window.__onLanguageChanged === "function") {
      window.__onLanguageChanged(currentLang);
    }
  }
  if (typeof window !== "undefined") {
    window.toggleLanguage = toggleLanguage;
    window.__toggleLanguage = toggleLanguage;
    window.getCurrentLanguage = getCurrentLanguage;
    window.applyLanguage = applyLanguage;
  }

  // src/config/defaultConfig.js
  var DEFAULT_LOCATIONS = {
    "दंतेवाड़ा": {
      "दंतेवाड़ा": ["दंतेवाड़ा", "दंतेवाडा", "दंतेवाड़ा (मुख्यालय)", "पुराना बाजार", "मेंढका"],
      "चितालंका": ["चितालंका", "भोगाम", "नेरली"],
      "बालपेट": ["बालपेट", "मासापारा", "कोडेनार"],
      "टेकनार": ["टेकनार", "कसेनार", "गदापाल"],
      "मटेनार": ["मटेनार", "पंडेवार", "कटेनार"]
    },
    "दंतेवाडा": {
      "दंतेवाडा": ["दंतेवाड़ा", "दंतेवाडा", "दंतेवाडा (मुख्यालय)", "पुराना बाजार", "मेंढका"],
      "दंतेवाड़ा": ["दंतेवाड़ा", "दंतेवाडा", "दंतेवाड़ा (मुख्यालय)", "पुराना बाजार", "मेंढका"],
      "चितालंका": ["चितालंका", "भोगाम", "नेरली"],
      "बालपेट": ["बालपेट", "मासापारा", "कोडेनार"],
      "टेकनार": ["टेकनार", "कसेनार", "गदापाल"],
      "मटेनार": ["मटेनार", "पंडेवार", "कटेनार"]
    },
    "गीदम": {
      "गीदम": ["गीदम", "गीदम (मुख्यालय)", "कौशल नगर"],
      "जावंगा": ["जावंगा", "कारली", "पाहुरनार"],
      "कारली": ["कारली", "हारम"],
      "बारसूर": ["बारसूर", "मुचनार", "मंगनार"],
      "छिंदनार": ["छिंदनार", "पाहुरनार"]
    },
    "कुआकोंडा": {
      "कुआकोंडा": ["कुआकोंडा", "कोवाकोंडा", "कुआकोंडा (मुख्यालय)", "मैलावाड़ा"],
      "कोवाकोंडा": ["कोवाकोंडा", "कुआकोंडा", "कोवाकोंडा (मुख्यालय)", "मैलावाड़ा"],
      "नकुलनार": ["नकुलनार", "बड़ेगुडरा"],
      "समलूर": ["समलूर", "पालनार"],
      "रीता": ["रीता", "पिनेरली"]
    },
    "कोवाकोंडा": {
      "कोवाकोंडा": ["कोवाकोंडा", "कुआकोंडा", "कोवाकोंडा (मुख्यालय)", "मैलावाड़ा"],
      "कुआकोंडा": ["कुआकोंडा", "कोवाकोंडा", "कुआकोंडा (मुख्यालय)", "मैलावाड़ा"],
      "नकुलनार": ["नकुलनार", "बड़ेगुडरा"],
      "समलूर": ["समलूर", "पालनार"],
      "रीता": ["रीता", "पिनेरली"]
    },
    "कटेकल्याण": {
      "कटेकल्याण": ["कटेकल्याण", "कटे कल्याण", "कटेकल्याण (मुख्यालय)", "बड़ेगोड़े"],
      "कटे कल्याण": ["कटे कल्याण", "कटेकल्याण", "कटे कल्याण (मुख्यालय)", "बड़ेगोड़े"],
      "मारजुम": ["मारजुम", "गादापाल"],
      "तुमकपाल": ["तुमकपाल", "परचेली"],
      "तेतम": ["तेतम", "मुंडा"]
    },
    "कटे कल्याण": {
      "कटे कल्याण": ["कटे कल्याण", "कटेकल्याण", "कटे कल्याण (मुख्यालय)", "बड़ेगोड़े"],
      "कटेकल्याण": ["कटेकल्याण", "कटे कल्याण", "कटेकल्याण (मुख्यालय)", "बड़ेगोड़े"],
      "मारजुम": ["मारजुम", "गादापाल"],
      "तुमकपाल": ["तुमकपाल", "परचेली"],
      "तेतम": ["तेतम", "मुंडा"]
    }
  };
  var DEFAULT_CONFIG = {
    portalInfo: {
      title: "🔴 Aadhaar शिकायत पोर्टल",
      subtitle: "दक्षिण बस्तर जिला, दंतेवाडा | Public Grievance Portal, South Bastar Dantewada",
      officeHours: "शिकायत पंजीकरण समय | Grievance Registration Hours: 10:00 AM - 5:00 PM (सोमवार - शुक्रवार | Monday - Friday)",
      copyright: "© 2026 दक्षिण बस्तर दंतेवाडा जिला | South Bastar Dantewada District"
    },
    locations: DEFAULT_LOCATIONS,
    blocks: [
      { value: "दंतेवाड़ा", label: "दंतेवाड़ा / दंतेवाडा | Dantewada" },
      { value: "गीदम", label: "गीदम | Geedam" },
      { value: "कुआकोंडा", label: "कुआकोंडा / कोवाकोंडा | Kuakonda" },
      { value: "कटेकल्याण", label: "कटेकल्याण / कटे कल्याण | Katekalyan" }
    ],
    reasons: [
      { value: "Rajpatra Process Information", label: "Rajpatra Process Information | राजपत्र प्रक्रिया जानकारी" },
      { value: "Name Change", label: "Name Change | नाम परिवर्तन / सुधार" },
      { value: "DOB Change", label: "DOB Change | जन्मतिथि सुधार" },
      { value: "Duplicate Aadhaar", label: "Duplicate Aadhaar | डुप्लीकेट आधार" },
      { value: "Gender Change", label: "Gender Change | लिंग परिवर्तन / सुधार" },
      { value: "Biometric Mismatch", label: "Biometric Mismatch | बायोमेट्रिक मिसमैच" },
      { value: "Aadhaar lost", label: "Aadhaar lost | आधार गुम / खो गया" },
      { value: "New Aadhaar for orphan child (DCPO) Format", label: "New Aadhaar for orphan child (DCPO) Format | अनाथ बच्चे हेतु नया आधार (DCPO फॉर्मेट)" },
      { value: "Already Generated EID", label: "Already Generated EID | पहले से जनरेट EID" },
      { value: "Cancelled Aadhaar under regulation 27", label: "Cancelled Aadhaar under regulation 27 | विनियम 27 के तहत रद्द आधार" },
      { value: "Deactivate Under Regulation 28", label: "Deactivate Under Regulation 28 | विनियम 28 के तहत निष्क्रिय आधार" },
      { value: "DECLARED DOB TO VERIEFIED", label: "DECLARED DOB TO VERIEFIED | घोषित जन्मतिथि सत्यापन" },
      { value: "ALREADY GENEARTED AADHAR NUMBER", label: "ALREADY GENEARTED AADHAR NUMBER | पहले से जनरेट आधार नंबर" },
      { value: "Address Update", label: "Address Update | पता सुधार / अपडेट" },
      { value: "Biometric Lock", label: "Biometric Lock | बायोमेट्रिक लॉक" },
      { value: "Biometric Issue", label: "Biometric Issue | बायोमेट्रिक समस्या" },
      { value: "Orphan Child Name Change", label: "Orphan Child Name Change | अनाथ बच्चे का नाम परिवर्तन" },
      { value: "Multiple Aadhaar", label: "Multiple Aadhaar | एकाधिक आधार" },
      { value: "Deceased Aadhaar", label: "Deceased Aadhaar | मृतक आधार" },
      { value: "PVC Order", label: "PVC Order | पीवीसी कार्ड ऑर्डर" },
      { value: "DOB Change Using Annexure", label: "DOB Change Using Annexure | अनुलग्नक (Annexure) द्वारा जन्मतिथि सुधार" },
      { value: "Other district case", label: "Other district case | अन्य जिला प्रकरण" },
      { value: "अन्य / Other", label: "अन्य / Other | अन्य कारण" }
    ],
    statuses: [
      { id: "नई", label: "नई | New", color: "#3498db" },
      { id: "लंबित", label: "लंबित | Pending", color: "#f39c12" },
      { id: "हल", label: "हल | Resolved", color: "#27ae60" },
      { id: "अस्वीकृत", label: "अस्वीकृत | Rejected", color: "#e74c3c" }
    ]
  };

  // src/js/api.js
  var import_meta = {};
  var APPS_SCRIPT_URL = (() => {
    let url = "";
    try {
      if (typeof import_meta !== "undefined" && import_meta && import_meta.env && import_meta.env.VITE_APPS_SCRIPT_URL) {
        url = import_meta.env.VITE_APPS_SCRIPT_URL;
      }
    } catch (e) {
    }
    try {
      if (!url && typeof window !== "undefined" && window.__APPS_SCRIPT_URL__) {
        url = window.__APPS_SCRIPT_URL__;
      }
    } catch (e) {
    }
    if (!url) {
      url = "https://script.google.com/macros/s/AKfycbyhxyByWiY0_ivzoLJDKs1pi6qz42_0Vx0lu-ABgc__TsJZdTjidKvZeeGInQCoqtgQ/exec";
    }
    url = (url || "").trim().replace(/\/+$/, "");
    if (url && !url.endsWith("/exec")) {
      url += "/exec";
    }
    return url;
  })();
  var LOCAL_STORAGE_KEY = "grievances";
  var LOCAL_CONFIG_KEY = "portal_config";
  async function getInitialData() {
    let config = DEFAULT_CONFIG;
    let grievances2 = getStoredGrievances();
    const cachedConfig = localStorage.getItem(LOCAL_CONFIG_KEY);
    if (cachedConfig) {
      try {
        const parsed = JSON.parse(cachedConfig);
        if (parsed.isFromSheet && parsed.locations && Object.keys(parsed.locations).length > 0) {
          if (!parsed.reasons || parsed.reasons.length === 0 || parsed.reasons.some((r) => r.value === "आवेदन संबंधी") || !parsed.reasons.some((r) => r.value === "Name Change")) {
            parsed.reasons = DEFAULT_CONFIG.reasons;
          }
          if (parsed.portalInfo && (!parsed.portalInfo.title || parsed.portalInfo.title.includes("सार्वजनिक") || !parsed.portalInfo.copyright || parsed.portalInfo.copyright.includes("2024"))) {
            parsed.portalInfo = DEFAULT_CONFIG.portalInfo;
          }
          config = { ...DEFAULT_CONFIG, ...parsed };
        } else {
          config = { ...DEFAULT_CONFIG };
        }
      } catch (e) {
        config = DEFAULT_CONFIG;
      }
    }
    if (APPS_SCRIPT_URL && APPS_SCRIPT_URL.trim() !== "") {
      try {
        const response = await fetch(`${APPS_SCRIPT_URL}?action=getInitialData`, {
          credentials: "omit"
        });
        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            if (result.config) {
              const sheetReasons = result.config.reasons && result.config.reasons.length > 0 && !result.config.reasons.some((r) => r.value === "आवेदन संबंधी") ? result.config.reasons : DEFAULT_CONFIG.reasons;
              const sheetPortalInfo = result.config.portalInfo && result.config.portalInfo.title && !result.config.portalInfo.title.includes("सार्वजनिक") ? result.config.portalInfo : DEFAULT_CONFIG.portalInfo;
              config = {
                ...DEFAULT_CONFIG,
                ...result.config,
                portalInfo: sheetPortalInfo,
                reasons: sheetReasons,
                isFromSheet: true,
                locations: result.config.locations && Object.keys(result.config.locations).length > 0 ? result.config.locations : DEFAULT_CONFIG.locations,
                blocks: result.config.blocks && result.config.blocks.length > 0 ? result.config.blocks : DEFAULT_CONFIG.blocks
              };
              localStorage.setItem(LOCAL_CONFIG_KEY, JSON.stringify(config));
              console.log("[API] Loaded configuration from Google Sheet:", config);
            }
            if (Array.isArray(result.data)) {
              grievances2 = result.data;
              localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(grievances2));
            }
            return { config, grievances: grievances2, fromSheet: true };
          } else {
            console.warn("[API] Google Sheet API returned error:", result.error);
          }
        }
      } catch (err) {
        console.warn("[API] Failed to fetch initial data from Google Apps Script, using local cache/defaults:", err);
      }
    }
    return { config, grievances: grievances2, fromSheet: false };
  }
  async function fetchLocationsFromSheet() {
    if (!APPS_SCRIPT_URL) return null;
    try {
      const response = await fetch(`${APPS_SCRIPT_URL}?action=getLocations`, {
        credentials: "omit"
      });
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.locations && Object.keys(result.locations).length > 0) {
          return result.locations;
        }
      }
    } catch (e) {
      console.warn("[API] Failed to fetch locations from sheet:", e);
    }
    return null;
  }
  async function submitGrievance(grievanceData) {
    let backendSuccess = false;
    let backendError = null;
    const localGrievances = getStoredGrievances();
    localGrievances.unshift(grievanceData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localGrievances));
    if (APPS_SCRIPT_URL && APPS_SCRIPT_URL.trim() !== "") {
      try {
        const response = await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "cors",
          redirect: "follow",
          credentials: "omit",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify({
            action: "submitGrievance",
            ...grievanceData
          })
        });
        const responseText = await response.text();
        try {
          const result = JSON.parse(responseText);
          if (result.success) {
            backendSuccess = true;
            console.log("[API] Grievance synced with Google Sheet successfully:", result);
          } else {
            backendError = result.error || "Google Apps Script returned an unsuccessful response.";
            console.warn("[API] Google Sheet Error:", backendError);
          }
        } catch (parseErr) {
          if (responseText.includes("You need access") || responseText.includes("accounts.google.com")) {
            backendError = "PERMISSION_ERROR: Google Apps Script Web App को 'Who has access: Anyone' पर सेट करना आवश्यक है।";
          } else if (responseText.includes("unable to open the file") || responseText.includes("Page not found")) {
            backendError = "TIMEOUT / GOOGLE LOCK: Google Apps Script सर्वर व्यस्त या टाइमआउट हो गया। कृपया कुछ सेकंड बाद पुनः प्रयास करें।";
          } else {
            backendError = "Apps Script से अमान्य उत्तर (HTML) मिला। कृपया Web App URL और Deployment जांचें।";
          }
          console.warn("[API] Apps Script returned non-JSON response:", backendError);
        }
      } catch (err) {
        backendError = err.message || "Network Error: Google Apps Script तक नहीं पहुँच सका।";
        console.warn("[API] Apps Script sync failed, grievance saved locally:", err);
      }
    } else {
      backendError = "VITE_APPS_SCRIPT_URL सेट नहीं है।";
    }
    return {
      success: true,
      syncedToSheet: backendSuccess,
      error: backendError,
      data: grievanceData
    };
  }
  function getStoredGrievances() {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }
  async function updateGrievanceStatus(id, newStatus, remarks = null, rowNumber = null) {
    let backendSuccess = false;
    let backendError = null;
    const localGrievances = getStoredGrievances();
    const index = localGrievances.findIndex((g) => String(g.id) === String(id) || rowNumber && String(g.rowNumber) === String(rowNumber));
    if (index !== -1) {
      localGrievances[index].status = newStatus;
      if (remarks !== null && remarks !== void 0) {
        localGrievances[index].remarks = remarks;
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localGrievances));
    }
    if (APPS_SCRIPT_URL && APPS_SCRIPT_URL.trim() !== "") {
      try {
        const payload = {
          action: "updateStatus",
          id,
          status: newStatus
        };
        if (rowNumber) payload.rowNumber = rowNumber;
        if (remarks !== null && remarks !== void 0) payload.remarks = remarks;
        const response = await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "cors",
          redirect: "follow",
          credentials: "omit",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(payload)
        });
        const responseText = await response.text();
        try {
          const result = JSON.parse(responseText);
          if (result.success) {
            backendSuccess = true;
            console.log("[API] Status updated in Google Sheet successfully:", result);
          } else {
            backendError = result.error || "Failed to update status in Google Sheet.";
          }
        } catch (parseErr) {
          backendError = "Apps Script returned non-JSON response.";
        }
      } catch (err) {
        backendError = err.message || "Network Error while updating status.";
      }
    }
    return {
      success: true,
      syncedToSheet: backendSuccess,
      error: backendError
    };
  }

  // src/js/script.js
  var currentConfig = DEFAULT_CONFIG;
  var grievances = [];
  var searchQuery = "";
  var statusFilterQuery = "";
  var datePresetQuery = "all";
  var startDateQuery = "";
  var endDateQuery = "";
  var isSubmittingGrievance = false;
  var THEME_STORAGE_KEY = "dantewada_portal_theme";
  function getCurrentTheme() {
    try {
      if (localStorage.getItem("portal-theme")) {
        localStorage.removeItem("portal-theme");
      }
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === "dark" || saved === "light") {
        return saved;
      }
    } catch (e) {
    }
    return "light";
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeToggleButton(theme);
  }
  function updateThemeToggleButton(theme) {
    const btn = document.getElementById("themeToggleBtn");
    const icon = document.getElementById("themeToggleIcon");
    const text = document.getElementById("themeToggleText");
    if (!btn) return;
    const currentLang = getCurrentLanguage();
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.hi;
    const isDark = theme === "dark";
    if (icon) icon.textContent = isDark ? "☀️" : "🌙";
    if (text) text.textContent = isDark ? t.themeLight : t.themeDark;
    btn.setAttribute("aria-label", isDark ? currentLang === "en" ? "Switch to Light Mode" : "लाइट मोड में बदलें" : currentLang === "en" ? "Switch to Dark Mode" : "डार्क मोड में बदलें");
    btn.setAttribute("title", isDark ? currentLang === "en" ? "Switch to Light Mode" : "लाइट मोड में बदलें" : currentLang === "en" ? "Switch to Dark Mode" : "डार्क मोड में बदलें");
  }
  var _themeThrottleLock = false;
  function toggleTheme(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (_themeThrottleLock) return;
    _themeThrottleLock = true;
    setTimeout(() => {
      _themeThrottleLock = false;
    }, 200);
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = current === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (e2) {
    }
    applyTheme(nextTheme);
  }
  function initTheme() {
    const theme = getCurrentTheme();
    applyTheme(theme);
    if (window.matchMedia) {
      try {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
          try {
            const saved = localStorage.getItem(THEME_STORAGE_KEY);
            if (!saved) {
              applyTheme(e.matches ? "dark" : "light");
            }
          } catch (err) {
          }
        });
      } catch (e) {
      }
    }
  }
  async function init() {
    initTheme();
    applyLanguage(getCurrentLanguage());
    setDefaultDate();
    setupEventListeners();
    startLiveClock();
    applyPortalConfig(currentConfig);
    renderFormOptions(currentConfig);
    updateDashboard();
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
      console.error("Error loading initial data:", err);
    }
    updateDashboard();
    displayGrievances();
    logApiStatus();
  }
  function logApiStatus() {
    if (APPS_SCRIPT_URL && APPS_SCRIPT_URL.trim() !== "") {
      console.log("%c[Grievance Portal] Connected to Google Apps Script API", "color: #27ae60; font-weight: bold;");
    } else {
      console.log("%c[Grievance Portal] Running in Local Mode (.env VITE_APPS_SCRIPT_URL not set)", "color: #f39c12; font-weight: bold;");
    }
  }
  function startLiveClock() {
    const timeEl = document.getElementById("livePortalTime");
    if (!timeEl) return;
    function updateClock() {
      const now = /* @__PURE__ */ new Date();
      const options = {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      const currentLang = getCurrentLanguage();
      timeEl.textContent = "🕒 " + now.toLocaleString(currentLang === "en" ? "en-IN" : "hi-IN", options);
    }
    updateClock();
    setInterval(updateClock, 1e3);
  }
  function applyPortalConfig(config) {
    if (!config || !config.portalInfo) return;
    const titleEl = document.getElementById("portalTitle");
    const subtitleEl = document.getElementById("portalSubtitle");
    const hoursEl = document.getElementById("portalHours");
    const copyrightEl = document.getElementById("portalCopyright");
    if (titleEl && config.portalInfo.title) titleEl.textContent = config.portalInfo.title;
    if (subtitleEl && config.portalInfo.subtitle) subtitleEl.textContent = config.portalInfo.subtitle;
    if (hoursEl && config.portalInfo.officeHours) hoursEl.textContent = config.portalInfo.officeHours;
    if (copyrightEl && config.portalInfo.copyright) copyrightEl.textContent = config.portalInfo.copyright;
  }
  function renderFormOptions(config) {
    if (!config) return;
    const lang = getCurrentLanguage();
    const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;
    const blockSelect = document.getElementById("block");
    if (blockSelect) {
      const blocksList = config.blocks && config.blocks.length > 0 ? config.blocks : config.locations && Object.keys(config.locations).length > 0 ? Object.keys(config.locations).map((b) => ({ value: b, label: b })) : [];
      const currentValue = blockSelect.value;
      let html = "";
      if (blocksList.length === 0) {
        html = `<option value="">${lang === "en" ? "-- Loading from Sheet... --" : "-- शीट से लोड हो रहा है... --"}</option>`;
      } else {
        html = `<option value="">${t.optSelectBlock}</option>`;
        blocksList.forEach((b) => {
          const isSelected = b.value === currentValue ? "selected" : "";
          html += `<option value="${escapeHtml(b.value)}" ${isSelected}>${escapeHtml(b.label || b.value)}</option>`;
        });
        const isOtherSelected = currentValue === "OTHER_DISTRICT" || currentValue === "__OTHER__" ? "selected" : "";
        html += `<option value="OTHER_DISTRICT" ${isOtherSelected}>${t.optOtherDistrict || t.optOther || "➕ अन्य जिला (मैन्युअल दर्ज करें)"}</option>`;
      }
      blockSelect.innerHTML = html;
      if (currentValue) {
        handleBlockChange();
      }
    }
    const reasonSelect = document.getElementById("reason");
    if (reasonSelect && Array.isArray(config.reasons)) {
      const currentValue = reasonSelect.value;
      let html = `<option value="">${t.optSelectReason}</option>`;
      config.reasons.forEach((r) => {
        const isSelected = r.value === currentValue ? "selected" : "";
        html += `<option value="${escapeHtml(r.value)}" ${isSelected}>${escapeHtml(r.label || r.value)}</option>`;
      });
      reasonSelect.innerHTML = html;
    }
    const statusContainer = document.getElementById("statusOptionsContainer");
    if (statusContainer && Array.isArray(config.statuses)) {
      let html = "";
      config.statuses.forEach((s, index) => {
        const checked = index === 0 ? "checked" : "";
        const color = s.color || "#2563eb";
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
    const statusFilterSelect = document.getElementById("statusFilterSelect");
    if (statusFilterSelect && Array.isArray(config.statuses)) {
      let html = `<option value="">${t.optAllStatuses}</option>`;
      config.statuses.forEach((s) => {
        html += `<option value="${escapeHtml(s.id)}">${escapeHtml(s.label || s.id)}</option>`;
      });
      statusFilterSelect.innerHTML = html;
    }
    if (config.locations) {
      buildVillagesIndex(config.locations);
      populateAllVillagesDatalist();
    }
  }
  var allVillagesIndex = [];
  var DISTRICT_BLOCKS = [
    {
      id: "dantewada",
      hi: "दंतेवाड़ा",
      en: "Dantewada",
      aliases: ["दंतेवाड़ा", "दंतेवाडा", "दन्तेवाड़ा", "दन्तेवाडा", "dantewada", "dantewara"]
    },
    {
      id: "geedam",
      hi: "गीदम",
      en: "Geedam",
      aliases: ["गीदम", "गीडम", "geedam", "gidam"]
    },
    {
      id: "kuakonda",
      hi: "कुआकोंडा",
      en: "Kuakonda",
      aliases: ["कुआकोंडा", "कुआकोण्डा", "कुआकोंड़ा", "कोवाकोंडा", "kuakonda", "kuwakonda", "kovakonda", "kowakonda"]
    },
    {
      id: "katekalyan",
      hi: "कटेकल्याण",
      en: "Katekalyan",
      aliases: ["कटेकल्याण", "कटे कल्याण", "katekalyan", "kate kalyan"]
    }
  ];
  function normalizeBlock(rawBlock) {
    if (!rawBlock) return null;
    const clean = String(rawBlock).trim().toLowerCase();
    for (const b of DISTRICT_BLOCKS) {
      if (b.aliases.some((alias) => alias.toLowerCase() === clean)) {
        return b;
      }
    }
    for (const b of DISTRICT_BLOCKS) {
      if (b.aliases.some((alias) => clean.includes(alias.toLowerCase()))) {
        return b;
      }
    }
    return null;
  }
  var BLOCK_ALIASES = {
    "दंतेवाड़ा": "दंतेवाड़ा",
    "दंतेवाडा": "दंतेवाड़ा",
    "दन्तेवाड़ा": "दंतेवाड़ा",
    "दन्तेवाडा": "दंतेवाड़ा",
    "dantewada": "दंतेवाड़ा",
    "dantewara": "दंतेवाड़ा",
    "गीदम": "गीदम",
    "गीडम": "गीदम",
    "geedam": "गीदम",
    "gidam": "गीदम",
    "कुआकोंडा": "कुआकोंडा",
    "कुआकोण्डा": "कुआकोंडा",
    "कुआकोंड़ा": "कुआकोंडा",
    "कोवाकोंडा": "कुआकोंडा",
    "kuakonda": "कुआकोंडा",
    "kuwakonda": "कुआकोंडा",
    "kovakonda": "कुआकोंडा",
    "kowakonda": "कुआकोंडा",
    "कटेकल्याण": "कटेकल्याण",
    "कटे कल्याण": "कटेकल्याण",
    "katekalyan": "कटेकल्याण",
    "kate kalyan": "कटेकल्याण"
  };
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
  function ensureBlockNamesakeVillages(locations) {
    if (!locations || typeof locations !== "object") return;
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
    blockSpecs.forEach((spec) => {
      const matchingKeys = Object.keys(locations).filter(
        (k) => spec.names.includes(k) || BLOCK_ALIASES[k] && spec.names.includes(BLOCK_ALIASES[k])
      );
      const keysToProcess = matchingKeys.length > 0 ? matchingKeys : [spec.names[0]];
      keysToProcess.forEach((bKey) => {
        if (!locations[bKey]) locations[bKey] = {};
        const blockObj = locations[bKey];
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
        spec.villages.forEach((v) => {
          if (!blockObj[targetGp].includes(v)) {
            blockObj[targetGp].unshift(v);
          }
        });
      });
    });
  }
  function buildVillagesIndex(locations) {
    allVillagesIndex = [];
    if (!locations || typeof locations !== "object") return;
    ensureBlockNamesakeVillages(locations);
    for (const [block, panchayats] of Object.entries(locations)) {
      if (!block || block === "__OTHER__" || !panchayats || typeof panchayats !== "object") continue;
      for (const [panchayat, villages] of Object.entries(panchayats)) {
        if (!panchayat || panchayat === "__OTHER__" || !Array.isArray(villages)) continue;
        for (const village of villages) {
          if (!village || village === "__OTHER__") continue;
          const vTrim = village.trim();
          const pTrim = panchayat.trim();
          const bTrim = block.trim();
          const exists = allVillagesIndex.some(
            (item) => item.village.toLowerCase() === vTrim.toLowerCase() && item.panchayat.toLowerCase() === pTrim.toLowerCase() && item.block.toLowerCase() === bTrim.toLowerCase()
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
  function getAvailableVillages(filterBlock = null, filterPanchayat = null) {
    if (allVillagesIndex.length === 0) return [];
    let items = allVillagesIndex;
    if (filterBlock && filterBlock !== "__OTHER__") {
      const filterCanon = BLOCK_ALIASES[filterBlock.trim()] || filterBlock.trim().toLowerCase();
      items = items.filter((item) => {
        const itemCanon = BLOCK_ALIASES[item.block] || item.block.toLowerCase();
        return itemCanon === filterCanon || item.block.toLowerCase() === filterBlock.toLowerCase();
      });
    }
    if (filterPanchayat && filterPanchayat !== "__OTHER__") {
      const pFilterCanon = BLOCK_ALIASES[filterPanchayat.trim()] || filterPanchayat.trim().toLowerCase();
      items = items.filter((item) => {
        const itemPCanon = BLOCK_ALIASES[item.panchayat] || item.panchayat.toLowerCase();
        return itemPCanon === pFilterCanon || item.panchayat.toLowerCase() === filterPanchayat.toLowerCase();
      });
    }
    const seen = /* @__PURE__ */ new Set();
    const uniqueItems = [];
    for (const item of items) {
      const key = filterPanchayat ? item.village.toLowerCase() : `${item.village}|${item.panchayat}`.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        uniqueItems.push(item);
      }
    }
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
      return a.village.localeCompare(b.village, "hi");
    });
    return sorted;
  }
  var activeVillageItemIndex = -1;
  function renderVillageDropdownMenu(query = "") {
    const menu = document.getElementById("villageDropdownMenu");
    const villageInput = document.getElementById("village");
    const toggleBtn = document.getElementById("toggleVillageDropdownBtn");
    if (!menu || !villageInput) return;
    const currentBlock = document.getElementById("block") ? document.getElementById("block").value : "";
    const currentPanchayat = document.getElementById("panchayat") ? document.getElementById("panchayat").value : "";
    const available = getAvailableVillages(currentBlock, currentPanchayat);
    const q = (query || "").trim().toLowerCase();
    let filtered = available;
    if (q) {
      filtered = available.filter((item) => {
        return item.village.toLowerCase().includes(q) || item.panchayat && item.panchayat.toLowerCase().includes(q) || item.block && item.block.toLowerCase().includes(q);
      });
    }
    if (filtered.length === 0) {
      menu.innerHTML = `
            <div class="village-dropdown-empty">
                <span>"${escapeHtml(query)}" से मेल खाता कोई गाँव नहीं मिला</span>
                <div style="font-size:0.75rem; color:#94a3b8; margin-top:3px;">(आप इस नाम को सीधे दर्ज कर सकते हैं)</div>
            </div>
        `;
      menu.style.display = "block";
      if (toggleBtn) toggleBtn.classList.add("open");
      activeVillageItemIndex = -1;
      return;
    }
    let html = "";
    const currentVal = villageInput.value.trim().toLowerCase();
    filtered.forEach((item, index) => {
      const isSelected = item.village.toLowerCase() === currentVal;
      const selectedClass = isSelected ? " selected" : "";
      let subText = "";
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
    menu.style.display = "block";
    if (toggleBtn) toggleBtn.classList.add("open");
    activeVillageItemIndex = -1;
    const items = menu.querySelectorAll(".village-dropdown-item");
    items.forEach((el) => {
      el.addEventListener("mousedown", (e) => {
        e.preventDefault();
        selectVillageFromDropdown(el.dataset.village, el.dataset.panchayat, el.dataset.block);
      });
    });
  }
  function openVillageDropdown(query = "") {
    renderVillageDropdownMenu(query);
  }
  function closeVillageDropdown() {
    const menu = document.getElementById("villageDropdownMenu");
    const toggleBtn = document.getElementById("toggleVillageDropdownBtn");
    if (menu) menu.style.display = "none";
    if (toggleBtn) toggleBtn.classList.remove("open");
    activeVillageItemIndex = -1;
  }
  function toggleVillageDropdown() {
    const menu = document.getElementById("villageDropdownMenu");
    const isOpen = menu && menu.style.display === "block";
    if (isOpen) {
      closeVillageDropdown();
    } else {
      const villageInput = document.getElementById("village");
      if (villageInput) villageInput.focus();
      openVillageDropdown("");
    }
  }
  function selectVillageFromDropdown(village, panchayat, block) {
    const villageInput = document.getElementById("village");
    const blockSelect = document.getElementById("block");
    const panchayatSelect = document.getElementById("panchayat");
    if (!villageInput) return;
    villageInput.value = village;
    closeVillageDropdown();
    const clearBtn = document.getElementById("clearVillageBtn");
    if (clearBtn) clearBtn.style.display = "flex";
    const currentBlock = blockSelect ? blockSelect.value : "";
    const currentPanchayat = panchayatSelect ? panchayatSelect.value : "";
    if (!currentBlock || !currentPanchayat) {
      applyLocationAutoFill({
        village,
        panchayat,
        block
      });
    }
    villageInput.classList.add("autofill-highlight");
    setTimeout(() => villageInput.classList.remove("autofill-highlight"), 800);
    villageInput.dispatchEvent(new Event("input", { bubbles: true }));
    villageInput.dispatchEvent(new Event("change", { bubbles: true }));
  }
  function updateActiveVillageItem(items) {
    items.forEach((el, idx) => {
      if (idx === activeVillageItemIndex) {
        el.classList.add("active");
        el.scrollIntoView({ block: "nearest" });
      } else {
        el.classList.remove("active");
      }
    });
  }
  function populateAllVillagesDatalist(filterBlock = null, filterPanchayat = null) {
    const datalist = document.getElementById("allVillagesDatalist");
    const villageInput = document.getElementById("village");
    const sorted = getAvailableVillages(filterBlock, filterPanchayat);
    if (datalist) {
      let html = "";
      if (filterPanchayat && filterPanchayat !== "__OTHER__") {
        const seenV = /* @__PURE__ */ new Set();
        sorted.forEach((item) => {
          if (!seenV.has(item.village)) {
            seenV.add(item.village);
            html += `<option value="${escapeHtml(item.village)}"></option>`;
          }
        });
        if (villageInput && (!villageInput.value || !filterPanchayat)) {
          villageInput.placeholder = "गाँव का नाम लिखें या चुनें";
        }
      } else if (filterBlock && filterBlock !== "__OTHER__") {
        sorted.forEach((item) => {
          html += `<option value="${escapeHtml(item.village)} (पंचायत: ${escapeHtml(item.panchayat)})">${escapeHtml(item.village)}</option>`;
        });
        if (villageInput && !villageInput.value) {
          villageInput.placeholder = "गाँव का नाम लिखें या चुनें";
        }
      } else {
        sorted.forEach((item) => {
          html += `<option value="${escapeHtml(item.displayLabel)}">${escapeHtml(item.village)}</option>`;
        });
        if (villageInput && !villageInput.value) {
          villageInput.placeholder = "गाँव का नाम लिखें या चुनें";
        }
      }
      datalist.innerHTML = html;
    }
    const menu = document.getElementById("villageDropdownMenu");
    if (menu && menu.style.display === "block") {
      renderVillageDropdownMenu(villageInput ? villageInput.value : "");
    }
  }
  function findVillageMatches(query, filterBlock = null) {
    const q = (query || "").trim().toLowerCase();
    if (!q) return [];
    let pool = allVillagesIndex;
    if (filterBlock && filterBlock !== "__OTHER__") {
      const filterCanon = BLOCK_ALIASES[filterBlock.trim()] || filterBlock.trim().toLowerCase();
      const blockPool = pool.filter((v) => {
        const bCanon = BLOCK_ALIASES[v.block] || v.block.toLowerCase();
        return bCanon === filterCanon || v.block.toLowerCase() === filterBlock.toLowerCase();
      });
      if (blockPool.length > 0) {
        pool = blockPool;
      }
    }
    const exactDisplay = pool.find((v) => v.displayLabel.toLowerCase() === q);
    if (exactDisplay) return [exactDisplay];
    if (q.includes("(")) {
      const vPart = q.split("(")[0].trim().toLowerCase();
      const parenPart = q.slice(q.indexOf("(")).toLowerCase();
      const matched = pool.find((v) => {
        return v.village.toLowerCase() === vPart && (parenPart.includes(v.panchayat.toLowerCase()) || parenPart.includes(v.block.toLowerCase()));
      });
      if (matched) return [matched];
    }
    const exactVillage = pool.filter((v) => v.village.toLowerCase() === q);
    if (exactVillage.length > 0) return exactVillage;
    const qCanon = BLOCK_ALIASES[query.trim()] || BLOCK_ALIASES[q];
    if (qCanon) {
      const aliasVillage = pool.filter((v) => {
        const vCanon = BLOCK_ALIASES[v.village] || BLOCK_ALIASES[v.village.toLowerCase()];
        return vCanon === qCanon || v.village.toLowerCase() === qCanon.toLowerCase();
      });
      if (aliasVillage.length > 0) return aliasVillage;
    }
    const prefixMatches = pool.filter((v) => v.village.toLowerCase().startsWith(q));
    if (prefixMatches.length > 0) return prefixMatches;
    return pool.filter((v) => v.searchKey.includes(q));
  }
  function handleVillageInput(query) {
    const clearBtn = document.getElementById("clearVillageBtn");
    const rawVal = (query || "").trim();
    if (clearBtn) {
      clearBtn.style.display = rawVal ? "flex" : "none";
    }
    if (!rawVal) {
      return;
    }
    const currentBlock = document.getElementById("block") ? document.getElementById("block").value : "";
    const currentPanchayat = document.getElementById("panchayat") ? document.getElementById("panchayat").value : "";
    if (currentBlock && currentPanchayat && !rawVal.includes("(")) {
      return;
    }
    const matches = findVillageMatches(rawVal, currentBlock);
    if (matches.length === 0) {
      return;
    }
    const allSameLocation = matches.length > 0 && matches.every((m) => {
      const mCanon = BLOCK_ALIASES[m.block] || m.block;
      const firstCanon = BLOCK_ALIASES[matches[0].block] || matches[0].block;
      const mpCanon = BLOCK_ALIASES[m.panchayat] || m.panchayat;
      const firstPCanon = BLOCK_ALIASES[matches[0].panchayat] || matches[0].panchayat;
      return mCanon === firstCanon && mpCanon === firstPCanon;
    });
    if (matches.length === 1 || rawVal.includes("(") || allSameLocation) {
      const match = matches[0];
      applyLocationAutoFill(match);
    }
  }
  function applyLocationAutoFill(match) {
    const blockSelect = document.getElementById("block");
    const panchayatSelect = document.getElementById("panchayat");
    const villageInput = document.getElementById("village");
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
      blockSelect.classList.add("autofill-highlight");
      setTimeout(() => blockSelect.classList.remove("autofill-highlight"), 1200);
      const found = findBlockInLocations(currentConfig.locations, blockSelect.value || match.block);
      if (found && found.data) {
        const panchayats = Object.keys(found.data);
        const selCanon = BLOCK_ALIASES[blockSelect.value] || blockSelect.value;
        const sortedPanchayats = [...panchayats].sort((a, b) => {
          const aCanon = BLOCK_ALIASES[a] || a;
          const bCanon = BLOCK_ALIASES[b] || b;
          if (aCanon === selCanon && bCanon !== selCanon) return -1;
          if (bCanon === selCanon && aCanon !== selCanon) return 1;
          return a.localeCompare(b, "hi");
        });
        let html = '<option value="">-- ग्राम पंचायत चुनें / Select Gram Panchayat --</option>';
        sortedPanchayats.forEach((p) => {
          html += `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`;
        });
        html += '<option value="__OTHER__">➕ अन्य / Other (मैन्युअल दर्ज करें)</option>';
        if (panchayatSelect) {
          panchayatSelect.innerHTML = html;
          panchayatSelect.disabled = false;
        }
      }
    }
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
      panchayatSelect.classList.add("autofill-highlight");
      setTimeout(() => panchayatSelect.classList.remove("autofill-highlight"), 1200);
    }
    populateAllVillagesDatalist(match.block, match.panchayat);
    if (villageInput) {
      villageInput.value = match.village;
      villageInput.classList.add("autofill-highlight");
      setTimeout(() => villageInput.classList.remove("autofill-highlight"), 1200);
    }
    closeVillageDropdown();
    const clearBtn = document.getElementById("clearVillageBtn");
    if (clearBtn) clearBtn.style.display = "flex";
  }
  function clearVillage(shouldFocus = false) {
    const villageInput = document.getElementById("village");
    const clearBtn = document.getElementById("clearVillageBtn");
    if (villageInput) {
      villageInput.value = "";
      if (shouldFocus) {
        villageInput.focus();
        openVillageDropdown("");
      } else {
        closeVillageDropdown();
      }
    }
    if (clearBtn) clearBtn.style.display = "none";
  }
  function handleBlockChange() {
    const blockSelect = document.getElementById("block");
    const panchayatSelect = document.getElementById("panchayat");
    const villageInput = document.getElementById("village");
    const panchayatCustom = document.getElementById("panchayatCustom");
    const dantewadaPanchayatGroup = document.getElementById("dantewadaPanchayatGroup");
    const otherDistrictGroup = document.getElementById("otherDistrictGroup");
    const dantewadaVillageGrid = document.getElementById("dantewadaVillageGrid");
    const otherDistrictLocationGrid = document.getElementById("otherDistrictLocationGrid");
    const otherDistrictEmailGrid = document.getElementById("otherDistrictEmailGrid");
    const otherDistrictInput = document.getElementById("otherDistrict");
    const otherPanchayatInput = document.getElementById("otherPanchayat");
    const otherVillageInput = document.getElementById("otherVillage");
    const emailInput = document.getElementById("email");
    const otherEmailInput = document.getElementById("otherEmail");
    const selectedBlock = blockSelect ? blockSelect.value : "";
    const isOtherDistrict = selectedBlock === "OTHER_DISTRICT" || selectedBlock === "__OTHER__" || selectedBlock === "अन्य जिला" || selectedBlock.startsWith("अन्य जिला");
    if (isOtherDistrict) {
      if (dantewadaPanchayatGroup) dantewadaPanchayatGroup.style.display = "none";
      if (dantewadaVillageGrid) dantewadaVillageGrid.style.display = "none";
      if (panchayatCustom) {
        panchayatCustom.style.display = "none";
        panchayatCustom.required = false;
      }
      if (panchayatSelect) {
        panchayatSelect.required = false;
        panchayatSelect.disabled = true;
      }
      if (villageInput) {
        villageInput.required = false;
      }
      if (otherDistrictGroup) otherDistrictGroup.style.display = "flex";
      if (otherDistrictLocationGrid) otherDistrictLocationGrid.style.display = "grid";
      if (otherDistrictEmailGrid) otherDistrictEmailGrid.style.display = "grid";
      if (otherDistrictInput) otherDistrictInput.required = true;
      if (otherPanchayatInput) otherPanchayatInput.required = true;
      if (otherVillageInput) otherVillageInput.required = true;
      if (emailInput && otherEmailInput && emailInput.value) {
        otherEmailInput.value = emailInput.value;
      }
      const reasonSelect = document.getElementById("reason");
      if (reasonSelect && !reasonSelect.value) {
        for (const opt of reasonSelect.options) {
          if (opt.value === "Other district case" || opt.value.includes("Other district")) {
            reasonSelect.value = opt.value;
            break;
          }
        }
      }
      closeVillageDropdown();
      if (otherDistrictInput) {
        otherDistrictInput.focus();
      }
      return;
    }
    if (otherDistrictGroup) otherDistrictGroup.style.display = "none";
    if (otherDistrictLocationGrid) otherDistrictLocationGrid.style.display = "none";
    if (otherDistrictEmailGrid) otherDistrictEmailGrid.style.display = "none";
    if (otherDistrictInput) otherDistrictInput.required = false;
    if (otherPanchayatInput) otherPanchayatInput.required = false;
    if (otherVillageInput) otherVillageInput.required = false;
    if (dantewadaPanchayatGroup) dantewadaPanchayatGroup.style.display = "flex";
    if (dantewadaVillageGrid) dantewadaVillageGrid.style.display = "grid";
    if (panchayatSelect) panchayatSelect.required = true;
    if (villageInput) villageInput.required = true;
    if (otherEmailInput && emailInput && otherEmailInput.value) {
      emailInput.value = otherEmailInput.value;
    }
    if (panchayatCustom) {
      panchayatCustom.style.display = "none";
      panchayatCustom.required = false;
    }
    const found = findBlockInLocations(currentConfig.locations, selectedBlock);
    if (!selectedBlock || !found || !found.data) {
      if (panchayatSelect) {
        panchayatSelect.innerHTML = '<option value="">-- पहले ब्लॉक चुनें / Select Block First --</option>';
        panchayatSelect.disabled = true;
        panchayatSelect.value = "";
      }
      populateAllVillagesDatalist(null, null);
      return;
    }
    const panchayats = Object.keys(found.data);
    const selCanon = BLOCK_ALIASES[selectedBlock] || selectedBlock;
    const sortedPanchayats = [...panchayats].sort((a, b) => {
      const aCanon = BLOCK_ALIASES[a] || a;
      const bCanon = BLOCK_ALIASES[b] || b;
      if (aCanon === selCanon && bCanon !== selCanon) return -1;
      if (bCanon === selCanon && aCanon !== selCanon) return 1;
      return a.localeCompare(b, "hi");
    });
    let html = '<option value="">-- ग्राम पंचायत चुनें / Select Gram Panchayat --</option>';
    sortedPanchayats.forEach((p) => {
      html += `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`;
    });
    html += '<option value="__OTHER__">➕ अन्य / Other (मैन्युअल दर्ज करें)</option>';
    if (panchayatSelect) {
      panchayatSelect.innerHTML = html;
      panchayatSelect.disabled = false;
      panchayatSelect.value = "";
    }
    populateAllVillagesDatalist(selectedBlock, null);
    if (villageInput && villageInput.value) {
      const vClean = villageInput.value.split("(")[0].trim();
      const belongs = allVillagesIndex.some((v) => {
        const vCanon = BLOCK_ALIASES[v.block] || v.block.toLowerCase();
        return v.village.toLowerCase() === vClean.toLowerCase() && (vCanon === selCanon || v.block.toLowerCase() === selectedBlock.toLowerCase());
      });
      if (!belongs) {
        villageInput.value = "";
        const clearBtn = document.getElementById("clearVillageBtn");
        if (clearBtn) clearBtn.style.display = "none";
      }
    }
  }
  function handlePanchayatChange() {
    const blockSelect = document.getElementById("block");
    const panchayatSelect = document.getElementById("panchayat");
    const villageInput = document.getElementById("village");
    const panchayatCustom = document.getElementById("panchayatCustom");
    const selectedBlock = blockSelect ? blockSelect.value : "";
    const selectedPanchayat = panchayatSelect ? panchayatSelect.value : "";
    if (selectedPanchayat === "__OTHER__") {
      if (panchayatCustom) {
        panchayatCustom.style.display = "block";
        panchayatCustom.required = true;
        panchayatCustom.focus();
      }
      populateAllVillagesDatalist(null, null);
      return;
    }
    if (panchayatCustom) {
      panchayatCustom.style.display = "none";
      panchayatCustom.required = false;
      panchayatCustom.value = "";
    }
    const found = findBlockInLocations(currentConfig.locations, selectedBlock);
    if (!selectedPanchayat || !found || !found.data) {
      populateAllVillagesDatalist(selectedBlock, null);
      return;
    }
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
    populateAllVillagesDatalist(selectedBlock, selectedPanchayat);
    if (villageInput && villageInput.value) {
      const vClean = villageInput.value.split("(")[0].trim().toLowerCase();
      const belongs = gpVillages.some((v) => v.toLowerCase() === vClean);
      if (!belongs) {
        villageInput.value = "";
        const clearBtn = document.getElementById("clearVillageBtn");
        if (clearBtn) clearBtn.style.display = "none";
      }
    }
  }
  function setDefaultDate() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const dateInput = document.getElementById("date");
    if (dateInput) {
      dateInput.value = today;
    }
  }
  function updateEnrollmentCounter() {
    const enrollmentInput = document.getElementById("enrollment");
    const enrollmentCounter = document.getElementById("enrollmentCounter");
    const enrollmentHint = document.getElementById("enrollmentHint");
    if (!enrollmentInput) return;
    const count = (enrollmentInput.value || "").length;
    const lang = typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "hi";
    if (enrollmentCounter) {
      enrollmentCounter.classList.remove("count-zero", "count-partial", "count-complete");
      if (count === 0) {
        enrollmentCounter.textContent = lang === "en" ? "0 / 28 chars" : "0 / 28 वर्ण";
        enrollmentCounter.classList.add("count-zero");
      } else if (count < 28) {
        enrollmentCounter.textContent = lang === "en" ? `${count} / 28 chars (${28 - count} left)` : `${count} / 28 वर्ण (${28 - count} शेष)`;
        enrollmentCounter.classList.add("count-partial");
      } else {
        enrollmentCounter.textContent = lang === "en" ? "✓ 28 / 28 Complete" : "✓ 28 / 28 वर्ण पूर्ण";
        enrollmentCounter.classList.add("count-complete");
      }
    }
    if (enrollmentHint) {
      enrollmentHint.classList.remove("hint-zero", "hint-partial", "hint-complete");
      if (count === 0) {
        enrollmentHint.innerHTML = lang === "en" ? "Enter 28-character Enrollment Number (letters & numbers, currently <strong>0</strong> entered)" : "28 वर्णों (अंक/अक्षर) का एनरोलमेंट नंबर दर्ज करें (अभी <strong>0</strong> दर्ज हैं)";
        enrollmentHint.classList.add("hint-zero");
      } else if (count < 28) {
        enrollmentHint.innerHTML = lang === "en" ? `Entered characters: <strong>${count}</strong> / 28 (still need <strong>${28 - count}</strong> more)` : `दर्ज वर्ण: <strong>${count}</strong> / 28 (अभी <strong>${28 - count}</strong> वर्ण और भरने हैं)`;
        enrollmentHint.classList.add("hint-partial");
      } else {
        enrollmentHint.innerHTML = lang === "en" ? "✓ <strong>28 characters complete</strong>" : "✓ <strong>28 वर्ण पूरे हो चुके हैं</strong>";
        enrollmentHint.classList.add("hint-complete");
      }
    }
  }
  function updateAadharCounter() {
    const aadharInput = document.getElementById("aadhar");
    const aadharCounter = document.getElementById("aadharCounter");
    const aadharHint = document.getElementById("aadharHint");
    if (!aadharInput) return;
    const count = (aadharInput.value || "").length;
    const lang = typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "hi";
    const checkedRadio = document.querySelector('input[name="aadharMode"]:checked');
    const mode = checkedRadio ? checkedRadio.value : "12";
    if (aadharCounter) {
      aadharCounter.classList.remove("count-zero", "count-partial", "count-complete");
      if (mode === "4") {
        if (count === 0) {
          aadharCounter.textContent = lang === "en" ? "0 / 4 digits" : "0 / 4 अंक";
          aadharCounter.classList.add("count-zero");
        } else if (count < 4) {
          aadharCounter.textContent = lang === "en" ? `${count} / 4 digits (${4 - count} left)` : `${count} / 4 अंक (${4 - count} शेष)`;
          aadharCounter.classList.add("count-partial");
        } else {
          aadharCounter.textContent = lang === "en" ? "✓ 4 / 4 Complete" : "✓ 4 / 4 अंक पूर्ण";
          aadharCounter.classList.add("count-complete");
        }
      } else {
        if (count === 0) {
          aadharCounter.textContent = lang === "en" ? "0 / 12 digits (or 4)" : "0 / 12 अंक (या 4)";
          aadharCounter.classList.add("count-zero");
        } else if (count < 4) {
          aadharCounter.textContent = lang === "en" ? `${count} / 12 digits` : `${count} / 12 अंक`;
          aadharCounter.classList.add("count-partial");
        } else if (count === 4) {
          aadharCounter.textContent = lang === "en" ? "✓ 4 digits valid (or 12)" : "✓ 4 अंक मान्य (या 12)";
          aadharCounter.classList.add("count-complete");
        } else if (count < 12) {
          aadharCounter.textContent = lang === "en" ? `${count} / 12 digits (${12 - count} left)` : `${count} / 12 अंक (${12 - count} शेष)`;
          aadharCounter.classList.add("count-partial");
        } else {
          aadharCounter.textContent = lang === "en" ? "✓ 12 / 12 Complete" : "✓ 12 / 12 अंक पूर्ण";
          aadharCounter.classList.add("count-complete");
        }
      }
    }
    if (aadharHint) {
      aadharHint.classList.remove("hint-zero", "hint-partial", "hint-complete");
      if (mode === "4") {
        if (count === 0) {
          aadharHint.innerHTML = lang === "en" ? "Enter last 4 digits of Aadhaar (currently <strong>0</strong> entered)" : "आधार के अंतिम 4 अंक दर्ज करें (अभी <strong>0</strong> अंक भरे हैं)";
          aadharHint.classList.add("hint-zero");
        } else if (count < 4) {
          aadharHint.innerHTML = lang === "en" ? `Entered digits: <strong>${count}</strong> / 4 (still need <strong>${4 - count}</strong> more digits)` : `दर्ज अंक: <strong>${count}</strong> / 4 (अभी <strong>${4 - count}</strong> अंक और भरने हैं)`;
          aadharHint.classList.add("hint-partial");
        } else {
          aadharHint.innerHTML = lang === "en" ? "✓ <strong>Last 4 digits complete</strong>" : "✓ <strong>अंतिम 4 अंक पूरे हो चुके हैं</strong>";
          aadharHint.classList.add("hint-complete");
        }
      } else {
        if (count === 0) {
          aadharHint.innerHTML = lang === "en" ? "Enter full 12-digit Aadhaar number or last 4 digits (currently <strong>0</strong> entered)" : "12 अंकों का पूरा आधार नंबर या अंतिम 4 अंक दर्ज करें (अभी <strong>0</strong> अंक भरे हैं)";
          aadharHint.classList.add("hint-zero");
        } else if (count < 4) {
          aadharHint.innerHTML = lang === "en" ? `Entered digits: <strong>${count}</strong> (need <strong>${4 - count}</strong> for last-4, or up to 12)` : `दर्ज अंक: <strong>${count}</strong> (अंतिम 4 अंकों हेतु <strong>${4 - count}</strong> और, या पूरे 12 अंक)`;
          aadharHint.classList.add("hint-partial");
        } else if (count === 4) {
          aadharHint.innerHTML = lang === "en" ? "✓ <strong>4 digits (Last 4 digits) valid</strong> (or you may enter up to 12 digits)" : "✓ <strong>4 अंक (अंतिम 4 अंक) मान्य हैं</strong> (आप चाहें तो पूरे 12 अंक भी दर्ज कर सकते हैं)";
          aadharHint.classList.add("hint-complete");
        } else if (count < 12) {
          aadharHint.innerHTML = lang === "en" ? `Entered digits: <strong>${count}</strong> / 12 (still need <strong>${12 - count}</strong> more for full Aadhaar)` : `दर्ज अंक: <strong>${count}</strong> / 12 (पूरे 12 अंकों हेतु <strong>${12 - count}</strong> अंक और भरने हैं)`;
          aadharHint.classList.add("hint-partial");
        } else {
          aadharHint.innerHTML = lang === "en" ? "✓ <strong>Full 12-digit Aadhaar complete</strong>" : "✓ <strong>12 अंकों का पूरा आधार नंबर पूर्ण हो चुका है</strong>";
          aadharHint.classList.add("hint-complete");
        }
      }
    }
  }
  function setAadharMode(mode) {
    const aadharInput = document.getElementById("aadhar");
    const lang = typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "hi";
    const radio = document.querySelector(`input[name="aadharMode"][value="${mode}"]`);
    if (radio && !radio.checked) {
      radio.checked = true;
    }
    if (aadharInput) {
      if (mode === "4") {
        aadharInput.maxLength = 4;
        aadharInput.pattern = "[0-9]{4}";
        aadharInput.placeholder = lang === "en" ? "Enter last 4 digits (e.g. 1234)" : "अंतिम 4 अंक दर्ज करें (उदा. 1234)";
        if (aadharInput.value.length > 4) {
          aadharInput.value = aadharInput.value.slice(-4);
        }
      } else {
        aadharInput.maxLength = 12;
        aadharInput.pattern = "([0-9]{4}|[0-9]{12})";
        aadharInput.placeholder = lang === "en" ? "12-digit Aadhaar number or last 4 digits" : "12 अंकों का आधार नंबर या अंतिम 4 अंक";
      }
      updateAadharCounter();
    }
  }
  var isResettingForm = false;
  function resetGrievanceForm(isFromNativeReset = false) {
    if (isResettingForm) return;
    isResettingForm = true;
    try {
      const form = document.getElementById("grievanceForm");
      if (form && !isFromNativeReset) {
        form.reset();
      }
      const otherDistrictInput = document.getElementById("otherDistrict");
      const otherPanchayatInput = document.getElementById("otherPanchayat");
      const otherVillageInput = document.getElementById("otherVillage");
      const otherEmailInput = document.getElementById("otherEmail");
      if (otherDistrictInput) otherDistrictInput.value = "";
      if (otherPanchayatInput) otherPanchayatInput.value = "";
      if (otherVillageInput) otherVillageInput.value = "";
      if (otherEmailInput) otherEmailInput.value = "";
      const panchayatCustom = document.getElementById("panchayatCustom");
      if (panchayatCustom) {
        panchayatCustom.value = "";
        panchayatCustom.required = false;
        panchayatCustom.style.display = "none";
      }
      clearVillage(false);
      handleBlockChange();
      setDefaultDate();
      updateEnrollmentCounter();
      const aadharMode12Radio = document.querySelector('input[name="aadharMode"][value="12"]');
      if (aadharMode12Radio) {
        aadharMode12Radio.checked = true;
      }
      const aadharInput = document.getElementById("aadhar");
      if (aadharInput) {
        aadharInput.maxLength = 12;
        aadharInput.pattern = "([0-9]{4}|[0-9]{12})";
      }
      updateAadharCounter();
      const firstStatusRadio = document.querySelector('input[name="status"]');
      if (firstStatusRadio) {
        firstStatusRadio.checked = true;
      }
    } finally {
      isResettingForm = false;
    }
  }
  function setupEventListeners() {
    const form = document.getElementById("grievanceForm");
    if (form) {
      form.addEventListener("submit", handleFormSubmit);
      form.addEventListener("reset", () => {
        if (isResettingForm) return;
        setTimeout(() => {
          resetGrievanceForm(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
          const applicantName = document.getElementById("applicantName");
          if (applicantName) {
            applicantName.focus({ preventScroll: true });
          }
        }, 10);
      });
      const submitBtnEl = document.getElementById("submitGrievanceBtn");
      if (submitBtnEl) {
        submitBtnEl.addEventListener("click", () => {
          if (isSubmittingGrievance) return;
          if (form && !form.checkValidity()) {
            form.reportValidity();
            const firstInvalid = form.querySelector(":invalid");
            if (firstInvalid) {
              firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
              firstInvalid.focus();
              firstInvalid.classList.add("input-error-shake");
              setTimeout(() => firstInvalid.classList.remove("input-error-shake"), 800);
            }
          }
        });
      }
    }
    const villageInput = document.getElementById("village");
    const toggleVillageBtn = document.getElementById("toggleVillageDropdownBtn");
    if (villageInput) {
      villageInput.addEventListener("input", (e) => {
        handleVillageInput(e.target.value);
        openVillageDropdown(e.target.value);
      });
      villageInput.addEventListener("change", (e) => {
        handleVillageInput(e.target.value);
      });
      villageInput.addEventListener("focus", () => {
        openVillageDropdown(villageInput.value);
      });
      villageInput.addEventListener("click", () => {
        openVillageDropdown(villageInput.value);
      });
      villageInput.addEventListener("cut", () => {
        setTimeout(() => {
          handleVillageInput(villageInput.value);
          openVillageDropdown("");
        }, 10);
      });
      villageInput.addEventListener("keydown", (e) => {
        const menu = document.getElementById("villageDropdownMenu");
        const isMenuOpen = menu && menu.style.display === "block";
        if (!isMenuOpen) {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            openVillageDropdown("");
            return;
          }
        }
        if (!menu || menu.style.display !== "block") return;
        const items = menu.querySelectorAll(".village-dropdown-item");
        if (items.length === 0) return;
        if (e.key === "ArrowDown") {
          e.preventDefault();
          activeVillageItemIndex = (activeVillageItemIndex + 1) % items.length;
          updateActiveVillageItem(items);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          activeVillageItemIndex = (activeVillageItemIndex - 1 + items.length) % items.length;
          updateActiveVillageItem(items);
        } else if (e.key === "Enter") {
          if (activeVillageItemIndex >= 0 && activeVillageItemIndex < items.length) {
            e.preventDefault();
            const el = items[activeVillageItemIndex];
            selectVillageFromDropdown(el.dataset.village, el.dataset.panchayat, el.dataset.block);
          }
        } else if (e.key === "Escape") {
          closeVillageDropdown();
        }
      });
    }
    if (toggleVillageBtn) {
      toggleVillageBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleVillageDropdown();
      });
    }
    document.addEventListener("click", (e) => {
      const wrap = document.querySelector(".village-input-wrap");
      if (wrap && !wrap.contains(e.target)) {
        closeVillageDropdown();
      }
    });
    const clearVillageBtn = document.getElementById("clearVillageBtn");
    if (clearVillageBtn) {
      clearVillageBtn.addEventListener("click", () => clearVillage(true));
    }
    const blockSelect = document.getElementById("block");
    if (blockSelect) {
      blockSelect.addEventListener("change", handleBlockChange);
    }
    const panchayatSelect = document.getElementById("panchayat");
    if (panchayatSelect) {
      panchayatSelect.addEventListener("change", handlePanchayatChange);
    }
    const normalEmailInput = document.getElementById("email");
    const otherEmailInput = document.getElementById("otherEmail");
    if (normalEmailInput && otherEmailInput) {
      normalEmailInput.addEventListener("input", (e) => {
        otherEmailInput.value = e.target.value;
      });
      otherEmailInput.addEventListener("input", (e) => {
        normalEmailInput.value = e.target.value;
      });
    }
    const refreshBtn = document.getElementById("refreshLocationsBtn");
    if (refreshBtn) {
      refreshBtn.addEventListener("click", async () => {
        refreshBtn.disabled = true;
        const originalText = refreshBtn.innerHTML;
        refreshBtn.innerHTML = "⏳ लोड हो रहा है...";
        try {
          const locs = await fetchLocationsFromSheet();
          if (locs && Object.keys(locs).length > 0) {
            currentConfig.locations = locs;
            currentConfig.blocks = Object.keys(locs).map((b) => ({ value: b, label: b }));
            renderFormOptions(currentConfig);
            alert(`✓ Google Sheet से सफलता पूर्वक ${Object.keys(locs).length} ब्लॉक और उनकी पंचायतें लोड हो गईं!`);
          } else {
            alert('⚠️ Google Sheet की "Locations" शीट में कोई डेटा नहीं मिला या शीट खाली है।');
          }
        } catch (err) {
          alert("⚠️ Google Sheet से लोड नहीं हो सका: " + err.message);
        } finally {
          refreshBtn.disabled = false;
          refreshBtn.innerHTML = originalText;
        }
      });
    }
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      phoneInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
      });
    }
    const aadharInput = document.getElementById("aadhar");
    if (aadharInput) {
      aadharInput.addEventListener("input", (e) => {
        const checkedRadio = document.querySelector('input[name="aadharMode"]:checked');
        const maxLen = checkedRadio && checkedRadio.value === "4" ? 4 : 12;
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, maxLen);
        updateAadharCounter();
      });
      aadharInput.addEventListener("paste", () => {
        setTimeout(() => {
          if (aadharInput) {
            const checkedRadio = document.querySelector('input[name="aadharMode"]:checked');
            const maxLen = checkedRadio && checkedRadio.value === "4" ? 4 : 12;
            aadharInput.value = aadharInput.value.replace(/\D/g, "").slice(0, maxLen);
            updateAadharCounter();
          }
        }, 10);
      });
    }
    const aadharModeRadios = document.querySelectorAll('input[name="aadharMode"]');
    aadharModeRadios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        setAadharMode(e.target.value);
      });
    });
    updateAadharCounter();
    const enrollmentInput = document.getElementById("enrollment");
    if (enrollmentInput) {
      enrollmentInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 28);
        updateEnrollmentCounter();
      });
      enrollmentInput.addEventListener("paste", () => {
        setTimeout(() => {
          if (enrollmentInput) {
            enrollmentInput.value = enrollmentInput.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 28);
            updateEnrollmentCounter();
          }
        }, 10);
      });
    }
    updateEnrollmentCounter();
    const closeModalBtn = document.getElementById("closeModalBtn");
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", closeSubmissionModal);
    }
    const modalViewAllBtn = document.getElementById("modalViewAllBtn");
    if (modalViewAllBtn) {
      modalViewAllBtn.addEventListener("click", () => {
        closeSubmissionModal();
        switchTab(2);
      });
    }
    const modal = document.getElementById("submissionModal");
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeSubmissionModal();
        }
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeSubmissionModal();
        closeStatusEditModal();
      }
    });
    const saveStatusModalBtn = document.getElementById("saveStatusModalBtn");
    if (saveStatusModalBtn) {
      saveStatusModalBtn.addEventListener("click", async () => {
        const id = document.getElementById("editStatusGrievanceId")?.value;
        const rowNumber = document.getElementById("editStatusRowNumber")?.value;
        const newStatus = document.getElementById("editStatusSelect")?.value;
        const remarks = document.getElementById("editStatusRemarks")?.value;
        if (id && newStatus) {
          closeStatusEditModal();
          await changeGrievanceStatus(id, newStatus, remarks, rowNumber);
        }
      });
    }
    const cancelStatusModalBtn = document.getElementById("cancelStatusModalBtn");
    if (cancelStatusModalBtn) {
      cancelStatusModalBtn.addEventListener("click", closeStatusEditModal);
    }
    const statusModal = document.getElementById("statusEditModal");
    if (statusModal) {
      statusModal.addEventListener("click", (e) => {
        if (e.target === statusModal) {
          closeStatusEditModal();
        }
      });
    }
    const grievancesContainer = document.getElementById("grievancesContainer");
    if (grievancesContainer) {
      grievancesContainer.addEventListener("change", (e) => {
        if (e.target.classList.contains("status-select-control")) {
          const id = e.target.getAttribute("data-id");
          const row = e.target.getAttribute("data-row");
          const newStatus = e.target.value;
          if (id && newStatus) {
            changeGrievanceStatus(id, newStatus, null, row);
          }
        }
      });
      grievancesContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".btn-status-edit-modal");
        if (btn) {
          const id = btn.getAttribute("data-id");
          if (id) {
            openStatusEditModal(id);
          }
        }
      });
    }
    const searchInput = document.getElementById("grievanceSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        displayGrievances();
      });
    }
    const statusFilterSelect = document.getElementById("statusFilterSelect");
    if (statusFilterSelect) {
      statusFilterSelect.addEventListener("change", (e) => {
        statusFilterQuery = e.target.value.trim();
        displayGrievances();
      });
    }
    const dateFilterSelect = document.getElementById("dateFilterSelect");
    const startDateFilter = document.getElementById("startDateFilter");
    const endDateFilter = document.getElementById("endDateFilter");
    const clearDateFilterBtn = document.getElementById("clearDateFilterBtn");
    const exportCsvBtn = document.getElementById("exportCsvBtn");
    if (dateFilterSelect) {
      dateFilterSelect.addEventListener("change", (e) => {
        const val = e.target.value;
        datePresetQuery = val;
        const now = /* @__PURE__ */ new Date();
        if (val === "all") {
          startDateQuery = "";
          endDateQuery = "";
          if (startDateFilter) startDateFilter.value = "";
          if (endDateFilter) endDateFilter.value = "";
        } else if (val === "today") {
          const todayStr = formatLocalDateYMD(now);
          startDateQuery = todayStr;
          endDateQuery = todayStr;
          if (startDateFilter) startDateFilter.value = todayStr;
          if (endDateFilter) endDateFilter.value = todayStr;
        } else if (val === "yesterday") {
          const yest = new Date(now);
          yest.setDate(yest.getDate() - 1);
          const yestStr = formatLocalDateYMD(yest);
          startDateQuery = yestStr;
          endDateQuery = yestStr;
          if (startDateFilter) startDateFilter.value = yestStr;
          if (endDateFilter) endDateFilter.value = yestStr;
        } else if (val === "last7") {
          const past7 = new Date(now);
          past7.setDate(past7.getDate() - 6);
          const past7Str = formatLocalDateYMD(past7);
          const todayStr = formatLocalDateYMD(now);
          startDateQuery = past7Str;
          endDateQuery = todayStr;
          if (startDateFilter) startDateFilter.value = past7Str;
          if (endDateFilter) endDateFilter.value = todayStr;
        } else if (val === "last30") {
          const past30 = new Date(now);
          past30.setDate(past30.getDate() - 29);
          const past30Str = formatLocalDateYMD(past30);
          const todayStr = formatLocalDateYMD(now);
          startDateQuery = past30Str;
          endDateQuery = todayStr;
          if (startDateFilter) startDateFilter.value = past30Str;
          if (endDateFilter) endDateFilter.value = todayStr;
        } else if (val === "thisMonth") {
          const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
          const firstDayStr = formatLocalDateYMD(firstDay);
          const todayStr = formatLocalDateYMD(now);
          startDateQuery = firstDayStr;
          endDateQuery = todayStr;
          if (startDateFilter) startDateFilter.value = firstDayStr;
          if (endDateFilter) endDateFilter.value = todayStr;
        } else if (val === "custom") {
          if (startDateFilter) startDateFilter.focus();
        }
        displayGrievances();
      });
    }
    if (startDateFilter) {
      startDateFilter.addEventListener("change", (e) => {
        startDateQuery = e.target.value.trim();
        if (dateFilterSelect) dateFilterSelect.value = "custom";
        datePresetQuery = "custom";
        displayGrievances();
      });
    }
    if (endDateFilter) {
      endDateFilter.addEventListener("change", (e) => {
        endDateQuery = e.target.value.trim();
        if (dateFilterSelect) dateFilterSelect.value = "custom";
        datePresetQuery = "custom";
        displayGrievances();
      });
    }
    if (clearDateFilterBtn) {
      clearDateFilterBtn.addEventListener("click", () => {
        startDateQuery = "";
        endDateQuery = "";
        datePresetQuery = "all";
        if (dateFilterSelect) dateFilterSelect.value = "all";
        if (startDateFilter) startDateFilter.value = "";
        if (endDateFilter) endDateFilter.value = "";
        displayGrievances();
      });
    }
    if (exportCsvBtn) {
      exportCsvBtn.addEventListener("click", () => {
        exportFilteredGrievancesToCSV();
      });
    }
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        switchTab(index);
      });
    });
  }
  function switchTab(tabIndex) {
    const tabs = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-btn");
    tabs.forEach((tab) => tab.classList.remove("active"));
    buttons.forEach((btn) => btn.classList.remove("active"));
    if (tabs[tabIndex]) tabs[tabIndex].classList.add("active");
    if (buttons[tabIndex]) buttons[tabIndex].classList.add("active");
    if (tabIndex === 0) {
      updateDashboard();
    } else if (tabIndex === 2) {
      displayGrievances();
    }
    const mainTabNav = document.getElementById("mainTabNav");
    if (mainTabNav) {
      mainTabNav.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  async function handleFormSubmit(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (isSubmittingGrievance) {
      return;
    }
    const submitBtn = document.getElementById("submitGrievanceBtn") || document.querySelector(".btn-submit");
    const lang = typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "hi";
    const blockSelect = document.getElementById("block");
    const rawBlockVal = (blockSelect ? blockSelect.value : "").trim();
    const isOtherDistrict = rawBlockVal === "OTHER_DISTRICT" || rawBlockVal === "__OTHER__" || rawBlockVal === "अन्य जिला" || rawBlockVal.startsWith("अन्य जिला");
    let blockVal = rawBlockVal;
    let panchayatVal = "";
    let villageVal = "";
    const phoneInput = document.getElementById("phone");
    const phoneVal = (phoneInput ? phoneInput.value : "").trim();
    const aadharInput = document.getElementById("aadhar");
    const aadharVal = (aadharInput ? aadharInput.value : "").trim();
    const enrollmentInput = document.getElementById("enrollment");
    const enrollmentVal = (enrollmentInput ? enrollmentInput.value : "").trim();
    const otherEmailInput = document.getElementById("otherEmail");
    const emailInput = document.getElementById("email");
    const emailVal = (otherEmailInput && otherEmailInput.value || emailInput && emailInput.value || "").trim();
    if (isOtherDistrict) {
      const otherDistrictInput = document.getElementById("otherDistrict");
      const otherPanchayatInput = document.getElementById("otherPanchayat");
      const otherVillageInput = document.getElementById("otherVillage");
      const districtName = (otherDistrictInput ? otherDistrictInput.value : "").trim();
      panchayatVal = (otherPanchayatInput ? otherPanchayatInput.value : "").trim();
      villageVal = (otherVillageInput ? otherVillageInput.value : "").trim();
      if (!districtName) {
        alert(lang === "en" ? "⚠️ Please enter District Name." : "⚠️ कृपया जिला का नाम दर्ज करें।\nPlease enter District name.");
        if (otherDistrictInput) {
          otherDistrictInput.scrollIntoView({ behavior: "smooth", block: "center" });
          otherDistrictInput.focus();
        }
        return;
      }
      if (!panchayatVal) {
        alert(lang === "en" ? "⚠️ Please enter Gram Panchayat Name." : "⚠️ कृपया ग्राम पंचायत का नाम दर्ज करें।\nPlease enter Gram Panchayat name.");
        if (otherPanchayatInput) {
          otherPanchayatInput.scrollIntoView({ behavior: "smooth", block: "center" });
          otherPanchayatInput.focus();
        }
        return;
      }
      if (!villageVal) {
        alert(lang === "en" ? "⚠️ Please enter Village Name." : "⚠️ कृपया ग्राम का नाम दर्ज करें।\nPlease enter Village name.");
        if (otherVillageInput) {
          otherVillageInput.scrollIntoView({ behavior: "smooth", block: "center" });
          otherVillageInput.focus();
        }
        return;
      }
      blockVal = `अन्य जिला (${districtName})`;
    } else {
      if (!blockVal) {
        alert(lang === "en" ? "⚠️ Please select a Block." : "⚠️ कृपया ब्लॉक का चयन करें।\nPlease select a Block.");
        if (blockSelect) {
          blockSelect.scrollIntoView({ behavior: "smooth", block: "center" });
          blockSelect.focus();
        }
        return;
      }
      const panchayatSelect = document.getElementById("panchayat");
      const panchayatCustom = document.getElementById("panchayatCustom");
      panchayatVal = panchayatSelect && panchayatSelect.value === "__OTHER__" ? panchayatCustom ? panchayatCustom.value.trim() : "" : panchayatSelect ? panchayatSelect.value.trim() : "";
      if (!panchayatVal) {
        alert(lang === "en" ? "⚠️ Please select or enter Gram Panchayat." : "⚠️ कृपया ग्राम पंचायत का चयन करें या दर्ज करें।\nPlease select or enter Gram Panchayat.");
        if (panchayatSelect && panchayatSelect.value === "__OTHER__" && panchayatCustom) {
          panchayatCustom.scrollIntoView({ behavior: "smooth", block: "center" });
          panchayatCustom.focus();
        } else if (panchayatSelect) {
          panchayatSelect.scrollIntoView({ behavior: "smooth", block: "center" });
          panchayatSelect.focus();
        }
        return;
      }
      const villageInput = document.getElementById("village");
      villageVal = villageInput ? villageInput.value.trim() : "";
      if (villageVal.includes("(")) {
        villageVal = villageVal.split("(")[0].trim();
      }
      if (!villageVal) {
        alert(lang === "en" ? "⚠️ Please select or enter Village name." : "⚠️ कृपया ग्राम का चयन करें या दर्ज करें।\nPlease select or enter Village name.");
        if (villageInput) {
          villageInput.scrollIntoView({ behavior: "smooth", block: "center" });
          villageInput.focus();
        }
        return;
      }
    }
    if (phoneVal && phoneVal.length !== 10) {
      alert(lang === "en" ? "⚠️ Please enter a valid 10-digit phone number." : "⚠️ कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।\nPlease enter a valid 10-digit phone number.");
      if (phoneInput) {
        phoneInput.scrollIntoView({ behavior: "smooth", block: "center" });
        phoneInput.focus();
      }
      return;
    }
    if (aadharVal) {
      const checkedMode = document.querySelector('input[name="aadharMode"]:checked')?.value || "12";
      if (checkedMode === "4" && aadharVal.length !== 4) {
        alert(lang === "en" ? `⚠️ Last 4 digits of Aadhaar must be exactly 4 digits.
Current length: ${aadharVal.length}` : `⚠️ आधार के अंतिम 4 अंक ठीक 4 अंकों के होने चाहिए।
वर्तमान में ${aadharVal.length} अंक दर्ज हैं।`);
        if (aadharInput) {
          aadharInput.scrollIntoView({ behavior: "smooth", block: "center" });
          aadharInput.focus();
        }
        return;
      }
      if (aadharVal.length !== 4 && aadharVal.length !== 12) {
        alert(lang === "en" ? `⚠️ Aadhaar number must be either 4 digits (last 4 digits) or 12 digits.
Current length: ${aadharVal.length}` : `⚠️ आधार नंबर या तो 4 अंक (अंतिम 4 अंक) या पूरे 12 अंकों का होना चाहिए।
वर्तमान में ${aadharVal.length} अंक दर्ज हैं।`);
        if (aadharInput) {
          aadharInput.scrollIntoView({ behavior: "smooth", block: "center" });
          aadharInput.focus();
        }
        return;
      }
    }
    if (enrollmentVal && enrollmentVal.length !== 28) {
      alert(lang === "en" ? `⚠️ Enrollment number must be exactly 28 characters (letters/digits).
Current length: ${enrollmentVal.length}` : `⚠️ एनरोलमेंट नंबर ठीक 28 वर्णों (अंक/अक्षर) का होना चाहिए।
Enrollment number must be exactly 28 characters.`);
      if (enrollmentInput) {
        enrollmentInput.scrollIntoView({ behavior: "smooth", block: "center" });
        enrollmentInput.focus();
      }
      return;
    }
    if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      alert(lang === "en" ? "⚠️ Please enter a valid email address." : "⚠️ कृपया एक मान्य ईमेल पता दर्ज करें (उदा. example@gmail.com)\nPlease enter a valid email address.");
      const activeEmail = isOtherDistrict ? otherEmailInput : emailInput;
      if (activeEmail) {
        activeEmail.scrollIntoView({ behavior: "smooth", block: "center" });
        activeEmail.focus();
      }
      return;
    }
    isSubmittingGrievance = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.pointerEvents = "none";
      const currentLang = typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "hi";
      const t = TRANSLATIONS[currentLang] || TRANSLATIONS.hi;
      submitBtn.innerHTML = t.btnSubmitting || "⏳ शिकायत दर्ज हो रही है... कृपया प्रतीक्षा करें | Submitting...";
    }
    const selectedStatus = document.querySelector('input[name="status"]:checked');
    const defaultStatus = currentConfig.statuses && currentConfig.statuses[0] ? currentConfig.statuses[0].id : "नई";
    const grievance = {
      id: "GRV-" + Date.now(),
      applicantName: (document.getElementById("applicantName")?.value || "").trim(),
      fatherName: (document.getElementById("fatherName")?.value || "").trim(),
      age: (document.getElementById("age")?.value || "").trim(),
      phone: phoneVal,
      block: blockVal,
      panchayat: panchayatVal,
      village: villageVal,
      email: emailVal,
      aadhar: aadharVal,
      enrollment: enrollmentVal,
      reason: (document.getElementById("reason")?.value || "").trim(),
      description: (document.getElementById("description")?.value || "").trim(),
      status: selectedStatus ? selectedStatus.value : defaultStatus,
      remarks: (document.getElementById("remarks")?.value || "").trim(),
      date: (document.getElementById("date")?.value || "").trim()
    };
    try {
      const result = await submitGrievance(grievance);
      grievances.unshift(grievance);
      showSubmissionFeedback(result.syncedToSheet, result.error);
      openSubmissionModal(grievance, result.syncedToSheet);
      resetGrievanceForm();
      window.scrollTo({ top: 0, behavior: "smooth" });
      updateDashboard();
      displayGrievances();
      setTimeout(() => {
        const successEl = document.getElementById("successMessage");
        if (successEl) {
          successEl.classList.remove("show");
        }
      }, 7e3);
    } catch (err) {
      alert(lang === "en" ? "Error: Problem submitting grievance. Please try again." : "त्रुटि: शिकायत जमा करने में समस्या आई। कृपया पुनः प्रयास करें।");
      console.error(err);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.pointerEvents = "";
        const currentLang = typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "hi";
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.hi;
        submitBtn.innerHTML = t.btnSubmit || "✓ शिकायत दर्ज करें | SUBMIT";
      }
      setTimeout(() => {
        isSubmittingGrievance = false;
      }, 800);
    }
  }
  function openSubmissionModal(grievance, synced) {
    const modal = document.getElementById("submissionModal");
    if (!modal) return;
    const idEl = document.getElementById("modalGrievanceId");
    const nameEl = document.getElementById("modalApplicantName");
    const statusEl = document.getElementById("modalSyncStatus");
    if (idEl) idEl.textContent = grievance.id || "-";
    if (nameEl) nameEl.textContent = grievance.applicantName || "-";
    if (statusEl) {
      const lang = getCurrentLanguage();
      const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;
      if (synced) {
        statusEl.className = "modal-status-badge synced";
        statusEl.textContent = t.modalSynced;
      } else {
        statusEl.className = "modal-status-badge local";
        statusEl.textContent = t.modalOffline;
      }
    }
    modal.classList.add("show");
  }
  function closeSubmissionModal() {
    const modal = document.getElementById("submissionModal");
    if (modal) {
      modal.classList.remove("show");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    const applicantName = document.getElementById("applicantName");
    if (applicantName) {
      setTimeout(() => applicantName.focus({ preventScroll: true }), 150);
    }
  }
  var toastTimer = null;
  function showToast(message, isError = false) {
    const toast = document.getElementById("toastNotification");
    if (!toast) return;
    toast.textContent = message;
    if (isError) {
      toast.classList.add("error");
    } else {
      toast.classList.remove("error");
    }
    toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 4e3);
  }
  function openStatusEditModal(id) {
    const g = grievances.find((item) => String(item.id) === String(id));
    if (!g) return;
    const modal = document.getElementById("statusEditModal");
    const idInput = document.getElementById("editStatusGrievanceId");
    const rowInput = document.getElementById("editStatusRowNumber");
    const displayId = document.getElementById("editStatusDisplayId");
    const displayName = document.getElementById("editStatusDisplayName");
    const displayReason = document.getElementById("editStatusDisplayReason");
    const select = document.getElementById("editStatusSelect");
    const remarks = document.getElementById("editStatusRemarks");
    if (!modal) return;
    if (idInput) idInput.value = g.id || "";
    if (rowInput) rowInput.value = g.rowNumber || "";
    if (displayId) displayId.textContent = g.id || "-";
    if (displayName) displayName.textContent = g.applicantName || "-";
    if (displayReason) displayReason.textContent = g.reason || "-";
    if (remarks) remarks.value = g.remarks || "";
    if (select && Array.isArray(currentConfig.statuses)) {
      let html = "";
      currentConfig.statuses.forEach((s) => {
        const isSelected = String(s.id).trim() === String(g.status || "").trim() ? "selected" : "";
        html += `<option value="${escapeHtml(s.id)}" ${isSelected}>${escapeHtml(s.label || s.id)}</option>`;
      });
      select.innerHTML = html;
    }
    modal.classList.add("show");
  }
  function closeStatusEditModal() {
    const modal = document.getElementById("statusEditModal");
    if (modal) {
      modal.classList.remove("show");
    }
  }
  async function changeGrievanceStatus(id, newStatus, remarks = null, rowNumber = null) {
    const lang = getCurrentLanguage();
    const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;
    const gIndex = grievances.findIndex((g) => String(g.id) === String(id) || rowNumber && String(g.rowNumber) === String(rowNumber));
    if (gIndex === -1) return;
    const target = grievances[gIndex];
    target.status = newStatus;
    if (remarks !== null && remarks !== void 0) {
      target.remarks = remarks;
    }
    updateDashboard();
    displayGrievances();
    showToast(`${t.statusUpdatedSuccess || "✓ स्थिति सफलतापूर्वक अपडेट कर दी गई!"} (${newStatus})`);
    try {
      const result = await updateGrievanceStatus(id, newStatus, remarks, rowNumber || target.rowNumber);
      if (result && !result.syncedToSheet && result.error) {
        console.warn("[Status] Synced locally, but Google Sheet warning:", result.error);
      }
    } catch (err) {
      console.error("[Status] Error syncing to Google Sheet:", err);
      showToast(t.statusUpdateFailed || "⚠️ स्थिति अपडेट करने में त्रुटि हुई", true);
    }
  }
  function showSubmissionFeedback(synced, errorMsg = "") {
    const message = document.getElementById("successMessage");
    if (!message) return;
    if (synced) {
      message.className = "success-message show success-synced";
      message.innerHTML = "✓ आपकी शिकायत सफलतापूर्वक Google Sheet में दर्ज हो गई है। | Grievance successfully synced to Google Sheet.";
    } else {
      message.className = "success-message show warning-unsynced";
      message.innerHTML = `⚠️ <strong>चेतावनी:</strong> शिकायत केवल स्थानीय (Offline) रूप से सुरक्षित हुई है, <strong>Google Sheet में दर्ज नहीं हुई!</strong><br><small style="margin-top:5px;display:block;">कारण / Error: ${escapeHtml(errorMsg || "Apps Script permission error")}</small>`;
    }
  }
  function updateDashboard() {
    const total = grievances.length;
    const statuses = currentConfig.statuses || [];
    const tabCount = document.getElementById("tabGrievanceCount");
    if (tabCount) {
      tabCount.textContent = total;
    }
    renderDashboardCards(total, statuses, grievances);
    drawDynamicStatusChart(statuses, grievances);
    drawDynamicBlockChart();
    drawDynamicReasonChart();
  }
  function renderDashboardCards(total, statuses, data) {
    const grid = document.getElementById("dashboardGrid");
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
      "नई": "🆕",
      "लंबित": "⏳",
      "हल": "✅",
      "अस्वीकृत": "❌"
    };
    statuses.forEach((status) => {
      const count = data.filter((g) => String(g.status).trim() === String(status.id).trim()).length;
      const color = status.color || "#2563eb";
      const icon = statusIcons[status.id] || "📋";
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
  function drawDynamicStatusChart(statuses, data) {
    const chartData = statuses.map((status) => {
      const count = data.filter((g) => String(g.status).trim() === String(status.id).trim()).length;
      return {
        label: status.label || status.id,
        value: count,
        color: status.color || "#2563eb"
      };
    });
    const maxValue = chartData.length > 0 ? Math.max(...chartData.map((d) => d.value), 1) : 1;
    renderChart("barChart", chartData, maxValue);
  }
  function drawDynamicBlockChart() {
    const lang = getCurrentLanguage();
    const blockCounts = {};
    DISTRICT_BLOCKS.forEach((b) => {
      blockCounts[b.id] = 0;
    });
    let otherCount = 0;
    grievances.forEach((g) => {
      if (!g.block) return;
      const norm = normalizeBlock(g.block);
      if (norm) {
        blockCounts[norm.id] = (blockCounts[norm.id] || 0) + 1;
      } else {
        otherCount++;
      }
    });
    const data = DISTRICT_BLOCKS.map((b) => {
      const label = lang === "en" ? b.en : b.hi;
      return {
        label,
        value: blockCounts[b.id] || 0,
        color: "#2563eb"
      };
    });
    if (otherCount > 0) {
      data.push({
        label: lang === "en" ? "Other" : "अन्य",
        value: otherCount,
        color: "#64748b"
      });
    }
    const maxValue = data.length > 0 ? Math.max(...data.map((d) => d.value), 1) : 1;
    renderChart("blockChart", data, maxValue);
  }
  function formatReasonLabel(rawReason, lang = "hi") {
    if (!rawReason) return lang === "en" ? "Unspecified" : "अनिर्दिष्ट";
    const clean = String(rawReason).trim();
    const configured = (currentConfig.reasons || []).find(
      (r) => r.value.toLowerCase() === clean.toLowerCase() || r.label.toLowerCase() === clean.toLowerCase() || r.label.toLowerCase().includes(clean.toLowerCase())
    );
    if (configured && configured.label) {
      if (configured.label.includes("|")) {
        const parts = configured.label.split("|").map((p) => p.trim());
        const en = parts[0];
        const hi = parts[1] || parts[0];
        return lang === "en" ? en : hi;
      }
      return configured.label;
    }
    if (clean.toLowerCase().includes("other") || clean.includes("अन्य")) {
      return lang === "en" ? "Other Reason" : "अन्य कारण";
    }
    return clean;
  }
  function drawDynamicReasonChart() {
    const lang = getCurrentLanguage();
    const reasonData = {};
    grievances.forEach((g) => {
      if (g.reason) {
        const localizedLabel = formatReasonLabel(g.reason, lang);
        reasonData[localizedLabel] = (reasonData[localizedLabel] || 0) + 1;
      }
    });
    const data = Object.entries(reasonData).map(([label, value]) => ({
      label,
      value,
      color: "#8b5cf6"
    })).sort((a, b) => b.value - a.value);
    const totalCount = grievances.length || 1;
    const maxValue = data.length > 0 ? Math.max(...data.map((d) => d.value), 1) : 1;
    renderHorizontalBarChart("reasonChart", data, maxValue, totalCount);
  }
  function renderHorizontalBarChart(containerId, data, maxValue, totalCount) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.className = "horizontal-bar-chart";
    container.innerHTML = "";
    if (data.length === 0 || data.every((d) => d.value === 0)) {
      const lang = getCurrentLanguage();
      const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;
      container.innerHTML = `<div class="chart-empty-state">${t.chartEmptyState || "कोई डेटा उपलब्ध नहीं"}</div>`;
      return;
    }
    data.forEach((item, index) => {
      const widthPct = maxValue > 0 ? Math.round(item.value / maxValue * 100) : 0;
      const totalPct = totalCount > 0 ? (item.value / totalCount * 100).toFixed(1) : 0;
      const row = document.createElement("div");
      row.className = "h-bar-item";
      row.title = `${item.label}: ${item.value} (${totalPct}%)`;
      row.innerHTML = `
            <div class="h-bar-header">
                <span class="h-bar-label">
                    <span class="h-bar-rank">${index + 1}</span>
                    <span>${escapeHtml(item.label)}</span>
                </span>
                <span class="h-bar-count-wrap">
                    <span class="h-bar-count">${item.value}</span>
                    <span class="h-bar-pct">(${totalPct}%)</span>
                </span>
            </div>
            <div class="h-bar-track">
                <div class="h-bar-fill" style="width: ${widthPct}%; background: ${item.color || "#8b5cf6"};"></div>
            </div>
        `;
      container.appendChild(row);
    });
  }
  function renderChart(containerId, data, maxValue) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.className = "bar-chart";
    container.innerHTML = "";
    if (data.length === 0 || data.every((d) => d.value === 0)) {
      const lang = getCurrentLanguage();
      const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;
      container.innerHTML = `<div class="chart-empty-state">${t.chartEmptyState}</div>`;
      return;
    }
    data.forEach((item) => {
      const height = maxValue > 0 ? Math.round(item.value / maxValue * 100) : 0;
      const bar = document.createElement("div");
      bar.className = "bar-wrapper";
      bar.title = `${item.label}: ${item.value}`;
      bar.innerHTML = `
            <div class="bar-value">${item.value}</div>
            <div class="bar-track">
                <div class="bar" style="height: ${Math.max(height, 4)}%; background: ${item.color || "#2563eb"};"></div>
            </div>
            <div class="bar-label" title="${escapeHtml(item.label)}">${escapeHtml(item.label)}</div>
        `;
      container.appendChild(bar);
    });
  }
  function parseDateToYMD(dateVal) {
    if (!dateVal) return null;
    if (typeof dateVal === "string") {
      const trimmed = dateVal.trim();
      if (!trimmed) return null;
      const isoMatch = trimmed.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
      if (isoMatch) {
        return `${isoMatch[1]}-${isoMatch[2].padStart(2, "0")}-${isoMatch[3].padStart(2, "0")}`;
      }
      const dmyMatch = trimmed.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})/);
      if (dmyMatch) {
        return `${dmyMatch[3]}-${dmyMatch[2].padStart(2, "0")}-${dmyMatch[1].padStart(2, "0")}`;
      }
      const parsed = new Date(trimmed);
      if (!isNaN(parsed.getTime())) {
        return formatLocalDateYMD(parsed);
      }
    } else if (dateVal instanceof Date && !isNaN(dateVal.getTime())) {
      return formatLocalDateYMD(dateVal);
    }
    return null;
  }
  function formatLocalDateYMD(d) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  function getFilteredGrievances() {
    return grievances.filter((g) => {
      const normBlock = normalizeBlock(g.block);
      const blockSearchFields = normBlock ? [normBlock.hi, normBlock.en, ...normBlock.aliases] : [g.block];
      const matchesSearch = !searchQuery || [
        g.applicantName,
        g.phone,
        g.aadhar,
        g.enrollment,
        g.reason,
        ...blockSearchFields,
        g.panchayat,
        g.village,
        g.id
      ].some((val) => String(val || "").toLowerCase().includes(searchQuery));
      const matchesStatus = !statusFilterQuery || String(g.status || "").trim() === statusFilterQuery.trim();
      let matchesDate = true;
      if (startDateQuery || endDateQuery) {
        const gDateYMD = parseDateToYMD(g.date);
        if (gDateYMD) {
          if (startDateQuery && gDateYMD < startDateQuery) {
            matchesDate = false;
          }
          if (endDateQuery && gDateYMD > endDateQuery) {
            matchesDate = false;
          }
        } else {
          matchesDate = false;
        }
      }
      return matchesSearch && matchesStatus && matchesDate;
    });
  }
  function exportFilteredGrievancesToCSV() {
    const list = getFilteredGrievances();
    const lang = getCurrentLanguage();
    const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;
    if (!list || list.length === 0) {
      alert(t.noDataToExport || "डाउनलोड के लिए कोई डाटा उपलब्ध नहीं है | No data to export");
      return;
    }
    const headers = [
      "क्र. / S.No.",
      "शिकायत आईडी / ID",
      "तारीख / Date",
      "आवेदक का नाम / Name",
      "पिता/पति का नाम / Father Name",
      "मोबाइल / Phone",
      "आधार / Aadhaar",
      "एनरोलमेंट / EID",
      "ब्लॉक / Block",
      "ग्राम पंचायत / Panchayat",
      "ग्राम / Village",
      "कारण / Reason",
      "स्थिति / Status",
      "विवरण / Description"
    ];
    const escapeCsvField = (field) => {
      const str = String(field === void 0 || field === null ? "" : field);
      return `"${str.replace(/"/g, '""')}"`;
    };
    const csvRows = [headers.map(escapeCsvField).join(",")];
    list.forEach((g, idx) => {
      const row = [
        idx + 1,
        g.id || "",
        g.date ? formatDate(g.date) || g.date : "",
        g.applicantName || "",
        g.fatherName || "",
        g.phone || "",
        g.aadhar || "",
        g.enrollment || "",
        g.block || "",
        g.panchayat || "",
        g.village || "",
        g.reason || "",
        g.status || "",
        g.description || ""
      ];
      csvRows.push(row.map(escapeCsvField).join(","));
    });
    const csvString = "\uFEFF" + csvRows.join("\r\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    let dateRangePart = "all";
    if (startDateQuery && endDateQuery) {
      dateRangePart = `${startDateQuery}_to_${endDateQuery}`;
    } else if (startDateQuery) {
      dateRangePart = `from_${startDateQuery}`;
    } else if (endDateQuery) {
      dateRangePart = `upto_${endDateQuery}`;
    }
    const todayStr = formatLocalDateYMD(/* @__PURE__ */ new Date());
    link.href = url;
    link.setAttribute("download", `Dantewada_Grievances_${dateRangePart}_${todayStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  function displayGrievances() {
    const container = document.getElementById("grievancesContainer");
    const countBadge = document.getElementById("grievanceCountBadge");
    if (!container) return;
    const filtered = getFilteredGrievances();
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
    filtered.forEach((g) => {
      const desc = (g.description || "").substring(0, 60) + (g.description && g.description.length > 60 ? "..." : "");
      const currentStatus = String(g.status || "नई").trim();
      const statusConfig = (currentConfig.statuses || []).find((s) => String(s.id).trim() === currentStatus);
      const statusColor = statusConfig ? statusConfig.color : "#2563eb";
      const normBlock = normalizeBlock(g.block);
      let displayBlock = normBlock ? lang === "en" ? normBlock.en : normBlock.hi : g.block;
      if (!normBlock && g.block && (g.block.includes("अन्य जिला") || g.block.toLowerCase().includes("other district"))) {
        if (lang === "en") {
          displayBlock = String(displayBlock).replace("अन्य जिला", "Other District");
        }
      }
      const locationText = [displayBlock, g.panchayat, g.village].filter(Boolean).join(" • ");
      let statusOptionsHtml = "";
      (currentConfig.statuses || []).forEach((s) => {
        const isSelected = String(s.id).trim() === currentStatus ? "selected" : "";
        statusOptionsHtml += `<option value="${escapeHtml(s.id)}" ${isSelected}>${escapeHtml(s.label || s.id)}</option>`;
      });
      html += `
            <tr>
                <td data-label="आवेदक | Applicant">
                    <span class="table-applicant-name">${escapeHtml(g.applicantName || "अज्ञात / Unknown")}</span>
                    <span class="table-applicant-sub">${escapeHtml(g.phone ? "📞 " + g.phone : g.fatherName ? "पिता: " + g.fatherName : "")}</span>
                </td>
                <td data-label="स्थान | Location">${escapeHtml(locationText || "-")}</td>
                <td data-label="कारण | Reason"><strong>${escapeHtml(g.reason || "-")}</strong></td>
                <td data-label="तारीख | Date">${formatDate(g.date) || "-"}</td>
                <td data-label="स्थिति | Status">
                    <div class="status-badge-wrap">
                        <select class="status-select-control" data-id="${escapeHtml(g.id)}" data-row="${g.rowNumber || ""}" style="background-color: ${statusColor}15; color: ${statusColor}; border-color: ${statusColor}50;" title="स्थिति बदलें | Change Status">
                            ${statusOptionsHtml}
                        </select>
                        <button type="button" class="btn-status-edit-modal" data-id="${escapeHtml(g.id)}" title="विस्तृत स्थिति / टिप्पणी बदलें | Edit Status & Remarks">✏️</button>
                    </div>
                </td>
                <td data-label="विवरण | Description">
                    ${escapeHtml(desc || "-")}
                    ${g.remarks ? `<br><small style="color: var(--slate-500); font-style: italic;">💬 ${escapeHtml(g.remarks)}</small>` : ""}
                </td>
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
    return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  function formatDate(dateStr) {
    if (!dateStr) return "";
    try {
      const ymd = parseDateToYMD(dateStr);
      if (ymd) {
        const parts = ymd.split("-");
        if (parts.length === 3) {
          return `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
      }
      const date = new Date(dateStr);
      const lang = getCurrentLanguage();
      return isNaN(date.getTime()) ? dateStr : date.toLocaleDateString(lang === "en" ? "en-IN" : "hi-IN");
    } catch (e) {
      return dateStr;
    }
  }
  window.switchTab = switchTab;
  window.toggleTheme = toggleTheme;
  window.toggleLanguage = toggleLanguage;
  window.__toggleLanguage = toggleLanguage;
  window.openStatusEditModal = openStatusEditModal;
  window.closeStatusEditModal = closeStatusEditModal;
  window.__onLanguageChanged = function(lang) {
    updateThemeToggleButton(getCurrentTheme());
    renderFormOptions(currentConfig);
    updateDashboard();
    displayGrievances();
    updateEnrollmentCounter();
    updateAadharCounter();
    const checkedMode = document.querySelector('input[name="aadharMode"]:checked')?.value || "12";
    const aadharInput = document.getElementById("aadhar");
    if (aadharInput) {
      if (checkedMode === "4") {
        aadharInput.placeholder = lang === "en" ? "Enter last 4 digits (e.g. 1234)" : "अंतिम 4 अंक दर्ज करें (उदा. 1234)";
      } else {
        aadharInput.placeholder = lang === "en" ? "12-digit Aadhaar number or last 4 digits" : "12 अंकों का आधार नंबर या अंतिम 4 अंक";
      }
    }
  };
  window.addEventListener("DOMContentLoaded", init);
})();
