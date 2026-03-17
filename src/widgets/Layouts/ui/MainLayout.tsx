'use server';

import { MainMenu } from '@/features/MainMenu';
import styles from './MainLayout.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { MenuMobile } from '@/features/MainMenu/ui/components/MenuMobile/MenuMobile';

export const MainLayout = async ({ children }) => {
  return (
    <main className={styles.mainLayout}>
      <MainMenu />

      <div className={styles.content}>{children}</div>
    </main>
  );
};
