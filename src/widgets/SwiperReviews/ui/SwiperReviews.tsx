'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from './SwiperReviews.module.scss';
import { ReviewCard } from '@/widgets/ReviewCard/ui/ReviewCard';
import { useFetchReviewsQuery } from '@/store/reviewsSlice/reviewsSlice';
import { SwiperReviewsSkeletons } from '@/widgets/SwiperReviews/ui/components/SwiperReviewsSkeletons/SwiperReviewsSkeletons';
import { useEffect } from 'react';

export const SwiperReviews = () => {
  const { data: reviews } = useFetchReviewsQuery();

  if (!reviews) {
    return <SwiperReviewsSkeletons />;
  }

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        spaceBetween={32}
        slidesPerView={'auto'}
        breakpoints={{
          0: {
            spaceBetween: 24,
          },
          1200: {
            spaceBetween: 32,
          },
        }}
      >
        {reviews.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <ReviewCard data={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
