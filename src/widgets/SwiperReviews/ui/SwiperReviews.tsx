'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from './SwiperReviews.module.scss';
import { useEffect } from 'react';
import { ReviewCard } from '@/widgets/ReviewCard/ui/ReviewCard';
import { useFetchReviewsMutation } from '@/store/reviewsSlice/reviewsSlice';
import { SwiperReviewsSkeletons } from '@/widgets/SwiperReviews/ui/components/SwiperReviewsSkeletons/SwiperReviewsSkeletons';

export const SwiperReviews = () => {
  const [trigger, { data: reviews }] = useFetchReviewsMutation();

  useEffect(() => {
    trigger();
  }, [trigger]);

  if (!reviews) {
    return <SwiperReviewsSkeletons />;
  }

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // не отключать автоплей после ручного переключения
          pauseOnMouseEnter: true, // пауза при наведении мыши
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
