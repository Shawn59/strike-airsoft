'use server';
import styles from './MainMenu.module.scss';
import { menuData } from '@/features/MainMenu/lib/MenuData';
import Image from 'next/image';
import Link from 'next/link';
import { MenuMobile } from '@/features/MainMenu/ui/components/MenuMobile/MenuMobile';
import { MenuDesk } from '@/features/MainMenu/ui/components/MenuDesk/MenuDesk';
import PhoneIcon from '@mui/icons-material/PhoneAndroid';

export const MainMenu = async () => {
  return (
    <div className={styles.mainMenu}>
      <Link className={styles.logoContainer} href={'/'}>
        <Image src={'/logo.svg'} alt={'логотип кс'} width={56} height={56} />
      </Link>

      <div className={styles.menuContainerDesk}>
        <MenuDesk data={menuData} />
      </div>

      <div className={styles.menuContainerMob}>
        <MenuMobile data={menuData} />
      </div>

      <Link className={styles.logoContainerMob} href={'/'}>
        <Image src={'/main/bigLogo.svg'} alt={'логотип кс'} width={200} height={60} />
      </Link>

      <a href={'tel:79026425957'} className={styles.phoneContainerMob}>
        <PhoneIcon className={styles.phoneIcon} />
        <span>{'+7 (902) 642 59 57'}</span>
      </a>
    </div>
  );
};
