import styles from './MenuDesk.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import type { IMenu } from '@/features/MainMenu/ui/components/Menu.types';
import { FC } from 'react';

export const MenuDesk: FC<IMenu> = ({ data }) => {
  if (!data) return;

  return (
    <div className={styles.menuDesk}>
      {data.map((item) => {
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
