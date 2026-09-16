/**
 * =========================================================================
 * Default Portal Configuration
 * Used when offline or as fallback until Google Apps Script config is loaded.
 * All of this can be overridden dynamically from the Google Sheets "Config" tab!
 * =========================================================================
 */

// No hardcoded locations: all locations (Blocks -> Panchayats -> Villages) will be dynamically fetched from Google Sheet
export const DEFAULT_LOCATIONS = {};

export const DEFAULT_CONFIG = {
  portalInfo: {
    title: "🔴 सार्वजनिक शिकायत पोर्टल",
    subtitle: "दक्षिण बस्तर जिला, दंतेवाडा | Public Grievance Portal, South Bastar Dantewada",
    officeHours: "शिकायत पंजीकरण समय | Grievance Registration Hours: 9:00 AM - 5:00 PM (सोमवार - शुक्रवार | Monday - Friday)",
    copyright: "© 2024 दक्षिण बस्तर दंतेवाडा जिला | South Bastar Dantewada District"
  },
  locations: {},
  blocks: [],
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
