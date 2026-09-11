import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      assetPrefix: 'https://joshuarego210-netizen.github.io/joshua-portfolio',
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
