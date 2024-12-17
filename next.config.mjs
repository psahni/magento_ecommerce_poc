import { fileURLToPath } from "node:url";
import createJiti from "jiti";
// import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files
jiti("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "magento.test",
      },
    ],
  },
};

export default nextConfig;
