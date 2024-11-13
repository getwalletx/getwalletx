import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, {}) => {
    // Add a new rule to handle WAV files
    config.module.rules.push({
      test: /\.wav$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/sounds/[name].[hash].[ext]", // Adjust the output path and file name as needed
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: [
      "cdn-images-1.medium.com",
      "unsplash.com",
      "images.unsplash.com",
      "ui.aceternity.com",
    ],
  },
};

export default nextConfig;
