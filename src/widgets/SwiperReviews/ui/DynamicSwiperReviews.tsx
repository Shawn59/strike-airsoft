'use client';

import dynamic from 'next/dynamic';
import { SwiperReviewsSkeletons } from '@/widgets/SwiperReviews/ui/components/SwiperReviewsSkeletons/SwiperReviewsSkeletons';

const SwiperReviews = dynamic(() => import('@/widgets/SwiperReviews').then((mod) => mod.SwiperReviews), {
  ssr: false,
  loading: () => <SwiperReviewsSkeletons />,
});

export const DynamicSwiperReviews = () => {
  return <SwiperReviews />;
};
