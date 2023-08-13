const { withKumaUI } = require('@kuma-ui/next-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // SSR Streamingを利用するための設定
    // React18のSuspenseとHTTP streamingのサポートを受けることができる
    concurrentFeatures: true,
  },
};

module.exports = withKumaUI(nextConfig);
