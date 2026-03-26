'use client';

import styles from './SwiperVideo.module.scss';
import { IFrame } from '@/shared';

const videoList = [
  'https://vk.com/video_ext.php?oid=-220256056&id=456239018&hd=2&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240259&hd=2&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240258&hd=1&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240257&hd=1&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240205&hd=1&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240233&hd=1&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456240021&hd=1&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239897&hd=1&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239881&hd=1&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239880&hd=1&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239833&hd=1&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239790&hd=1&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239752&hd=1&autoplay=0',
  'https://vk.com/clip_ext.php?oid=-220256056&id=456239650&hd=1&autoplay=0',
];

export const SwiperVideo = () => {
  return (
    <div className={styles.contentContainer}>
      {videoList.map((video, index) => (
        <div key={index} className={styles.slide}>
          <IFrame src={video} />
        </div>
      ))}
    </div>
    /*<Swiper
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
    </Swiper>*/
  );
};
