/* eslint-disable no-console */

/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./src/styles/variables.scss"; @import "./src/styles/mixins.scss"; @import "./src/styles/functions.scss";`,
    logger: {
      warn(message) {
        console.warn(message);
      },
      debug(message) {
        console.log(message);
      },
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
