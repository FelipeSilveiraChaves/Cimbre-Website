import { getTracking } from "./trackingStorage";

const CHECKOUT_PARAM_ALLOWLIST = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "ttclid",
] as const;

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function buildCheckoutUrl(baseUrl: string): string {
  const tracking = getTracking();
  const params = new URLSearchParams();

  CHECKOUT_PARAM_ALLOWLIST.forEach((key) => {
    const value = tracking[key];
    if (value) params.set(key, value);
  });

  if (tracking.landingOrigin) {
    params.set("landing_origin", tracking.landingOrigin);
  }

  const fbp = getCookie("_fbp");
  const fbc = getCookie("_fbc");
  if (fbp) params.set("fbp", fbp);
  if (fbc) params.set("fbc", fbc);

  const queryString = params.toString();
  if (!queryString) return baseUrl;

  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}${queryString}`;
}
