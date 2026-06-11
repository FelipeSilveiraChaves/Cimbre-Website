const STORAGE_KEY = "cimbre_visitor_tracking";
const TTL_DAYS = 30;

type UrlParam =
  | "utm_source"
  | "utm_medium"
  | "utm_campaign"
  | "utm_content"
  | "utm_term"
  | "fbclid"
  | "gclid"
  | "ttclid";

export type TrackingData = {
  landingOrigin?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  ttclid?: string;
  externalId?: string;
  firstLandingUrl?: string;
  firstSeenAt?: string;
  lastSeenAt?: string;
  expiresAt?: string;
};

const EXTERNAL_ID_COOKIE = "cimbre_eid";
const EXTERNAL_ID_TTL_DAYS = 365;

const URL_PARAM_ALLOWLIST: UrlParam[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "ttclid",
];

function isExpired(data: TrackingData): boolean {
  if (!data.expiresAt) return false;
  return new Date(data.expiresAt) < new Date();
}

export function getTracking(): TrackingData {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw) as TrackingData;
    if (isExpired(data)) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    return data;
  } catch {
    return {};
  }
}

function saveTracking(data: TrackingData): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage indisponível ou cheio
  }
}

export function captureTrackingFromUrl(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const existing = getTracking();
  const now = new Date().toISOString();
  const expiresAt = new Date(
    Date.now() + TTL_DAYS * 24 * 60 * 60 * 1000,
  ).toISOString();

  const merged: TrackingData = { ...existing };

  // Só sobrescreve chaves que a URL atual realmente tem
  URL_PARAM_ALLOWLIST.forEach((key) => {
    const value = params.get(key);
    if (value) merged[key] = value;
  });

  merged.lastSeenAt = now;
  merged.expiresAt = expiresAt;

  if (!existing.firstSeenAt) {
    merged.firstSeenAt = now;
    merged.firstLandingUrl = window.location.href;
  }

  saveTracking(merged);
}

export function registerLandingOrigin(lpId: string): void {
  if (typeof window === "undefined") return;
  const existing = getTracking();
  saveTracking({
    ...existing,
    landingOrigin: lpId,
    lastSeenAt: new Date().toISOString(),
  });
}

export function getLandingOrigin(): string {
  return getTracking().landingOrigin ?? "lp-1";
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function setExternalIdCookie(value: string): void {
  if (typeof document === "undefined") return;
  const maxAge = EXTERNAL_ID_TTL_DAYS * 24 * 60 * 60;
  const secure =
    typeof location !== "undefined" && location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${EXTERNAL_ID_COOKIE}=${encodeURIComponent(
    value,
  )}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
}

function newExternalId(): string {
  return typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);
}

/**
 * Retorna um ID anônimo e persistente do visitante (external_id), criando-o na
 * primeira visita. Fonte de verdade: cookie first-party `cimbre_eid`, lido pela
 * CAPI exatamente como _fbp/_fbc. Espelhado no localStorage por resiliência
 * (restaura o mesmo valor se o cookie for limpo). Reutilizado em toda a jornada.
 */
export function getOrCreateExternalId(): string {
  const fromCookie = getCookie(EXTERNAL_ID_COOKIE);
  if (fromCookie) return fromCookie;

  const existing = getTracking();
  if (existing.externalId) {
    setExternalIdCookie(existing.externalId);
    return existing.externalId;
  }

  const id = newExternalId();
  setExternalIdCookie(id);
  saveTracking({ ...existing, externalId: id });
  return id;
}
