import './globals.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MainLayout } from '@widgets';
import { StyledEngineProvider } from '@mui/material';
import StoreProvider from '@/app/StoreProvider';
import { SnackbarAtom } from '@/shared/ui/Snackbar/Snackbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CounterStrikeBall | Страйкбол | Airsoft | Пермь',
  description: 'Пермский клуб страйкбола и игровая площадка для фанатов CS: GO.',
  metadataBase: new URL('https://www.counterstrikeball.ru'),
  openGraph: {
    title: 'CounterStrikeBall | Страйкбол | Airsoft | Пермь',
    description: 'Пермский клуб страйкбола и игровая площадка для фанатов CS: GO.',
    url: 'https://www.counterstrikeball.ru',
    images: [{ url: '/opengraph.jpg' }],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://vk.com" />
        <link rel="preconnect" href="https://vkuser.net" />
        <link rel="dns-prefetch" href="https://vk.com" />
        <link rel="dns-prefetch" href="https://vkuser.net" />
      </head>
      <body>
        <StyledEngineProvider injectFirst>
          <StoreProvider>
            <MainLayout>{children}</MainLayout>

            <SnackbarAtom />
          </StoreProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
