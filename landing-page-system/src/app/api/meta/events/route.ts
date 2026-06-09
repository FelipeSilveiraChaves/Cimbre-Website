import { NextRequest, NextResponse } from "next/server";

const ALLOWED_EVENTS = ["PageView", "ViewOffer", "CheckoutButtonClick"] as const;
type AllowedEvent = (typeof ALLOWED_EVENTS)[number];

function isAllowedEvent(name: unknown): name is AllowedEvent {
  return ALLOWED_EVENTS.includes(name as AllowedEvent);
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "";
}

export async function POST(request: NextRequest) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const testEventCode = process.env.META_TEST_EVENT_CODE;

  if (!pixelId || !accessToken) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[capi] META_PIXEL_ID or META_CAPI_ACCESS_TOKEN not set — skipping");
    }
    return NextResponse.json({ ok: false, error: "not_configured" });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { event_name, event_id, event_source_url, fbc: fbcFromBody } = body;

  if (!isAllowedEvent(event_name)) {
    return NextResponse.json({ error: "event_not_allowed" }, { status: 400 });
  }

  if (typeof event_id !== "string" || !event_id) {
    return NextResponse.json({ error: "event_id_required" }, { status: 400 });
  }

  const fbp = request.cookies.get("_fbp")?.value;
  const fbc =
    request.cookies.get("_fbc")?.value ??
    (typeof fbcFromBody === "string" && fbcFromBody ? fbcFromBody : undefined);

  const clientIp = getClientIp(request);
  const clientUserAgent = request.headers.get("user-agent") ?? "";

  const userData: Record<string, string> = {};
  if (clientIp) userData.client_ip_address = clientIp;
  if (clientUserAgent) userData.client_user_agent = clientUserAgent;
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const eventPayload = {
    event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id,
    action_source: "website",
    event_source_url: typeof event_source_url === "string" ? event_source_url : "",
    user_data: userData,
    custom_data:
      event_name === "PageView"
        ? { content_name: "Cimbre" }
        : {  // ViewOffer e CheckoutButtonClick
            content_name: "Cimbre",
            content_ids: ["cimbre-main-offer"],
            content_type: "product",
            currency: "BRL",
            value: 97,
          },
  };

  const requestBody: Record<string, unknown> = {
    data: [eventPayload],
  };

  if (testEventCode) {
    requestBody.test_event_code = testEventCode;
  }

  try {
    const metaResponse = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(requestBody),
      },
    );

    if (process.env.NODE_ENV !== "production") {
      const result = (await metaResponse.json()) as unknown;
      console.log("[capi]", event_name, event_id, result);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[capi] fetch error:", err);
    }
    return NextResponse.json({ ok: false, error: "fetch_failed" }, { status: 500 });
  }
}
