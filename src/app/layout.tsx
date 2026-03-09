import type { Metadata } from 'next';
import './globals.scss';
import { MainLayout } from '@widgets';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
