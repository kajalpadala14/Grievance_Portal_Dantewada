import { DEFAULT_CONFIG } from '../config/defaultConfig.js';

// Read Google Apps Script URL from .env (Vite environment variables)
export const APPS_SCRIPT_URL = (import.meta.env && import.meta.env.VITE_APPS_SCRIPT_URL) || "";

const LOCAL_STORAGE_KEY = "grievances";
const LOCAL_CONFIG_KEY = "portal_config";

/**
 * Fetch Initial Portal Data (Config + Grievances)
 */
export async function getInitialData() {
  let config = DEFAULT_CONFIG;
  let grievances = getStoredGrievances();

  if (APPS_SCRIPT_URL && APPS_SCRIPT_URL.trim() !== "") {
    try {
      const response = await fetch(`${APPS_SCRIPT_URL}?action=getInitialData`);
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          if (result.config && result.config.blocks && result.config.blocks.length > 0) {
            config = result.config;
            localStorage.setItem(LOCAL_CONFIG_KEY, JSON.stringify(config));
          }
          if (Array.isArray(result.data)) {
            grievances = result.data;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(grievances));
          }
          return { config, grievances };
        }
      }
    } catch (err) {
      console.warn("[API] Failed to fetch initial data from Google Apps Script, using local cache/defaults:", err);
    }
  }

  // Check if we have cached config in localStorage
  const cachedConfig = localStorage.getItem(LOCAL_CONFIG_KEY);
  if (cachedConfig) {
    try {
      config = JSON.parse(cachedConfig);
    } catch (e) {
      config = DEFAULT_CONFIG;
    }
  }

  return { config, grievances };
}

/**
 * Fetch all registered grievances from Google Apps Script or LocalStorage fallback
 */
export async function getGrievances() {
  if (APPS_SCRIPT_URL && APPS_SCRIPT_URL.trim() !== "") {
    try {
      const response = await fetch(`${APPS_SCRIPT_URL}?action=getGrievances`);
      if (response.ok) {
        const result = await response.json();
        if (result.success && Array.isArray(result.data)) {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(result.data));
          return result.data;
        }
      }
    } catch (err) {
      console.warn("[API] Failed to fetch from Google Apps Script, falling back to LocalStorage:", err);
    }
  }

  return getStoredGrievances();
}

/**
 * Submit a new grievance to Google Apps Script or LocalStorage fallback
 */
export async function submitGrievance(grievanceData) {
  let backendSuccess = false;
  let backendError = null;

  // Always save locally for instant offline/optimistic feedback
  const localGrievances = getStoredGrievances();
  localGrievances.unshift(grievanceData);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localGrievances));

  if (APPS_SCRIPT_URL && APPS_SCRIPT_URL.trim() !== "") {
    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "cors",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          action: "submitGrievance",
          ...grievanceData
        })
      });

      const responseText = await response.text();

      // Check if response is valid JSON
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
        // Response is not JSON (likely Google Login or Permission Required HTML page)
        if (responseText.includes("You need access") || responseText.includes("accounts.google.com")) {
          backendError = "PERMISSION_ERROR: Google Apps Script Web App को 'Who has access: Anyone' पर सेट करना आवश्यक है।";
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

/**
 * Helper to get grievances directly from LocalStorage
 */
function getStoredGrievances() {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
}
