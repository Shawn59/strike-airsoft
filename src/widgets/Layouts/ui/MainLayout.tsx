'use server';

import { MainMenu } from '@/features/MainMenu';
import styles from './MainLayout.module.scss';

export const MainLayout = async ({ children }) => {
  return (
    <main className={styles.mainLayout}>
      <MainMenu />

      <div className={styles.content}>{children}</div>
    </main>
  );
};
