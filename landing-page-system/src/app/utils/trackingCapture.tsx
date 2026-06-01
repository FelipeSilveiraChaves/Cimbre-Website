"use client";

import { useEffect } from "react";
import { captureTrackingFromUrl } from "@/app/utils/trackingStorage";

export default function TrackingCapture() {
  useEffect(() => {
    captureTrackingFromUrl();
  }, []);

  return null;
}
