import { getOrCreateExternalId } from "./trackingStorage";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const CUSTOM_DATA = {
  content_name: "Cimbre",
  content_ids: ["cimbre-main-offer"],
  content_type: "product",
  currency: "BRL",
  value: 97,
};

function generateEventId(prefix: string): string {
  const id =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2) + Date.now().toString(36);
  return `${prefix}${id}`;
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

async function sendToCapi(payload: {
  event_name: "ViewOffer" | "CheckoutButtonClick";
  event_id: string;
  event_source_url: string;
}): Promise<void> {
  try {
    await fetch("/api/meta/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // No browser do Instagram (99% do tráfego) o checkout pode navegar a
      // própria webview, matando requisições pendentes — keepalive preserva.
      keepalive: true,
    });
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[meta] CAPI request failed:", err);
    }
  }
}

export async function fireViewOffer(): Promise<void> {
  const eventId = generateEventId("vo_");
  // Garante o cookie cimbre_eid antes do fetch da CAPI (caso o Pixel não tenha rodado).
  getOrCreateExternalId();
  const eventSourceUrl =
    typeof window !== "undefined" ? window.location.href : "";

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", "ViewOffer", CUSTOM_DATA, { eventID: eventId });
  }

  await sendToCapi({
    event_name: "ViewOffer",
    event_id: eventId,
    event_source_url: eventSourceUrl,
  });

  if (process.env.NEXT_PUBLIC_TRACKING_DEBUG === "true") {
    console.log("[meta] ViewOffer", { eventId, fbp: getCookie("_fbp") });
  }
}

export async function fireCheckoutButtonClick(): Promise<void> {
  const eventId = generateEventId("cbc_");
  // Garante o cookie cimbre_eid antes do fetch da CAPI (caso o Pixel não tenha rodado).
  getOrCreateExternalId();
  const eventSourceUrl =
    typeof window !== "undefined" ? window.location.href : "";

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", "CheckoutButtonClick", CUSTOM_DATA, {
      eventID: eventId,
    });
  }

  await sendToCapi({
    event_name: "CheckoutButtonClick",
    event_id: eventId,
    event_source_url: eventSourceUrl,
  });

  if (process.env.NEXT_PUBLIC_TRACKING_DEBUG === "true") {
    console.log("[meta] CheckoutButtonClick", {
      eventId,
      fbp: getCookie("_fbp"),
    });
  }
}
