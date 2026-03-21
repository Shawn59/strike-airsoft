'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './SwiperImage.module.scss';

export const SwiperImage = ({ data }) => {
  if (!data) return;

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // не отключать автоплей после ручного переключения
          pauseOnMouseEnter: true, // пауза при наведении мыши
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slideContent}>
              <Image fill src={slide.img} alt={slide.label} priority={slide.id === 1} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
