import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
    },
};

export default nextConfig;
