/**
 * =========================================================================
 * सार्वजनिक शिकायत पोर्टल - दक्षिण बस्तर दंतेवाडा
 * Custom Backend for Your Google Sheet (Sheet1)
 * =========================================================================
 * 
 * તમારી Sheet ના Headers (A થી O - 15 Columns):
 * A: Applicant Name
 * B: Father/Husband Name
 * C: Age
 * D: Phone Number
 * E: Block
 * F: Village Panchayat
 * G: Village
 * H: Email
 * I: Aadhaar Number
 * J: Enrollment Number
 * K: Reason for Visit / Grievance
 * L: Detailed Description
 * M: Select Status
 * N: Remarks
 * O: Date of Application
 * =========================================================================
 */

// Target Sheet Tab Name (Matches your sheet in the image)
const DATA_SHEET_NAME = "Grievances";
const CONFIG_SHEET_NAME = "Config";

/**
 * यदि आपकी Apps Script सीधे Google Sheet के अंदर (Extensions > Apps Script) से खुली है,
 * तो SPREADSHEET_ID को खाली ("") छोड़ दें।
 * यदि आपने script.google.com पर अलग से (Standalone) स्क्रिप्ट बनाई है, 
 * तो अपनी Google Sheet के URL से Sheet ID कॉपी करके यहाँ डालें:
 * उदाहरण: const SPREADSHEET_ID = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms";
 */
const SPREADSHEET_ID = "";

/**
 * Google Spreadsheet प्राप्त करने का सुरक्षित तरीका
 */
function getSpreadsheet() {
  if (SPREADSHEET_ID && SPREADSHEET_ID.trim() !== "") {
    return SpreadsheetApp.openById(SPREADSHEET_ID.trim());
  }
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    throw new Error(
      "Spreadsheet नहीं मिली! यदि यह Standalone Script है, तो Code.gs के ऊपर SPREADSHEET_ID दर्ज करें, या Google Sheet में जाकर Extensions > Apps Script से इस कोड को पेस्ट करें।"
    );
  }
  return ss;
}

/**
 * Handle GET Requests
 * Supports:
 * - action=getInitialData (Returns Config + All Grievances)
 * - action=getGrievances (Returns All Grievances from Sheet1)
 * - action=getConfig (Returns Config/Dropdown options)
 */
function doGet(e) {
  try {
    const action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "getInitialData";
    const ss = getSpreadsheet();
    const sheet = getTargetSheet(ss);

    if (action === "getInitialData") {
      const config = getDynamicConfig(ss, sheet);
      const grievances = getSheetGrievances(sheet);
      return createJsonResponse({
        success: true,
        config: config,
        data: grievances
      });
    }

    if (action === "getGrievances") {
      const grievances = getSheetGrievances(sheet);
      return createJsonResponse({
        success: true,
        count: grievances.length,
        data: grievances
      });
    }

    if (action === "getConfig") {
      const config = getDynamicConfig(ss, sheet);
      return createJsonResponse({
        success: true,
        config: config
      });
    }

    return createJsonResponse({
      success: true,
      message: "Backend API is active and connected to Sheet1."
    });

  } catch (error) {
    return createJsonResponse({
      success: false,
      error: error.toString()
    });
  }
}

/**
 * Handle POST Requests
 * Inserts new grievance exactly into Columns A through O in Sheet1
 */
function doPost(e) {
  try {
    let requestData;
    if (e.postData && e.postData.contents) {
      requestData = JSON.parse(e.postData.contents);
    } else {
      requestData = e.parameter || {};
    }

    const action = requestData.action || "submitGrievance";
    const ss = getSpreadsheet();
    const sheet = getTargetSheet(ss);

    if (action === "submitGrievance") {
      const now = new Date();
      const defaultDate = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd");

      // Exactly matches your 15 columns (A to O)
      const newRow = [
        requestData.applicantName || "",                          // A: Applicant Name
        requestData.fatherName || "",                             // B: Father/Husband Name
        requestData.age || "",                                    // C: Age
        requestData.phone || "",                                  // D: Phone Number
        requestData.block || "",                                  // E: Block
        requestData.panchayat || "",                              // F: Village Panchayat
        requestData.village || "",                                // G: Village
        requestData.email || "",                                  // H: Email
        requestData.aadhar || "",                                 // I: Aadhaar Number
        requestData.enrollment || "",                             // J: Enrollment Number
        requestData.reason || "",                                 // K: Reason for Visit / Grievance
        requestData.description || "",                            // L: Detailed Description
        requestData.status || "नई",                               // M: Select Status
        requestData.remarks || "",                                // N: Remarks
        requestData.date || defaultDate                           // O: Date of Application
      ];

      sheet.appendRow(newRow);
      const insertedRowIndex = sheet.getLastRow();

      return createJsonResponse({
        success: true,
        message: "शिकायत सफलतापूर्वक Google Sheet में दर्ज की गई।",
        rowNumber: insertedRowIndex,
        id: "GRV-" + insertedRowIndex
      });
    }

    if (action === "updateStatus") {
      const rowIndex = parseInt(requestData.rowNumber || requestData.id, 10);
      const newStatus = requestData.status;

      if (!rowIndex || isNaN(rowIndex) || rowIndex < 2 || !newStatus) {
        return createJsonResponse({
          success: false,
          error: "Valid rowNumber and new status are required."
        });
      }

      // Column M is Column 13 (Select Status)
      sheet.getRange(rowIndex, 13).setValue(newStatus);

      return createJsonResponse({
        success: true,
        message: "Status updated successfully in Column M."
      });
    }

    return createJsonResponse({
      success: false,
      error: "Unknown action specified."
    });

  } catch (error) {
    return createJsonResponse({
      success: false,
      error: error.toString()
    });
  }
}

/**
 * Get Sheet1 or Active Sheet
 */
function getTargetSheet(ss) {
  let sheet = ss.getSheetByName(DATA_SHEET_NAME);
  if (!sheet) {
    // Fallback to first sheet if renamed
    sheet = ss.getSheets()[0];
  }
  return sheet;
}

/**
 * Read all rows from Sheet1 (Columns A to O)
 */
function getSheetGrievances(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return []; // Only header exists or empty

  const rows = data.slice(1); // Exclude header row

  return rows.map((row, index) => {
    const rowNumber = index + 2; // 1-based index (Row 1 is header)
    return {
      id: "ROW-" + rowNumber,
      rowNumber: rowNumber,
      applicantName: row[0] || "",
      fatherName: row[1] || "",
      age: row[2] || "",
      phone: row[3] || "",
      block: row[4] || "",
      panchayat: row[5] || "",
      village: row[6] || "",
      email: row[7] || "",
      aadhar: row[8] || "",
      enrollment: row[9] || "",
      reason: row[10] || "",
      description: row[11] || "",
      status: String(row[12] || "नई").trim(),
      remarks: row[13] || "",
      date: row[14] ? formatSheetDate(row[14]) : ""
    };
  }).reverse(); // Latest row first
}

/**
 * Format date values from Google Sheets
 */
function formatSheetDate(dateVal) {
  if (!dateVal) return "";
  if (dateVal instanceof Date) {
    return Utilities.formatDate(dateVal, Session.getScriptTimeZone(), "yyyy-MM-dd");
  }
  return String(dateVal);
}

/**
 * Dynamic Configuration (Reads from Config tab & Locations tab if present, else auto-detects or defaults)
 */
function getDynamicConfig(ss, dataSheet) {
  let config = {
    portalInfo: {
      title: "🔴 सार्वजनिक शिकायत पोर्टल",
      subtitle: "दक्षिण बस्तर जिला, दंतेवाडा | Public Grievance Portal, South Bastar Dantewada",
      officeHours: "शिकायत पंजीकरण समय | Grievance Registration Hours: 9:00 AM - 5:00 PM (सोमवार - शुक्रवार | Monday - Friday)",
      copyright: "© 2024 दक्षिण बस्तर दंतेवाडा जिला | South Bastar Dantewada District"
    },
    locations: null,
    blocks: [],
    reasons: [],
    statuses: []
  };

  // 1. Read Hierarchical Locations (Block -> Gram Panchayat -> Village) from Sheet
  const sheetLocations = getSheetLocations(ss);
  if (sheetLocations) {
    config.locations = sheetLocations;
    config.blocks = Object.keys(sheetLocations).map(b => ({ value: b, label: b }));
  }

  // 2. Read Config tab if it exists
  let configSheet = ss.getSheetByName(CONFIG_SHEET_NAME);
  if (configSheet) {
    const configData = configSheet.getDataRange().getValues();
    for (let i = 1; i < configData.length; i++) {
      const category = String(configData[i][0] || "").trim().toLowerCase();
      const val = String(configData[i][1] || "").trim();
      const label = String(configData[i][2] || "").trim() || val;
      const extra = String(configData[i][3] || "").trim();

      if (!category || !val) continue;

      if (category === "portalinfo") {
        config.portalInfo[val] = label;
      } else if (category === "block" && (!config.blocks || config.blocks.length === 0)) {
        config.blocks.push({ value: val, label: label });
      } else if (category === "reason") {
        config.reasons.push({ value: val, label: label });
      } else if (category === "status") {
        config.statuses.push({ id: val, label: label, color: extra || "#3498db" });
      }
    }
  }

  // 3. Fallback defaults if not set in sheet
  if (!config.locations) {
    config.locations = getDefaultLocations();
  }

  if (!config.blocks || config.blocks.length === 0) {
    config.blocks = Object.keys(config.locations).map(b => ({ value: b, label: b }));
  }

  if (!config.reasons || config.reasons.length === 0) {
    config.reasons = [
      { value: "आवेदन संबंधी", label: "आवेदन संबंधी | Application Related" },
      { value: "भुगतान संबंधी", label: "भुगतान संबंधी | Payment Related" },
      { value: "सूचना संबंधी", label: "सूचना संबंधी | Information Request" },
      { value: "दस्तावेज संबंधी", label: "दस्तावेज संबंधी | Document Related" },
      { value: "शिकायत", label: "शिकायत | Complaint" },
      { value: "अन्य", label: "अन्य | Others" }
    ];
  }

  if (!config.statuses || config.statuses.length === 0) {
    config.statuses = [
      { id: "नई", label: "नई | New", color: "#3498db" },
      { id: "लंबित", label: "लंबित | Pending", color: "#f39c12" },
      { id: "हल", label: "हल | Resolved", color: "#27ae60" },
      { id: "अस्वीकृत", label: "अस्वीकृत | Rejected", color: "#e74c3c" }
    ];
  }

  return config;
}

/**
 * Read hierarchical locations (Block -> Panchayat -> Village) from Sheet
 * Checks for a tab named: "Locations", "Panchayats", "Villages", "MasterData", or "स्थान"
 * Format: Col A: Block | Col B: Gram Panchayat | Col C: Village
 */
function getSheetLocations(ss) {
  const possibleNames = ["Locations", "Panchayats", "Villages", "MasterData", "स्थान", "ग्राम_पंचायत", "पंचायात"];
  let locSheet = null;

  for (let i = 0; i < possibleNames.length; i++) {
    locSheet = ss.getSheetByName(possibleNames[i]);
    if (locSheet) break;
  }

  if (!locSheet) return null;

  const data = locSheet.getDataRange().getValues();
  if (data.length <= 1) return null;

  const locations = {};
  for (let i = 1; i < data.length; i++) {
    const block = String(data[i][0] || "").trim();
    const panchayat = String(data[i][1] || "").trim();
    const village = String(data[i][2] || "").trim();

    if (!block || !panchayat) continue;

    if (!locations[block]) {
      locations[block] = {};
    }
    if (!locations[block][panchayat]) {
      locations[block][panchayat] = [];
    }
    if (village && locations[block][panchayat].indexOf(village) === -1) {
      locations[block][panchayat].push(village);
    }
  }

  return Object.keys(locations).length > 0 ? locations : null;
}

/**
 * Default Dantewada District Locations (Fallback)
 */
function getDefaultLocations() {
  return {
    "दंतेवाडा": {
      "चितालंका": ["चितालंका", "भोगाम", "नेरली"],
      "बालपेट": ["बालपेट", "मासापारा", "कोडेनार"],
      "टेकनार": ["टेकनार", "कसेनार", "गदापाल"],
      "मटेनार": ["मटेनार", "पंडेवार", "कटेनार"],
      "दंतेवाडा": ["दंतेवाडा (मुख्यालय)", "पुराना बाजार", "मेंढका"]
    },
    "गीदम": {
      "जावंगा": ["जावंगा", "कारली", "पाहुरनार"],
      "कारली": ["कारली", "हारम"],
      "बारसूर": ["बारसूर", "मुचनार", "मंगनार"],
      "छिंदनार": ["छिंदनार", "पाहुरनार"],
      "गीदम": ["गीदम (मुख्यालय)", "कौशल नगर"]
    },
    "कुआकोंडा": {
      "कुआकोंडा": ["कुआकोंडा (मुख्यालय)", "मैलावाड़ा"],
      "नकुलनार": ["नकुलनार", "बड़ेगुडरा"],
      "समलूर": ["समलूर", "पालनार"],
      "रीता": ["रीता", "पिनेरली"]
    },
    "कटेकल्याण": {
      "कटेकल्याण": ["कटेकल्याण (मुख्यालय)", "बड़ेगोड़े"],
      "मारजुम": ["मारजुम", "गादापाल"],
      "तुमकपाल": ["तुमकपाल", "परचेली"],
      "तेतम": ["तेतम", "मुंडा"]
    }
  };
}

/**
 * Return JSON with proper MIME type for web client
 */
function createJsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
