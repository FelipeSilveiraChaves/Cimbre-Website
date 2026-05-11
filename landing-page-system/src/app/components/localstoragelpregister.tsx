// components/localstoragelpregister.tsx
"use client";

import { useEffect } from "react";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

type Props = { lpId: string };

export default function LocalStorageLpRegister({ lpId }: Props) {
  useEffect(() => {
    sessionStorage.setItem("landingOrigin", lpId);

    // Captura UTMs da URL atual e salva no sessionStorage
    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string> = {};

    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) utms[key] = value;
    });

    if (Object.keys(utms).length > 0) {
      sessionStorage.setItem("utms", JSON.stringify(utms));
    }
  }, []);

  return null;
}
