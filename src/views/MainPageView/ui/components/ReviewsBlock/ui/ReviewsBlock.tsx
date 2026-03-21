'use client';
import { FC, useEffect } from 'react';
import { useFetchReviewsMutation } from '@/store/reviewsSlice/reviewsSlice';
import { ReviewCard } from '@/widgets/ReviewCard/ui/ReviewCard';

export const ReviewsBlock: FC = () => {
  const [trigger, { data: reviews }] = useFetchReviewsMutation();

  console.log('reviews = ', reviews);

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    reviews && (
      <div>
        {reviews?.map((item) => {
          return <ReviewCard key={item.id} data={item} />;
        })}
      </div>
    )
  );
};
