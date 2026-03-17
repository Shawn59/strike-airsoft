'use server';
import styles from './MainMenu.module.scss';
import { menuData } from '@/features/MainMenu/lib/MenuData';
import Image from 'next/image';
import Link from 'next/link';
import { MenuMobile } from '@/features/MainMenu/ui/components/MenuMobile/MenuMobile';
import { MenuDesk } from '@/features/MainMenu/ui/components/MenuDesk/MenuDesk';

export const MainMenu = async () => {
  return (
    <div className={styles.mainMenu}>
      <Link className={styles.logoContainer} href={'/'}>
        <Image src={'/logo.svg'} alt={'логотип кс'} width={56} height={56} />
      </Link>

      <div className={styles.menuContainerDesk}>
        <MenuDesk />
      </div>

      <div className={styles.menuContainerMob}>
        <MenuMobile />
      </div>
    </div>
  );
};
