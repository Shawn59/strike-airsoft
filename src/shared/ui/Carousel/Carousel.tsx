'use client';
import { carouselData } from '@/views/MainPageView/lib/InfoBlockData';
import Image from 'next/image';
import { Carousel } from 'antd';
import { CSSProperties, FC } from 'react';
import { DotPlacement } from 'antd/es/carousel';
import styles from './Carousel.module.scss';

interface ICarouselSlick {
  dotPlacement?: DotPlacement;
  autoplaySpeed?: number;
  style?: CSSProperties;
  autoplay?: boolean;
  arrows?: boolean;
}

export const CarouselSlick: FC<ICarouselSlick> = ({
  autoplaySpeed = 3000,
  dotPlacement = 'bottom',
  style,
  autoplay = true,
  arrows,
}) => {
  return (
    <Carousel
      className={styles.carousel}
      arrows={arrows}
      autoplay={autoplay}
      autoplaySpeed={autoplaySpeed}
      dotPlacement={dotPlacement as DotPlacement}
      style={style}
    >
      {carouselData.map((item, index) => (
        <Image key={item.id} src={item.img} alt={item.label} width={0} height={0} layout={'responsive'} />
      ))}
    </Carousel>
  );
};
