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
    ],
  },
  output: "standalone",
};

export default withPayload(nextConfig);
