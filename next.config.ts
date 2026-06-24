import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

function remotePatternFromURL(url: string) {
  const parsedURL = new URL(url);
  return {
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol.replace(":", "") as "http" | "https",
  };
}

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [40, 75],
    remotePatterns: [
      ...(process.env.CLOUDINARY_PUBLIC_URL
        ? [remotePatternFromURL(process.env.CLOUDINARY_PUBLIC_URL)]
        : []),
      ...(process.env.CLOUDINARY_CLOUD_NAME
        ? [
            {
              hostname: "res.cloudinary.com",
              pathname: `/${process.env.CLOUDINARY_CLOUD_NAME}/**`,
              protocol: "https" as const,
            },
          ]
        : []),
      {
        protocol: "https" as const,
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default withPayload(nextConfig);
