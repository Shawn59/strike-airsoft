'use server';

import { MainMenu } from '@/features/MainMenu';

export const MainLayout = async ({ children }) => {
  return (
    <main>
      <MainMenu />

      <div>{children}</div>
    </main>
  );
};
