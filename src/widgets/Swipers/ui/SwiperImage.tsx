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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // не отключать автоплей после ручного переключения
          pauseOnMouseEnter: true, // пауза при наведении мыши
        }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={12}
        breakpoints={{
          320: {
            slidesPerView: 'auto',
          },
          1200: {
            slidesPerView: 1, // один слайд на весь экран
            loop: true, // свободная прокрутка с инерцией
          },
        }}
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div className={styles.slideContent}>
              <Image fill src={slide.img} alt={slide.label} priority={slide.id === 1} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
