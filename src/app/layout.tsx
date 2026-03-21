import './globals.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MainLayout } from '@widgets';
import { StyledEngineProvider } from '@mui/material';
import StoreProvider from '@/app/StoreProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <StyledEngineProvider injectFirst>
          <StoreProvider>
            <MainLayout>{children}</MainLayout>
          </StoreProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
