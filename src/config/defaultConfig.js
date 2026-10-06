/**
 * =========================================================================
 * Default Portal Configuration
 * Used when offline or as fallback until Google Apps Script config is loaded.
 * All of this can be overridden dynamically from the Google Sheets "Config" tab!
 * =========================================================================
 */

export const DEFAULT_LOCATIONS = {
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

export const LOCATION_TRANSLITERATIONS = {
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

/**
 * Phonetic transliteration from Devanagari to English for unmapped or dynamic names
 */
const DEV_MAP = {
  'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ng',
  'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ञ': 'ny',
  'ट': 't', 'ठ': 'th', 'ड': 'd', 'ढ': 'dh', 'ण': 'n',
  'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
  'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm',
  'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v', 'श': 'sh',
  'ष': 'sh', 'स': 's', 'ह': 'h',
  'ा': 'a', 'ि': 'i', 'ी': 'i', 'ु': 'u', 'ू': 'u',
  'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au', 'ं': 'n', '्': '',
  'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ee', 'उ': 'u', 'ऊ': 'oo', 'ए': 'e', 'ओ': 'o'
};

export function getEnglishLocationName(name) {
  if (!name || typeof name !== 'string') return '';
  const trimmed = name.trim();
  if (LOCATION_TRANSLITERATIONS[trimmed]) {
    return LOCATION_TRANSLITERATIONS[trimmed];
  }
  const clean = trimmed.replace(/\s*\([^)]*\)/g, '').trim();
  if (LOCATION_TRANSLITERATIONS[clean]) {
    return trimmed.includes('मुख्यालय') ? `${LOCATION_TRANSLITERATIONS[clean]} HQ` : LOCATION_TRANSLITERATIONS[clean];
  }
  // Convert Devanagari phonetically
  let out = '';
  for (let i = 0; i < clean.length; i++) {
    const ch = clean[i];
    out += DEV_MAP[ch] !== undefined ? DEV_MAP[ch] : ch;
  }
  return out ? out.charAt(0).toUpperCase() + out.slice(1) : clean;
}


export const DEFAULT_CONFIG = {
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
