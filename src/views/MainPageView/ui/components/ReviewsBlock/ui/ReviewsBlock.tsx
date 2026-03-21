'use client';
import { FC, useEffect } from 'react';
import { useFetchReviewsMutation } from '@/store/reviewsSlice/reviewsSlice';
import { ReviewCard } from '@/widgets/ReviewCard/ui/ReviewCard';

export const Reviews: FC = () => {
  const [trigger, { data: reviews }] = useFetchReviewsMutation();
  if (!Array.isArray(reviews)) return;

  console.log('reviews = ', reviews);

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <div>
      {reviews.map((item) => {
        return <ReviewCard data={item} />;
      })}
    </div>
  );
};
