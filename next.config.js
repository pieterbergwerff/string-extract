// @ts-check

const { PHASE_PRODUCTION_BUILD } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
  output: "export",
  reactStrictMode: true,
  distDir: "out",
  ...(phase === PHASE_PRODUCTION_BUILD ? { basePath: "/string-extract" } : {}),
});

module.exports = nextConfig;
