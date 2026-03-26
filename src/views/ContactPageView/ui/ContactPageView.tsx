import styles from './ContactPageView.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { MapContact } from '@/features/MapContact';
import { contactData } from '@/views/ContactPageView/lib/contactData';
import PhoneIcon from '@mui/icons-material/PhoneAndroid';

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
            {/*  <Link href={'https://vk.com/strikeball59css'}>
              <Flex style={flex} justify={'flex-start'}>
                <Icon style={icon} component={Vk} />
                Вконтакте
              </Flex>
            </Link>
            <Link href={'https://www.tiktok.com/@counterstrikeball_perm?_t=ZN-8sx16OkPacw&_r=1'}>
              <Flex style={flex} justify={'flex-start'}>
                <TikTokFilled style={icon} />
                TikTok
              </Flex>
            </Link>
            <Link href={'https://www.youtube.com/@CounterStrikeBall_Perm'}>
              <Flex style={lastFlex} justify={'flex-start'}>
                <YoutubeFilled style={icon} />
                Youtube
              </Flex>
            </Link>*/}
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
