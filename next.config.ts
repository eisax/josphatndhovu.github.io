import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repoName = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const parts = process.env.GITHUB_REPOSITORY.split("/");
  if (parts.length === 2 && parts[1] !== `${parts[0]}.github.io`) {
    repoName = `/${parts[1]}`;
  }
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoName || undefined,
  assetPrefix: repoName ? `${repoName}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
