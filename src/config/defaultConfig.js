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
    { value: "आवेदन संबंधी", label: "आवेदन संबंधी | Application Related" },
    { value: "भुगतान संबंधी", label: "भुगतान संबंधी | Payment Related" },
    { value: "सूचना संबंधी", label: "सूचना संबंधी | Information Request" },
    { value: "दस्तावेज संबंधी", label: "दस्तावेज संबंधी | Document Related" },
    { value: "शिकायत", label: "शिकायत | Complaint" },
    { value: "अन्य", label: "अन्य | Others" }
  ],
  statuses: [
    { id: "नई", label: "नई | New", color: "#3498db" },
    { id: "लंबित", label: "लंबित | Pending", color: "#f39c12" },
    { id: "हल", label: "हल | Resolved", color: "#27ae60" },
    { id: "अस्वीकृत", label: "अस्वीकृत | Rejected", color: "#e74c3c" }
  ]
};
