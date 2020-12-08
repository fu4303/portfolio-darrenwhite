/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const rehypePrism = require("@mapbox/rehype-prism");
const withPlugins = require('next-compose-plugins');

const mdx = require('next-mdx-enhanced')({
  layoutPath: './src/layouts',
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  rehypePlugin: [rehypePrism],
});

const nextConfig = {
  publicRuntimeConfig: {
    // add your public runtime environment variables here with NEXT_PUBLIC_*** prefix
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config) => {
    config.resolve.alias['~'] = path.join(__dirname, './src');
    // extend your webpack configuration here
    return config;
  },
};

module.exports = withPlugins(
  [
    mdx,
    // you may add more plugins, and their configs, to this array
  ],
  nextConfig,
);
