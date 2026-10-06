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
      lblAadhar: "आधार नंबर (12 अंक)",
      lblEnrollment: "एनरोलमेंट नंबर (28 अंक)",
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
      phAadhar: "12 अंकों का आधार नंबर",
      phEnrollment: "28 अंकों का एनरोलमेंट नंबर",
      phDescription: "अपनी शिकायत का विस्तृत विवरण यहाँ दर्ज करें...",
      phRemarks: "कोई अतिरिक्त जानकारी यहाँ जोड़ें...",
      phSearch: "नाम, फोन, आधार, कारण या ब्लॉक से खोजें...",
      // Select Options
      optSelectBlock: "-- चयन करें / Select Block --",
      optSelectPanchayatFirst: "-- पहले ब्लॉक चुनें --",
      optSelectPanchayat: "-- ग्राम पंचायत चुनें --",
      optSelectVillageFirst: "-- पहले ग्राम पंचायत चुनें --",
      optSelectVillage: "-- ग्राम चुनें --",
      optSelectReason: "-- कारण चुनें / Select Reason --",
      optOther: "➕ अन्य (मैन्युअल दर्ज करें)",
      optAllStatuses: "सभी स्थितियां",
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
      lblAadhar: "Aadhaar Number (12 digits)",
      lblEnrollment: "Enrollment Number (28 digits)",
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
      phAadhar: "12-digit Aadhaar number",
      phEnrollment: "28-digit Enrollment number",
      phDescription: "Enter detailed description of your grievance here...",
      phRemarks: "Add any additional remarks here...",
      phSearch: "Search by Name, Phone, Aadhaar, Reason or Block...",
      // Select Options
      optSelectBlock: "-- Select Block --",
      optSelectPanchayatFirst: "-- Select Block First --",
      optSelectPanchayat: "-- Select Gram Panchayat --",
      optSelectVillageFirst: "-- Select Panchayat First --",
      optSelectVillage: "-- Select Village --",
      optSelectReason: "-- Select Reason --",
      optOther: "➕ Other (Enter Manually)",
      optAllStatuses: "All Statuses",
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
    "दंतेवाडा": {
      "दंतेवाडा": ["दंतेवाडा", "दंतेवाड़ा", "दन्तेवाडा", "दन्तेवाड़ा", "दंतेवाडा (मुख्यालय)", "पुराना बाजार", "मेंढका", "आंवराभाटा"],
      "चितालंका": ["चितालंका", "भोगाम", "भोगम", "चितालूर", "नेरली"],
      "बालपेट": ["बालपेट", "मासापारा", "कोडेनार", "बालूद"],
      "टेकनार": ["टेकनार", "कसेनार", "गदापाल", "कावड़गांव"],
      "मटेनार": ["मटेनार", "पंडेवार", "कटेनार", "दुमाम"],
      "गंजेनार": ["गंजेनार", "मोलसनार", "जारम"]
    },
    "गीदम": {
      "गीदम": ["गीदम", "गीडम", "गीदम (मुख्यालय)", "कौशल नगर", "कारली", "हारम"],
      "जावंगा": ["जावंगा", "कारली", "पाहुरनार", "हारम", "एजुकेशन सिटी"],
      "कारली": ["कारली", "हारम"],
      "बारसूर": ["बारसूर", "मुचनार", "मंगनार", "चंदनार", "चंदेनार"],
      "छिंदनार": ["छिंदनार", "पाहुरनार", "सूरनार"],
      "हारम": ["हारम", "कारली"]
    },
    "कुआकोंडा": {
      "बड़े बचेली": ["बड़े बचेली", "बचेली", "बडेबचेली", "बचेली टाउनशिप", "एनएमडीसी", "बैलाडिला"],
      "किरंदुल": ["किरंदुल", "किरन्दुल", "किरंदुल टाउनशिप", "कोदईपाल"],
      "भांसी": ["भांसी", "धुरली", "कमलूर", "कामालूर"],
      "कमेली": ["कमेली", "बडेकमेली"],
      "नेरली": ["नेरली"],
      "कुआकोंडा": ["कुआकोंडा", "कुआकोण्डा", "कुआकोंड़ा", "कुआकोंडा (मुख्यालय)", "मैलावाड़ा", "मैलावाडा", "गामावाड़ा"],
      "नकुलनार": ["नकुलनार", "बड़ेगुडरा", "बडेगुडरा", "दुगेली"],
      "समलूर": ["समलूर", "जगारगुंडा"],
      "पालनार": ["पालनार", "अरनपुर", "पोंदूमु"],
      "रीता": ["रीता", "पिनेरली", "पिननेरली"],
      "मदाड़ी": ["मदाड़ी", "मदाडी"]
    },
    "कटेकल्याण": {
      "कटेकल्याण": ["कटेकल्याण", "कटेकल्याण (मुख्यालय)", "बड़ेगोड़े", "बडेगोडे"],
      "मारजुम": ["मारजुम", "गादापाल", "गदापाल", "बेंजपाल"],
      "तुमकपाल": ["तुमकपाल", "परचेली", "बड़ागुडरा"],
      "तेतम": ["तेतम", "मुंडा", "झिरका"]
    }
  };
  var LOCATION_TRANSLITERATIONS = {
    // Blocks
    "दंतेवाडा": "Dantewada",
    "दंतेवाड़ा": "Dantewada",
    "दन्तेवाडा": "Dantewada",
    "दन्तेवाड़ा": "Dantewada",
    "गीदम": "Geedam",
    "गीडम": "Geedam",
    "कुआकोंडा": "Kuakonda",
    "कुआकोण्डा": "Kuakonda",
    "कुआकोंड़ा": "Kuakonda",
    "कटेकल्याण": "Katekalyan",
    // Gram Panchayats & Villages
    "बड़े बचेली": "Bade Bacheli",
    "बचेली": "Bacheli",
    "बडेबचेली": "Bade Bacheli",
    "बचेली टाउनशिप": "Bacheli Township",
    "एनएमडीसी": "NMDC",
    "बैलाडिला": "Bailadila",
    "किरंदुल": "Kirandul",
    "किरन्दुल": "Kirandul",
    "किरंदुल टाउनशिप": "Kirandul Township",
    "कोदईपाल": "Kodaipal",
    "भांसी": "Bhansi",
    "धुरली": "Dhurli",
    "कमलूर": "Kamlur",
    "कामालूर": "Kamlur",
    "कमेली": "Kameli",
    "बडेकमेली": "Bade Kameli",
    "चितालंका": "Chitalanka",
    "भोगाम": "Bhogam",
    "भोगम": "Bhogam",
    "चितालूर": "Chitalur",
    "नेरली": "Nerli",
    "बालपेट": "Balpet",
    "मासापारा": "Masapara",
    "कोडेनार": "Kodenar",
    "बालूद": "Balood",
    "टेकनार": "Teknar",
    "कसेनार": "Kasenar",
    "गदापाल": "Gadapal",
    "गादापाल": "Gadapal",
    "कावड़गांव": "Kawadgaon",
    "मटेनार": "Matenar",
    "पंडेवार": "Pandewar",
    "कटेनार": "Katenar",
    "दुमाम": "Dumam",
    "गंजेनार": "Gantenar",
    "मोलसनार": "Molsnar",
    "जारम": "Jaram",
    "दंतेवाडा (मुख्यालय)": "Dantewada HQ",
    "पुराना बाजार": "Purana Bazar",
    "मेंढका": "Mendhka",
    "आंवराभाटा": "Aonrabhata",
    "जावंगा": "Javanga",
    "कारली": "Karli",
    "पाहुरनार": "Pahurnar",
    "हारम": "Haram",
    "एजुकेशन सिटी": "Education City",
    "बारसूर": "Barsur",
    "मुचनार": "Muchnar",
    "मंगनार": "Manganar",
    "चंदनार": "Chandnar",
    "चंदेनार": "Chandnar",
    "छिंदनार": "Chhindnar",
    "सूरनार": "Surnar",
    "गीदम (मुख्यालय)": "Geedam HQ",
    "कौशल नगर": "Kaushal Nagar",
    "कुआकोंडा (मुख्यालय)": "Kuakonda HQ",
    "मैलावाड़ा": "Mailawada",
    "मैलावाडा": "Mailawada",
    "गामावाड़ा": "Gamawada",
    "नकुलनार": "Nakulnar",
    "बड़ेगुडरा": "Badegudra",
    "बडेगुडरा": "Badegudra",
    "दुगेली": "Dugeli",
    "समलूर": "Samlur",
    "पालनार": "Palnar",
    "अरनपुर": "Aranpur",
    "जगारगुंडा": "Jagargunda",
    "पोंदूमु": "Pondumu",
    "रीता": "Rita",
    "पिनेरली": "Pinerli",
    "पिननेरली": "Pinerli",
    "मदाड़ी": "Madadi",
    "मदाडी": "Madadi",
    "कटेकल्याण (मुख्यालय)": "Katekalyan HQ",
    "बड़ेगोड़े": "Badegode",
    "बडेगोडे": "Badegode",
    "मारजुम": "Marjum",
    "बेंजपाल": "Benjpal",
    "तुमकपाल": "Tumakpal",
    "परचेली": "Parcheli",
    "बड़ागुडरा": "Badagudra",
    "तेतम": "Tetam",
    "मुंडा": "Munda",
    "झिरका": "Jhirka"
  };
  var DEV_MAP = {
    "क": "k",
    "ख": "kh",
    "ग": "g",
    "घ": "gh",
    "ङ": "ng",
    "च": "ch",
    "छ": "chh",
    "ज": "j",
    "झ": "jh",
    "ञ": "ny",
    "ट": "t",
    "ठ": "th",
    "ड": "d",
    "ढ": "dh",
    "ण": "n",
    "त": "t",
    "थ": "th",
    "द": "d",
    "ध": "dh",
    "न": "n",
    "प": "p",
    "फ": "ph",
    "ब": "b",
    "भ": "bh",
    "म": "m",
    "य": "y",
    "र": "r",
    "ल": "l",
    "व": "v",
    "श": "sh",
    "ष": "sh",
    "स": "s",
    "ह": "h",
    "ा": "a",
    "ि": "i",
    "ी": "i",
    "ु": "u",
    "ू": "u",
    "े": "e",
    "ै": "ai",
    "ो": "o",
    "ौ": "au",
    "ं": "n",
    "्": "",
    "अ": "a",
    "आ": "aa",
    "इ": "i",
    "ई": "ee",
    "उ": "u",
    "ऊ": "oo",
    "ए": "e",
    "ओ": "o"
  };
  function getEnglishLocationName(name) {
    if (!name || typeof name !== "string") return "";
    const trimmed = name.trim();
    if (LOCATION_TRANSLITERATIONS[trimmed]) {
      return LOCATION_TRANSLITERATIONS[trimmed];
    }
    const clean = trimmed.replace(/\s*\([^)]*\)/g, "").trim();
    if (LOCATION_TRANSLITERATIONS[clean]) {
      return trimmed.includes("मुख्यालय") ? `${LOCATION_TRANSLITERATIONS[clean]} HQ` : LOCATION_TRANSLITERATIONS[clean];
    }
    let out = "";
    for (let i = 0; i < clean.length; i++) {
      const ch = clean[i];
      out += DEV_MAP[ch] !== void 0 ? DEV_MAP[ch] : ch;
    }
    return out ? out.charAt(0).toUpperCase() + out.slice(1) : clean;
  }
  var DEFAULT_CONFIG = {
    portalInfo: {
      title: "🔴 Aadhaar शिकायत पोर्टल",
      subtitle: "दक्षिण बस्तर जिला, दंतेवाडा | Public Grievance Portal, South Bastar Dantewada",
      officeHours: "शिकायत पंजीकरण समय | Grievance Registration Hours: 10:00 AM - 5:00 PM (सोमवार - शुक्रवार | Monday - Friday)",
      copyright: "© 2026 दक्षिण बस्तर दंतेवाडा जिला | South Bastar Dantewada District"
    },
    locations: DEFAULT_LOCATIONS,
    blocks: [
      { value: "दंतेवाडा", label: "दंतेवाडा | Dantewada" },
      { value: "गीदम", label: "गीदम | Geedam" },
      { value: "कुआकोंडा", label: "कुआकोंडा | Kuakonda" },
      { value: "कटेकल्याण", label: "कटेकल्याण | Katekalyan" }
    ],
    reasons: [
      { value: "Rajpatra Process Information", label: "Rajpatra Process Information | राजपत्र प्रक्रिया जानकारी" },
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
          if (!parsed.reasons || parsed.reasons.length === 0 || parsed.reasons.some((r) => r.value === "आवेदन संबंधी")) {
            parsed.reasons = DEFAULT_CONFIG.reasons;
          }
          if (parsed.portalInfo && (!parsed.portalInfo.title || parsed.portalInfo.title.includes("सार्वजनिक") || !parsed.portalInfo.copyright || parsed.portalInfo.copyright.includes("2024"))) {
            parsed.portalInfo = DEFAULT_CONFIG.portalInfo;
          }
          config = { ...DEFAULT_CONFIG, ...parsed };
        } else {
          localStorage.removeItem(LOCAL_CONFIG_KEY);
          config = DEFAULT_CONFIG;
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

  // src/js/script.js
  var currentConfig = DEFAULT_CONFIG;
  var grievances = [];
  var searchQuery = "";
  var statusFilterQuery = "";
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
      const blocksList = config.locations && Object.keys(config.locations).length > 0 ? Object.keys(config.locations).map((b) => ({ value: b, label: b })) : config.blocks || [];
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
        html += `<option value="__OTHER__">${t.optOther}</option>`;
      }
      blockSelect.innerHTML = html;
      if (currentValue && config.locations && config.locations[currentValue]) {
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
  function normalizeDevanagari(str) {
    if (!str) return "";
    return String(str).normalize("NFC").replace(/\u0958/g, "क").replace(/\u0959/g, "ख").replace(/\u095A/g, "ग").replace(/\u095B/g, "ज").replace(/\u095C/g, "ड").replace(/\u095D/g, "ढ").replace(/\u095E/g, "फ").replace(/\u095F/g, "य").replace(/\u093c/g, "").replace(/\u0901/g, "ं").replace(/[\u0919\u091e\u0923\u0928\u092e]\u094d/g, "ं").replace(/[\u200B-\u200D\uFEFF]/g, "").trim().toLowerCase();
  }
  var allVillagesIndex = [];
  buildVillagesIndex(DEFAULT_LOCATIONS);
  function buildVillagesIndex(locations) {
    allVillagesIndex = [];
    if (!locations || typeof locations !== "object") return;
    for (const [block, panchayats] of Object.entries(locations)) {
      if (!block || block === "__OTHER__" || !panchayats || typeof panchayats !== "object") continue;
      for (const [panchayat, villages] of Object.entries(panchayats)) {
        if (!panchayat || panchayat === "__OTHER__" || !Array.isArray(villages)) continue;
        for (const village of villages) {
          if (!village || village === "__OTHER__") continue;
          const vTrim = village.trim();
          const pTrim = panchayat.trim();
          const bTrim = block.trim();
          const vClean = vTrim.replace(/\s*\([^)]*\)/g, "").trim();
          const vEn = getEnglishLocationName(vTrim);
          const vCleanEn = getEnglishLocationName(vClean);
          const pEn = getEnglishLocationName(pTrim);
          const bEn = getEnglishLocationName(bTrim);
          const vDevaNorm = normalizeDevanagari(vClean);
          const pDevaNorm = normalizeDevanagari(pTrim);
          const bDevaNorm = normalizeDevanagari(bTrim);
          const vCompact = vDevaNorm.replace(/[\s\-_.,/()]/g, "");
          const pCompact = pDevaNorm.replace(/[\s\-_.,/()]/g, "");
          const bCompact = bDevaNorm.replace(/[\s\-_.,/()]/g, "");
          const displayLabel = `${vTrim} / ${vEn} (पंचायत: ${pTrim}, ब्लॉक: ${bTrim})`;
          allVillagesIndex.push({
            village: vTrim,
            villageClean: vClean,
            villageDevaNorm: vDevaNorm,
            villageCompact: vCompact,
            villageEn: vEn,
            villageCleanEn: vCleanEn,
            panchayat: pTrim,
            panchayatDevaNorm: pDevaNorm,
            panchayatCompact: pCompact,
            panchayatEn: pEn,
            block: bTrim,
            blockDevaNorm: bDevaNorm,
            blockCompact: bCompact,
            blockEn: bEn,
            displayLabel,
            searchTokens: [
              vTrim.toLowerCase(),
              vClean.toLowerCase(),
              vDevaNorm,
              vCompact,
              vEn.toLowerCase(),
              vCleanEn.toLowerCase(),
              pTrim.toLowerCase(),
              pDevaNorm,
              pCompact,
              pEn.toLowerCase(),
              bTrim.toLowerCase(),
              bDevaNorm,
              bCompact,
              bEn.toLowerCase()
            ]
          });
        }
      }
    }
  }
  function populateAllVillagesDatalist(filterBlock = null, filterPanchayat = null) {
    const datalist = document.getElementById("allVillagesDatalist");
    if (!datalist) return;
    if (allVillagesIndex.length === 0) {
      datalist.innerHTML = "";
      return;
    }
    let items = allVillagesIndex;
    if (filterBlock && filterBlock !== "__OTHER__") {
      items = items.filter((item) => item.block.toLowerCase() === filterBlock.toLowerCase());
    }
    if (filterPanchayat && filterPanchayat !== "__OTHER__") {
      items = items.filter((item) => item.panchayat.toLowerCase() === filterPanchayat.toLowerCase());
    }
    const sorted = [...items].sort((a, b) => a.village.localeCompare(b.village, "hi"));
    let html = "";
    if (filterPanchayat && filterPanchayat !== "__OTHER__") {
      sorted.forEach((item) => {
        html += `<option value="${escapeHtml(item.village)}">${escapeHtml(item.villageEn)}</option>`;
      });
    } else if (filterBlock && filterBlock !== "__OTHER__") {
      sorted.forEach((item) => {
        const val = `${item.village} / ${item.villageEn} (पंचायत: ${item.panchayat})`;
        html += `<option value="${escapeHtml(val)}">${escapeHtml(item.village)} (${escapeHtml(item.panchayat)})</option>`;
      });
    } else {
      sorted.forEach((item) => {
        html += `<option value="${escapeHtml(item.displayLabel)}">${escapeHtml(item.village)} / ${escapeHtml(item.villageEn)}</option>`;
      });
    }
    datalist.innerHTML = html;
  }
  function normalizeKey(str) {
    return (str || "").toLowerCase().replace(/uwa/g, "ua").replace(/uva/g, "ua").replace(/[\s\-_.,/()]/g, "").replace(/ee/g, "i").replace(/oo/g, "u").replace(/w/g, "v").replace(/sh/g, "s").replace(/aa/g, "a");
  }
  function compactLocationKey(str) {
    return normalizeDevanagari(str).replace(/[\s\-_.,/()]/g, "");
  }
  function isSameLocationName(value, target, targetEnglish = "") {
    if (!value || !target) return false;
    const valueText = String(value).trim();
    const targetText = String(target).trim();
    const valueEnglish = getEnglishLocationName(valueText);
    const targetEn = targetEnglish || getEnglishLocationName(targetText);
    return valueText === targetText || normalizeDevanagari(valueText) === normalizeDevanagari(targetText) || compactLocationKey(valueText) === compactLocationKey(targetText) || normalizeKey(valueText) === normalizeKey(targetText) || targetEn && normalizeKey(valueText) === normalizeKey(targetEn) || valueEnglish && normalizeKey(valueEnglish) === normalizeKey(targetText) || valueEnglish && targetEn && normalizeKey(valueEnglish) === normalizeKey(targetEn);
  }
  function findLocationKey(source, target, targetEnglish = "") {
    if (!source || !target) return "";
    return Object.keys(source).find((key) => isSameLocationName(key, target, targetEnglish)) || "";
  }
  function findSelectOption(selectEl, target, targetEnglish = "") {
    if (!selectEl || !target) return null;
    return Array.from(selectEl.options).find(
      (option) => isSameLocationName(option.value, target, targetEnglish) || isSameLocationName(option.textContent, target, targetEnglish)
    ) || null;
  }
  function findVillageMatches(query) {
    const raw = (query || "").trim();
    if (!raw) return [];
    const q = raw.toLowerCase();
    if (raw.includes("(")) {
      const exactDisplay = allVillagesIndex.find((v) => v.displayLabel.toLowerCase() === q);
      if (exactDisplay) return [exactDisplay];
      let pHint = "";
      let bHint = "";
      const pMatch = raw.match(/पंचायत[:\s]+([^,)]+)/i);
      if (pMatch) pHint = pMatch[1].trim().toLowerCase();
      const bMatch = raw.match(/ब्लॉक[:\s]+([^,)]+)/i);
      if (bMatch) bHint = bMatch[1].trim().toLowerCase();
      const vPart = raw.split("(")[0].trim().toLowerCase();
      const vTokens = vPart.split("/").map((s) => s.trim()).filter(Boolean);
      const matched = allVillagesIndex.find((v) => {
        const matchesVillage = vTokens.some(
          (tok) => v.village.toLowerCase() === tok || v.villageClean.toLowerCase() === tok || v.villageEn.toLowerCase() === tok || v.villageCleanEn.toLowerCase() === tok
        );
        const matchesPanchayat = pHint ? v.panchayat.toLowerCase() === pHint || v.panchayatEn.toLowerCase() === pHint : true;
        const matchesBlock = bHint ? v.block.toLowerCase() === bHint || v.blockEn.toLowerCase() === bHint : true;
        return matchesVillage && matchesPanchayat && matchesBlock;
      });
      if (matched) return [matched];
    }
    const cleanQ = q.replace(/\s*\([^)]*\)/g, "").split("/")[0].trim();
    if (!cleanQ) return [];
    const devaQ = normalizeDevanagari(cleanQ);
    const devaQCompact = devaQ.replace(/[\s\-_.,/()]/g, "");
    const exactVillage = allVillagesIndex.filter(
      (v) => v.village.toLowerCase() === cleanQ || v.villageClean.toLowerCase() === cleanQ || v.villageDevaNorm === devaQ || v.villageCompact === devaQCompact || v.villageEn.toLowerCase() === cleanQ || v.villageCleanEn.toLowerCase() === cleanQ
    );
    if (exactVillage.length > 0) return exactVillage;
    const normQ = normalizeKey(cleanQ);
    const normMatches = allVillagesIndex.filter(
      (v) => normalizeKey(v.villageClean) === normQ || normalizeKey(v.villageCleanEn) === normQ || normalizeKey(v.village) === normQ || normalizeKey(v.villageEn) === normQ
    );
    if (normMatches.length > 0) return normMatches;
    const prefixMatches = allVillagesIndex.filter(
      (v) => v.village.toLowerCase().startsWith(cleanQ) || v.villageClean.toLowerCase().startsWith(cleanQ) || devaQCompact.length >= 2 && v.villageCompact.startsWith(devaQCompact) || devaQ.length >= 2 && v.villageDevaNorm.startsWith(devaQ) || v.villageEn.toLowerCase().startsWith(cleanQ) || v.villageCleanEn.toLowerCase().startsWith(cleanQ) || normQ.length >= 3 && (normalizeKey(v.villageCleanEn).startsWith(normQ) || normalizeKey(v.villageClean).startsWith(normQ))
    );
    if (prefixMatches.length > 0) return prefixMatches;
    const containsMatches = allVillagesIndex.filter(
      (v) => v.village.toLowerCase().includes(cleanQ) || v.villageClean.toLowerCase().includes(cleanQ) || devaQCompact.length >= 2 && v.villageCompact.includes(devaQCompact) || devaQ.length >= 2 && v.villageDevaNorm.includes(devaQ) || v.villageEn.toLowerCase().includes(cleanQ) || v.villageCleanEn.toLowerCase().includes(cleanQ) || v.searchTokens.some((token) => token.includes(cleanQ)) || normQ.length >= 3 && v.searchTokens.some((token) => normalizeKey(token).includes(normQ))
    );
    return containsMatches;
  }
  function handleVillageInput(query, isBlur = false) {
    const clearBtn = document.getElementById("clearVillageBtn");
    const rawVal = (query || "").trim();
    if (clearBtn) {
      clearBtn.style.display = rawVal ? "flex" : "none";
    }
    if (!rawVal) {
      return;
    }
    const isDatalistSelection = rawVal.includes("(") || allVillagesIndex.some((v) => v.displayLabel === rawVal);
    if (!isDatalistSelection && rawVal.length < 2) {
      return;
    }
    const matches = findVillageMatches(rawVal);
    if (matches.length === 0) {
      return;
    }
    let targetMatch = matches[0];
    const cleanLower = rawVal.toLowerCase().replace(/\s*\([^)]*\)/g, "").split("/")[0].trim();
    const cleanDeva = normalizeDevanagari(cleanLower);
    const cleanDevaCompact = cleanDeva.replace(/[\s\-_.,/()]/g, "");
    const exactMatch = matches.find(
      (m) => m.village.toLowerCase() === cleanLower || m.villageClean.toLowerCase() === cleanLower || m.villageDevaNorm === cleanDeva || m.villageCompact === cleanDevaCompact || m.villageEn.toLowerCase() === cleanLower || m.villageCleanEn.toLowerCase() === cleanLower
    );
    if (exactMatch) {
      const sameNameGp = matches.find(
        (m) => m.panchayat.toLowerCase() === cleanLower || m.panchayatDevaNorm === cleanDeva || m.panchayatCompact === cleanDevaCompact || m.panchayatEn.toLowerCase() === cleanLower
      );
      targetMatch = sameNameGp || exactMatch;
    }
    applyLocationAutoFill(targetMatch, isDatalistSelection || isBlur);
  }
  function applyLocationAutoFill(match, shouldCleanInput = false) {
    if (!match) return;
    const blockSelect = document.getElementById("block");
    const panchayatSelect = document.getElementById("panchayat");
    const villageInput = document.getElementById("village");
    const locSource = currentConfig && currentConfig.locations && Object.keys(currentConfig.locations).length > 0 ? currentConfig.locations : DEFAULT_LOCATIONS;
    const locBlockKey = findLocationKey(locSource, match.block, match.blockEn) || match.block;
    if (blockSelect && match.block) {
      let blockOption = findSelectOption(blockSelect, locBlockKey, match.blockEn) || findSelectOption(blockSelect, match.block, match.blockEn);
      if (!blockOption) {
        const blockKeys = Object.keys(locSource);
        let bHtml = '<option value="">-- चयन करें / Select Block --</option>';
        blockKeys.forEach((b) => {
          const bEn = getEnglishLocationName(b);
          bHtml += `<option value="${escapeHtml(b)}">${escapeHtml(b)}${bEn ? ` | ${escapeHtml(bEn)}` : ""}</option>`;
        });
        bHtml += '<option value="__OTHER__">➕ अन्य / Other</option>';
        blockSelect.innerHTML = bHtml;
        blockOption = findSelectOption(blockSelect, locBlockKey, match.blockEn) || findSelectOption(blockSelect, match.block, match.blockEn);
      }
      if (blockOption) {
        blockSelect.value = blockOption.value;
      } else {
        blockSelect.value = locBlockKey || match.block;
      }
      blockSelect.classList.add("autofill-highlight");
      setTimeout(() => blockSelect.classList.remove("autofill-highlight"), 1200);
      if (locSource[locBlockKey]) {
        const panchayats = Object.keys(locSource[locBlockKey]);
        let html = '<option value="">-- ग्राम पंचायत चुनें / Select Gram Panchayat --</option>';
        panchayats.forEach((p) => {
          const pEn = getEnglishLocationName(p);
          const isMatch = isSameLocationName(p, match.panchayat, match.panchayatEn);
          const isSelected = isMatch ? "selected" : "";
          html += `<option value="${escapeHtml(p)}" ${isSelected}>${escapeHtml(p)}${pEn ? ` | ${escapeHtml(pEn)}` : ""}</option>`;
        });
        html += '<option value="__OTHER__">➕ अन्य / Other (मैन्युअल दर्ज करें)</option>';
        if (panchayatSelect) {
          panchayatSelect.innerHTML = html;
          panchayatSelect.disabled = false;
        }
      }
    }
    if (panchayatSelect && match.panchayat) {
      panchayatSelect.disabled = false;
      const gpOption = findSelectOption(panchayatSelect, match.panchayat, match.panchayatEn);
      if (gpOption) {
        panchayatSelect.value = gpOption.value;
      } else {
        panchayatSelect.value = match.panchayat;
      }
      panchayatSelect.classList.add("autofill-highlight");
      setTimeout(() => panchayatSelect.classList.remove("autofill-highlight"), 1200);
    }
    if (shouldCleanInput) {
      populateAllVillagesDatalist(locBlockKey || match.block, match.panchayat);
      if (villageInput) {
        villageInput.value = match.village;
        villageInput.classList.add("autofill-highlight");
        setTimeout(() => villageInput.classList.remove("autofill-highlight"), 1200);
      }
    }
  }
  function clearVillage(shouldFocus = true) {
    const villageInput = document.getElementById("village");
    const clearBtn = document.getElementById("clearVillageBtn");
    if (villageInput) {
      villageInput.value = "";
      if (shouldFocus) villageInput.focus();
    }
    if (clearBtn) clearBtn.style.display = "none";
    const currentBlock = document.getElementById("block") ? document.getElementById("block").value : null;
    const currentPanchayat = document.getElementById("panchayat") ? document.getElementById("panchayat").value : null;
    populateAllVillagesDatalist(currentBlock, currentPanchayat);
  }
  function handleBlockChange() {
    const blockSelect = document.getElementById("block");
    const panchayatSelect = document.getElementById("panchayat");
    const villageInput = document.getElementById("village");
    const panchayatCustom = document.getElementById("panchayatCustom");
    const selectedBlock = blockSelect ? blockSelect.value : "";
    if (panchayatCustom) panchayatCustom.style.display = "none";
    if (!selectedBlock || !currentConfig.locations || !currentConfig.locations[selectedBlock]) {
      if (panchayatSelect) {
        panchayatSelect.innerHTML = '<option value="">-- पहले ब्लॉक चुनें / Select Block First --</option>';
        panchayatSelect.disabled = true;
        panchayatSelect.value = "";
      }
      populateAllVillagesDatalist(null, null);
      return;
    }
    const panchayats = Object.keys(currentConfig.locations[selectedBlock]);
    let html = '<option value="">-- ग्राम पंचायत चुनें / Select Gram Panchayat --</option>';
    panchayats.forEach((p) => {
      const pEn = getEnglishLocationName(p);
      html += `<option value="${escapeHtml(p)}">${escapeHtml(p)}${pEn ? ` | ${escapeHtml(pEn)}` : ""}</option>`;
    });
    html += '<option value="__OTHER__">➕ अन्य / Other (मैन्युअल दर्ज करें)</option>';
    if (panchayatSelect) {
      panchayatSelect.innerHTML = html;
      panchayatSelect.disabled = false;
      panchayatSelect.value = "";
    }
    populateAllVillagesDatalist(selectedBlock, null);
    if (villageInput && villageInput.value) {
      const vClean = villageInput.value.split("(")[0].trim().toLowerCase();
      const vDeva = normalizeDevanagari(vClean);
      const bDeva = normalizeDevanagari(selectedBlock);
      const belongs = allVillagesIndex.some(
        (v) => (v.village.toLowerCase() === vClean || v.villageClean.toLowerCase() === vClean || v.villageDevaNorm === vDeva || v.villageEn.toLowerCase() === vClean || v.villageCleanEn.toLowerCase() === vClean) && (v.block.toLowerCase() === selectedBlock.toLowerCase() || v.blockDevaNorm === bDeva)
      );
      if (!belongs) {
        villageInput.value = "";
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
    if (!selectedPanchayat || !currentConfig.locations || !currentConfig.locations[selectedBlock] || !currentConfig.locations[selectedBlock][selectedPanchayat]) {
      populateAllVillagesDatalist(selectedBlock, null);
      return;
    }
    populateAllVillagesDatalist(selectedBlock, selectedPanchayat);
    if (villageInput && villageInput.value) {
      const vClean = villageInput.value.split("(")[0].trim().toLowerCase();
      const villagesInGP = currentConfig.locations[selectedBlock][selectedPanchayat] || [];
      const belongs = villagesInGP.some((v) => {
        const vEn = getEnglishLocationName(v);
        return v.toLowerCase() === vClean || vEn && vEn.toLowerCase() === vClean;
      });
      if (!belongs) {
        villageInput.value = "";
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
        enrollmentCounter.textContent = lang === "en" ? "0 / 28 digits" : "0 / 28 अंक";
        enrollmentCounter.classList.add("count-zero");
      } else if (count < 28) {
        enrollmentCounter.textContent = lang === "en" ? `${count} / 28 digits (${28 - count} left)` : `${count} / 28 अंक (${28 - count} शेष)`;
        enrollmentCounter.classList.add("count-partial");
      } else {
        enrollmentCounter.textContent = lang === "en" ? "✓ 28 / 28 Complete" : "✓ 28 / 28 अंक पूर्ण";
        enrollmentCounter.classList.add("count-complete");
      }
    }
    if (enrollmentHint) {
      enrollmentHint.classList.remove("hint-zero", "hint-partial", "hint-complete");
      if (count === 0) {
        enrollmentHint.innerHTML = lang === "en" ? "Enter 28-digit Enrollment Number (currently <strong>0</strong> digits entered)" : "28 अंकों का एनरोलमेंट नंबर दर्ज करें (अभी <strong>0</strong> अंक भरे हैं)";
        enrollmentHint.classList.add("hint-zero");
      } else if (count < 28) {
        enrollmentHint.innerHTML = lang === "en" ? `Entered digits: <strong>${count}</strong> / 28 (still need <strong>${28 - count}</strong> more digits)` : `दर्ज किए गए अंक: <strong>${count}</strong> / 28 (अभी <strong>${28 - count}</strong> अंक और भरने हैं)`;
        enrollmentHint.classList.add("hint-partial");
      } else {
        enrollmentHint.innerHTML = lang === "en" ? "✓ <strong>28 digits complete</strong>" : "✓ <strong>28 अंक पूरे हो चुके हैं</strong>";
        enrollmentHint.classList.add("hint-complete");
      }
    }
  }
  function resetGrievanceForm() {
    const form = document.getElementById("grievanceForm");
    if (form) {
      form.reset();
    }
    clearVillage(false);
    handleBlockChange();
    setDefaultDate();
    updateEnrollmentCounter();
    const firstStatusRadio = document.querySelector('input[name="status"]');
    if (firstStatusRadio) {
      firstStatusRadio.checked = true;
    }
  }
  function setupEventListeners() {
    const form = document.getElementById("grievanceForm");
    if (form) {
      form.addEventListener("submit", handleFormSubmit);
      form.addEventListener("reset", () => {
        setTimeout(() => {
          resetGrievanceForm();
          window.scrollTo({ top: 0, behavior: "smooth" });
          const applicantName = document.getElementById("applicantName");
          if (applicantName) applicantName.focus();
        }, 20);
      });
    }
    const villageInput = document.getElementById("village");
    if (villageInput) {
      villageInput.addEventListener("input", (e) => {
        handleVillageInput(e.target.value, false);
      });
      villageInput.addEventListener("change", (e) => {
        handleVillageInput(e.target.value, true);
      });
      villageInput.addEventListener("blur", (e) => {
        handleVillageInput(e.target.value, true);
      });
      villageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleVillageInput(e.target.value, true);
          villageInput.blur();
        }
      });
    }
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
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 12);
      });
    }
    const enrollmentInput = document.getElementById("enrollment");
    if (enrollmentInput) {
      enrollmentInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 28);
        updateEnrollmentCounter();
      });
      enrollmentInput.addEventListener("paste", () => {
        setTimeout(updateEnrollmentCounter, 10);
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
      }
    });
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
    e.preventDefault();
    const submitBtn = document.querySelector(".btn-submit");
    const originalBtnText = submitBtn ? submitBtn.innerHTML : "✓ जमा करें | SUBMIT";
    const blockVal = (document.getElementById("block").value || "").trim();
    const panchayatSelect = document.getElementById("panchayat");
    const panchayatCustom = document.getElementById("panchayatCustom");
    const panchayatVal = panchayatSelect && panchayatSelect.value === "__OTHER__" ? panchayatCustom ? panchayatCustom.value.trim() : "" : panchayatSelect ? panchayatSelect.value.trim() : "";
    const villageInput = document.getElementById("village");
    let villageVal = villageInput ? villageInput.value.trim() : "";
    if (villageVal.includes("(")) {
      villageVal = villageVal.split("(")[0].trim();
    }
    if (villageVal.includes("/")) {
      villageVal = villageVal.split("/")[0].trim();
    }
    const phoneVal = (document.getElementById("phone").value || "").trim();
    const aadharVal = (document.getElementById("aadhar").value || "").trim();
    const enrollmentVal = (document.getElementById("enrollment").value || "").trim();
    const emailVal = (document.getElementById("email").value || "").trim();
    if (!blockVal) {
      alert("⚠️ कृपया ब्लॉक का चयन करें।\nPlease select a Block.");
      document.getElementById("block").focus();
      return;
    }
    if (!panchayatVal) {
      alert("⚠️ कृपया ग्राम पंचायत का चयन करें या दर्ज करें।\nPlease select or enter Gram Panchayat.");
      if (panchayatSelect && panchayatSelect.value === "__OTHER__" && panchayatCustom) {
        panchayatCustom.focus();
      } else if (panchayatSelect) {
        panchayatSelect.focus();
      }
      return;
    }
    if (!villageVal) {
      alert("⚠️ कृपया ग्राम का चयन करें या दर्ज करें।\nPlease select or enter Village name.");
      if (villageInput) {
        villageInput.focus();
      }
      return;
    }
    if (phoneVal && phoneVal.length !== 10) {
      alert("⚠️ कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।\nPlease enter a valid 10-digit phone number.");
      document.getElementById("phone").focus();
      return;
    }
    if (aadharVal && aadharVal.length !== 12) {
      alert("⚠️ आधार नंबर ठीक 12 अंकों का होना चाहिए।\nAadhaar number must be exactly 12 digits.");
      document.getElementById("aadhar").focus();
      return;
    }
    if (enrollmentVal && enrollmentVal.length !== 28) {
      alert("⚠️ एनरोलमेंट नंबर ठीक 28 अंकों का होना चाहिए।\nEnrollment number must be exactly 28 digits.");
      document.getElementById("enrollment").focus();
      return;
    }
    if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      alert("⚠️ कृपया एक मान्य ईमेल पता दर्ज करें (उदा. example@gmail.com)\nPlease enter a valid email address.");
      document.getElementById("email").focus();
      return;
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      const currentLang = typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "hi";
      const t = TRANSLATIONS[currentLang] || TRANSLATIONS.hi;
      submitBtn.innerHTML = t.btnSubmitting || "⏳ शिकायत दर्ज हो रही है... | Submitting...";
    }
    const selectedStatus = document.querySelector('input[name="status"]:checked');
    const defaultStatus = currentConfig.statuses && currentConfig.statuses[0] ? currentConfig.statuses[0].id : "नई";
    const grievance = {
      id: "GRV-" + Date.now(),
      applicantName: document.getElementById("applicantName").value,
      fatherName: document.getElementById("fatherName").value,
      age: document.getElementById("age").value,
      phone: phoneVal,
      block: blockVal,
      panchayat: panchayatVal,
      village: villageVal,
      email: emailVal,
      aadhar: aadharVal,
      enrollment: enrollmentVal,
      reason: document.getElementById("reason").value,
      description: document.getElementById("description").value,
      status: selectedStatus ? selectedStatus.value : defaultStatus,
      remarks: document.getElementById("remarks").value,
      date: document.getElementById("date").value
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
      alert("त्रुटि: शिकायत जमा करने में समस्या आई। कृपया पुनः प्रयास करें।");
      console.error(err);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        const currentLang = typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "hi";
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.hi;
        submitBtn.innerHTML = t.btnSubmit || "✓ शिकायत दर्ज करें | SUBMIT";
      }
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
      setTimeout(() => applicantName.focus(), 150);
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
    const blockData = {};
    grievances.forEach((g) => {
      if (g.block) {
        blockData[g.block] = (blockData[g.block] || 0) + 1;
      }
    });
    const data = Object.entries(blockData).map(([label, value]) => ({
      label,
      value,
      color: "#2563eb"
    }));
    const maxValue = data.length > 0 ? Math.max(...data.map((d) => d.value), 1) : 1;
    renderChart("blockChart", data, maxValue);
  }
  function drawDynamicReasonChart() {
    const reasonData = {};
    grievances.forEach((g) => {
      if (g.reason) {
        reasonData[g.reason] = (reasonData[g.reason] || 0) + 1;
      }
    });
    const data = Object.entries(reasonData).map(([label, value]) => ({
      label,
      value,
      color: "#7c3aed"
    }));
    const maxValue = data.length > 0 ? Math.max(...data.map((d) => d.value), 1) : 1;
    renderChart("reasonChart", data, maxValue);
  }
  function renderChart(containerId, data, maxValue) {
    const container = document.getElementById(containerId);
    if (!container) return;
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
  function displayGrievances() {
    const container = document.getElementById("grievancesContainer");
    const countBadge = document.getElementById("grievanceCountBadge");
    if (!container) return;
    const filtered = grievances.filter((g) => {
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
      ].some((val) => String(val || "").toLowerCase().includes(searchQuery));
      const matchesStatus = !statusFilterQuery || String(g.status || "").trim() === statusFilterQuery.trim();
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
    filtered.forEach((g) => {
      const desc = (g.description || "").substring(0, 60) + (g.description && g.description.length > 60 ? "..." : "");
      const statusConfig = (currentConfig.statuses || []).find((s) => String(s.id).trim() === String(g.status).trim());
      const statusColor = statusConfig ? statusConfig.color : "#2563eb";
      const locationText = [g.block, g.panchayat, g.village].filter(Boolean).join(" • ");
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
                    <span class="status-badge" style="background-color: ${statusColor}15; color: ${statusColor}; border: 1px solid ${statusColor}40;">
                        ${escapeHtml(g.status || "नई")}
                    </span>
                </td>
                <td data-label="विवरण | Description">${escapeHtml(desc || "-")}</td>
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
  window.__onLanguageChanged = function(lang) {
    updateThemeToggleButton(getCurrentTheme());
    renderFormOptions(currentConfig);
    updateDashboard();
    displayGrievances();
    updateEnrollmentCounter();
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
