import { Metadata } from 'next';
import { MainPageView } from '@/views';

export const metadata: Metadata = {
  title: 'CounterStrikeBall | Страйкбол | Airsoft | Пермь',
  description: 'Пермский клуб страйкбола и игровая площадка для фанатов CS: GO.',
  other: {
    'yandex-verification': 'fb4be9cee0de33fc',
  },
  icons: {
    other: [
      {
        rel: 'shortcut icon',
        url: '/favicon.ico?v=1',
        type: 'image/x-icon',
      },
      {
        rel: 'icon',
        url: '/favicon-48x48.png?v=1',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon.svg?v=1',
        type: 'image/svg+xml',
      },
      {
        rel: 'apple-touch-icon',
        url: '/android-chrome-192x192?v=1',
        sizes: '192x192',
      },
    ],
  },
};

export default MainPageView;
