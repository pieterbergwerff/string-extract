import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/string-extract",
  distDir: "out",
};

export default nextConfig;
