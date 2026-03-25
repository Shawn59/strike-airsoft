'use client';

import styles from './SwiperVideo.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { IFrame } from '@/shared';

const videoList = [
  'https://vk.com/video_ext.php?oid=-220256056&id=456239018',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240259',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240258',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240257',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240205',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240233',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240021',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239897',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239881',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239880',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239833',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239790',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239752',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239650',
];

export const SwiperVideo = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
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
