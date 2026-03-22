'use client';

import styles from './SwiperVideo.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IFrame } from '@/shared';

const videoList = [
  'https://vk.com/video_ext.php?oid=-220256056&id=456239018',
  'https://www.youtube.com/embed/KgAJ0DgrUGI',
  'https://www.youtube.com/embed/13wvp1-3G0w',
  'https://www.youtube.com/embed/mLTDMikQAo8',
];

export const SwiperVideo = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 233000,
        disableOnInteraction: false, // не отключать автоплей после ручного переключения
        pauseOnMouseEnter: true, // пауза при наведении мыши
      }}
      pagination={{ clickable: true }}
      navigation
      slidesPerView={'auto'}
      className={styles.swiperContainer}
      spaceBetween={24}
    >
      {videoList.map((video, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <IFrame src={video} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
