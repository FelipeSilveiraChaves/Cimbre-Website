// utils/buildCheckoutUrl.ts

export function getStoredUTMs(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem("utms") || "{}");
  } catch {
    return {};
  }
}

export function buildCheckoutUrl(baseUrl: string): string {
  const utms = getStoredUTMs();
  if (!Object.keys(utms).length) return baseUrl;

  const params = new URLSearchParams(utms);
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}${params.toString()}`;
}
