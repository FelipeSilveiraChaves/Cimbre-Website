import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // --- Adicionar novos slugs curtos abaixo ---
      {
        source: "/ig",
        destination:
          "https://cimbre.com.br/?utm_source=instagram&utm_medium=social&utm_campaign=bio",
        permanent: false,
      },
      // --- Fim dos slugs curtos ---
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
