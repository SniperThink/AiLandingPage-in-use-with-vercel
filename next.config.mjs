/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: process.cwd(),
  outputFileTracingIncludes: {
    '/': ['./app/**/*'],
  },
  // Add webpack config to ignore certain files
  webpack: (config, { isServer }) => {
    // Ignore .git and other unnecessary directories
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.next/**',
        '**/dist/**',
        '**/build/**',
        '**/*.log',
        '**/coverage/**',
      ],
      // Reduce polling frequency to prevent excessive recompilation
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
}

export default nextConfig
