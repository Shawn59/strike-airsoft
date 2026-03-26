import styles from './ContactPageView.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { MapContact } from '@/features/MapContact';
import { contactData } from '@/views/ContactPageView/lib/contactData';
import PhoneIcon from '@mui/icons-material/PhoneAndroid';
import Image from 'next/image';

export const ContactPageView = () => {
  return (
    <div className={styles.contactPageView}>
      <ContentLayout>
        <h1 className={styles.title}>{'Контакты'}</h1>

        <div className={styles.content}>
          <div className={styles.mapContainer}>
            <MapContact defaultGeometry={contactData.defaultGeometry} />
          </div>

          <div className={styles.contactsContainer}>
            <a href={'tel:79026425957'} className={styles.phoneContainer}>
              <PhoneIcon className={styles.phoneIcon} />

              <span>{'+7 (902) 642 59 57'}</span>
            </a>

            <a href={'https://vk.com/strikeball59css'} target={'_blank'} className={styles.vkContainer}>
              <Image src={'/vk.svg'} className={styles.vkIcon} width={50} height={50} alt={'вк'} />

              <span>{'Вконтакте'}</span>
            </a>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
