import styles from './InfoBlock.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { carouselData, descriptionData } from '@/views/MainPageView/lib/InfoBlockData';
import { CarouselWrapper } from '@/shared/Car';

export const InfoBlock = () => {
  return (
    <div className={styles.infoBlock}>
      <ContentLayout>
        <div className={styles.blockContainer}>
          <div className={styles.leftBlock}>
            <CarouselWrapper />
          </div>

          <div className={styles.rightBlock}>
            <h1 className={styles.title}>{'О нас'}</h1>

            <div className={styles.description}>
              {descriptionData.map((value, index) => {
                return <p key={index}>{value}</p>;
              })}
            </div>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
