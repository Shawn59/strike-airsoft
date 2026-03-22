import styles from '@/views/VideoPageView/ui/VideoPageView.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';

export const ContactPageView = () => {
  return (
    <div className={styles.videoPageView}>
      <ContentLayout>
        <h1 className={styles.title}>{'Контакты'}</h1>

        <div className={styles.content}></div>
      </ContentLayout>
    </div>
  );
};
