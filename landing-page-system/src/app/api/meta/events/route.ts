import { NextRequest, NextResponse } from "next/server";
import { ServerEvent, EventRequest, UserData, CustomData } from "facebook-nodejs-business-sdk";

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

  const { event_name, event_id, event_source_url, fbc: bodyFbc } = body;

  if (!isAllowedEvent(event_name)) {
    return NextResponse.json({ error: "event_not_allowed" }, { status: 400 });
  }

  if (typeof event_id !== "string" || !event_id) {
    return NextResponse.json({ error: "event_id_required" }, { status: 400 });
  }

  // Lê _fbp e _fbc dos cookies da requisição (same-origin, chegam automaticamente)
  const fbp = request.cookies.get("_fbp")?.value;
  const fbc =
    request.cookies.get("_fbc")?.value ??
    (typeof bodyFbc === "string" ? bodyFbc : undefined);
  const clientIp = getClientIp(request);
  const clientUserAgent = request.headers.get("user-agent") ?? "";

  const userData = new UserData();
  if (clientIp) userData.setClientIpAddress(clientIp);
  if (clientUserAgent) userData.setClientUserAgent(clientUserAgent);
  if (fbp) userData.setFbp(fbp);
  if (fbc) userData.setFbc(fbc);

  const customData = new CustomData();
  customData.setContentName("Cimbre");

  if (event_name !== "PageView") {
    customData
      .setContentIds(["cimbre-main-offer"])
      .setContentType("product")
      .setCurrency("BRL")
      .setValue(97);
  }

  const serverEvent = new ServerEvent()
    .setEventName(event_name)
    .setEventTime(Math.floor(Date.now() / 1000))
    .setEventId(event_id)
    .setActionSource("website")
    .setEventSourceUrl(typeof event_source_url === "string" ? event_source_url : "")
    .setUserData(userData)
    .setCustomData(customData);

  const eventRequest = new EventRequest(accessToken, pixelId).setEvents([
    serverEvent,
  ]);

  if (testEventCode) {
    eventRequest.setTestEventCode(testEventCode);
  }

  try {
    await eventRequest.execute();

    if (process.env.NODE_ENV !== "production") {
      console.log("[capi]", event_name, event_id, "sent via SDK");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[capi] SDK error:", err);
    }
    return NextResponse.json({ ok: false, error: "sdk_error" }, { status: 500 });
  }
}
