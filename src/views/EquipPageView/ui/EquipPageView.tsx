import styles from './EquipPageView.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import Image from 'next/image';
import classNames from 'classnames';

export const EquipPageView = async () => {
  return (
    <div className={styles.equipPageView}>
      <ContentLayout>
        <h1 className={styles.title}>{'Выбор за тобой!'}</h1>

        <div className={styles.content}>
          <div className={styles.counterContainer}>
            <h2 className={styles.contentTitle}>{'Стандарт'}</h2>

            <div className={styles.info}>
              <div className={styles.contentImgContainer}>
                <Image src={'/equip/counter.png'} alt={'Спецназовец стандар'} fill />
              </div>

              <ul className={classNames(styles.descriptionBlock, styles.left)}>
                <li>Привод M4 CQB / AK-105</li>
                <li>Тактический шлем</li>
                <li>Защитные очки</li>
                <li>Балаклава</li>
                <li>Маска для лица</li>
                <li>Тактический костюм</li>
                <li>Тактические перчатки</li>
              </ul>
            </div>
          </div>

          <div className={styles.counterContainer}>
            <h2 className={styles.contentTitle}>{'Vip'}</h2>

            <div className={styles.info}>
              <div className={styles.contentImgContainer}>
                <Image src={'/equip/terr.png'} alt={'Терр Vip'} fill />
              </div>

              <ul className={classNames(styles.descriptionBlock, styles.right)}>
                <li>Бронежилет</li>
                <li>Тактический пояс с двумя дополнительными магазинами</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
