import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // --- Adicionar novos slugs curtos abaixo ---
      {
        source: "/ig",
        destination:
          "https://cimbre.com.br/?utm_source=ig&utm_medium=organic_social&utm_campaign=cimbre_alwayson&utm_content=link_in_bio",
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
