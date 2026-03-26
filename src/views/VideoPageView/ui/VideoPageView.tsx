import styles from './VideoPageView.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { SwiperVideo } from '@/widgets/SwiperVideo/SwiperVideo';

export const VideoPageView = async () => {
  return (
    <div className={styles.videoPageView}>
      <ContentLayout>
        <h1 className={styles.title}>{'Видео с игр'}</h1>

        <div className={styles.content}>
          <SwiperVideo />
        </div>
      </ContentLayout>
    </div>
  );
};
