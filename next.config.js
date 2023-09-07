/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/next-template',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./src/styles/variables.scss"; @import "./src/styles/mixins.scss";`,
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
