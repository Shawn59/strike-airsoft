import type { NextConfig } from 'next';
//const path = require('path');

const nextConfig: NextConfig = {
  sassOptions: {
    // includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@use "src/styles/variables" as *; @use "src/styles/mixins" as *; @use "src/styles/extends" as *;`,
    /*  additionalData: (content: string, filepath: string) => {
      // Не добавляем импорты в глобальный файл стилей
      if (filepath.endsWith('globals.scss')) {
        return content;
      }
      // Импортируем переменные, миксины и функции по коротким именам
      //return `@use "variables" as *;\n` + `@use "mixins" as *;\n` + `@use "functions" as *;\n` + content;
    },*/
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
