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
  headers: async () => [
    {
      // Apply headers to all routes
      source: "/(.*)",
      headers: [
        {
          key: "Access-Control-Allow-Credentials",
          value: "true",
        },
        {
          key: "Access-Control-Allow-Origin",
          // Replace with your domain
          value: "getwalletx.com",
        },
        {
          key: "Access-Control-Allow-Methods",
          value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        },
        {
          key: "Access-Control-Allow-Headers",
          value:
            "X-CSRF-Token, X-Requested-With, Accept, Accept- Version, Content - Length, Content - MD5, Content - Type, Date, X - Api - Version",
        },
      ],
    },
  ],
};

export default nextConfig;
