import styles from './MenuDesk.module.scss';
import { menuData } from '@/features/MainMenu/lib/MenuData';
import Link from 'next/link';
import Image from 'next/image';

export const MenuDesk = () => {
  return (
    <div className={styles.menuDesk}>
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
  );
};
