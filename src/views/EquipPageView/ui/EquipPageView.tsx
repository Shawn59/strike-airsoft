import styles from './EquipPageView.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import Image from 'next/image';
import classNames from 'classnames';
import { Button } from '@/shared/ui/Button/Button';

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
                <Image src={'/equip/ks-logo.png'} className={styles.logo} alt={'Спецназовец стандар'} fill />
                <Image src={'/equip/ks-solder.png'} alt={'Спецназовец стандар'} fill />
              </div>

              <ul className={styles.descriptionBlock}>
                <li>Привод M4 CQB / AK-105</li>
                <li>Тактический шлем</li>
                <li>Защитные очки</li>
                <li>Балаклава</li>
                <li>Маска для лица</li>
                <li>Тактический костюм</li>
                <li>Тактические перчатки</li>
              </ul>

              <div className={styles.contentImgContainer}>
                <Image src={'/equip/ter-logo.png'} className={styles.logo} alt={'Спецназовец стандар'} fill />
                <Image src={'/equip/ter-solder.png'} alt={'Спецназовец стандар'} fill />
              </div>
            </div>
          </div>

          <div className={styles.counterContainer}>
            <h2 className={styles.contentTitle}>{'Vip'}</h2>

            <div className={styles.info}>
              <div className={styles.contentImgContainer}>
                <Image src={'/equip/ks-logo.png'} className={styles.logo} alt={'Спецназовец стандар'} fill />
                <Image src={'/equip/ks-solder-vip.png'} alt={'Спецназовец стандар'} fill />
              </div>

              <ul className={styles.descriptionBlock}>
                <li>Привод M4 CQB / AK-105</li>
                <li>Тактический шлем</li>
                <li>Защитные очки</li>
                <li>Балаклава</li>
                <li>Маска для лица</li>
                <li>Тактический костюм</li>
                <li>Тактические перчатки</li>
                <li className={styles.orange}>Бронежилет</li>
                <li className={styles.orange}>Тактический пояс с двумя дополнительными магазинами</li>
              </ul>

              <div className={styles.contentImgContainer}>
                <Image src={'/equip/ter-logo.png'} className={styles.logo} alt={'Спецназовец стандар'} fill />
                <Image src={'/equip/ter-solder-vip.png'} alt={'Спецназовец стандар'} fill />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.btnRecordContainer}>
          <Button className={styles.btnRecord} label={'Записаться'} href={'/record'} />
        </div>
      </ContentLayout>
    </div>
  );
};
