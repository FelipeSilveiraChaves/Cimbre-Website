// utils/buildCheckoutUrl.ts

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

const TRACKING_KEYS = [
  "fbclid",
  "gclid",
  "ttclid", // TikTok, por garantia
];

export function captureAndStoreParams(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const stored: Record<string, string> = {};

  [...UTM_KEYS, ...TRACKING_KEYS].forEach((key) => {
    const value = params.get(key);
    if (value) stored[key] = value;
  });

  if (Object.keys(stored).length) {
    sessionStorage.setItem("tracking_params", JSON.stringify(stored));
  }
}

export function getStoredParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem("tracking_params") || "{}");
  } catch {
    return {};
  }
}

export function buildCheckoutUrl(baseUrl: string): string {
  const params = getStoredParams();
  if (!Object.keys(params).length) return baseUrl;

  const urlParams = new URLSearchParams(params);
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}${urlParams.toString()}`;
}
