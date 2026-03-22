import React, { FC } from 'react';
import styles from './ReviewsBlock.module.scss';
import { DynamicSwiperReviews } from '@/widgets/SwiperReviews/ui/DynamicSwiperReviews';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';

export const ReviewsBlock: FC = () => {
  return (
    <div className={styles.reviewsBlock}>
      <ContentLayout isSwiper>
        <div>
          <h1 className={styles.title}>{'Отзывы '}</h1>

          <DynamicSwiperReviews />
        </div>
      </ContentLayout>
    </div>
  );
};
