'use client';

import styles from './SwiperVideo.module.scss';
//import { IFrame } from '@/shared';
import dynamic from 'next/dynamic';
const IFrame = dynamic(() => import('@/shared').then((mod) => mod.IFrame), {
  ssr: false,
});

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
  );
};
