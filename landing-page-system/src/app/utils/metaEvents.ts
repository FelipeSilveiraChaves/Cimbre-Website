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
  event_name: "ViewContent" | "CheckoutButtonClick";
  event_id: string;
  event_source_url: string;
}): Promise<void> {
  try {
    await fetch("/api/meta/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[meta] CAPI request failed:", err);
    }
  }
}

export async function fireViewContent(): Promise<void> {
  const eventId = generateEventId("vc_");
  const eventSourceUrl =
    typeof window !== "undefined" ? window.location.href : "";

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", CUSTOM_DATA, { eventID: eventId });
  }

  await sendToCapi({
    event_name: "ViewContent",
    event_id: eventId,
    event_source_url: eventSourceUrl,
  });

  if (process.env.NEXT_PUBLIC_TRACKING_DEBUG === "true") {
    console.log("[meta] ViewContent", { eventId, fbp: getCookie("_fbp") });
  }
}

export async function fireCheckoutButtonClick(): Promise<void> {
  const eventId = generateEventId("cbc_");
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
