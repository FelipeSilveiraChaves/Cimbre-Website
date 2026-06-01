"use client";

import { useEffect } from "react";
import {
  registerLandingOrigin,
  captureTrackingFromUrl,
} from "@/app/utils/trackingStorage";

type Props = { lpId: string };

export default function LocalStorageLpRegister({ lpId }: Props) {
  useEffect(() => {
    registerLandingOrigin(lpId);
    captureTrackingFromUrl();
  }, [lpId]);

  return null;
}
