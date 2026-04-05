import './globals.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MainLayout } from '@widgets';
import { StyledEngineProvider } from '@mui/material';
import StoreProvider from '@/app/StoreProvider';
import Head from 'next/head';
import { SnackbarAtom } from '@/shared/ui/Snackbar/Snackbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <link rel="preconnect" href="https://vk.com" crossOrigin />
        <link rel="preconnect" href="https://vkuser.net" crossOrigin />
        <link rel="dns-prefetch" href="https://vk.com" />
        <link rel="dns-prefetch" href="https://vkuser.net" />
      </Head>
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
