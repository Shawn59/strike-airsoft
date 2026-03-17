import './globals.scss';
import { MainLayout } from '@widgets';
import { StyledEngineProvider } from '@mui/material';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <StyledEngineProvider injectFirst>
          <MainLayout>{children}</MainLayout>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
