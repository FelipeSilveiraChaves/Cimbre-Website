"use client";

import { useEffect } from "react";
import { captureAndStoreParams } from "@/app/utils/buildCheckoutUrl";

export default function TrackingCapture() {
  useEffect(() => {
    captureAndStoreParams();
  }, []);

  return null;
}
