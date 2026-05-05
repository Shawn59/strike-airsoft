import './globals.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MainLayout } from '@widgets';
import { StyledEngineProvider } from '@mui/material';
import StoreProvider from '@/app/StoreProvider';
import { SnackbarAtom } from '@/shared/ui/Snackbar/Snackbar';
import { Metadata } from 'next';
import { YandexMetricaProvider, standardYMInitParameters } from '@artginzburg/next-ym';

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
  const ymInitParams = {
    ...standardYMInitParameters,
    webvisor: true, // вебвизор
    ecommerce: 'dataLayer', // если используется электронная торговля
    accurateTrackBounce: true,
  };

  return (
    <html lang="ru">
      <body>
        <StyledEngineProvider injectFirst>
          <StoreProvider>
            <MainLayout>
              <YandexMetricaProvider initParameters={ymInitParams}>{children}</YandexMetricaProvider>
            </MainLayout>
            <SnackbarAtom />
          </StoreProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
