import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  sassOptions: {
    // includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@use "src/styles/variables" as *; @use "src/styles/mixins" as *; @use "src/styles/extends" as *;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.photo.2gis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
