'use client';

import dynamic from 'next/dynamic';

// Динамический импорт с ssr:false внутри клиентского компонента
const CarouselSlick = dynamic(() => import('@/shared/ui/Carousel/Carousel').then((mod) => mod.CarouselSlick), {
  ssr: false,
});

export const CarouselWrapper = () => {
  return <CarouselSlick />;
};
