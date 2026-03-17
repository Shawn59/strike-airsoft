'use server';
import styles from './MainMenu.module.scss';
import { menuData } from '@/features/MainMenu/lib/MenuData';
import Image from 'next/image';
import Sider from 'antd/es/layout/Sider';
import Link from 'next/link';
import { MenuMobile } from '@/features/MainMenu/ui/components/MenuMobile/MenuMobile';

export const MainMenu = async () => {
  return (
    <Sider className={styles.mainMenu}>
      <Link className={styles.logoContainer} href={'/'}>
        <Image src={'/logo.svg'} alt={'логотип кс'} width={56} height={56} />
      </Link>

      <div className={styles.itemLinksDesk}>
        {menuData.map((item) => {
          const { label, id, iconSrc, link } = item;

          return (
            <Link key={id} href={link} className={styles.itemContainer}>
              <div className={styles.itemIcon}>
                <Image src={iconSrc} alt={label} />
              </div>

              <div className={styles.itemLabel}>{label}</div>
            </Link>
          );
        })}
      </div>

      <div className={styles.burgerMenuMob}>
        <MenuMobile />
      </div>
    </Sider>
  );
};
