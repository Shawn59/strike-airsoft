import styles from './InfoBlock.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { descriptionData } from '@/views/MainPageView/lib/InfoBlockData';
import { SwiperImage } from '@/widgets/Swipers/ui/SwiperImage';
import { carouselData } from '@/views/MainPageView/lib/InfoBlockData';

export const InfoBlock = () => {
  return (
    <div className={styles.infoBlock}>
      <ContentLayout>
        <div className={styles.blockContainer}>
          <div className={styles.leftBlock}>{<SwiperImage data={carouselData} />}</div>

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
