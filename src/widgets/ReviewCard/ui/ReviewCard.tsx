import React, { FC } from 'react';
import styles from './ReviewCard.module.scss';
import { Rating } from '@mui/material';
import { IReviewerData } from '@/store/reviewsSlice/reviewsSlice';
import Image from 'next/image';

interface IReviewCard {
  data: IReviewerData;
}

export const ReviewCard: FC<IReviewCard> = ({ data }) => {
  if (!data) return;

  return (
    <div className={styles.reviewCard}>
      <div>
        <Image alt={'Аватарка пользователя'} width={48} height={48} src={data.img || '/review/user.svg'} />
        <span>
          <b>{data.authorName}</b>
        </span>
        <Rating readOnly name="size-large" defaultValue={data.rating} size="large" />
      </div>

      <div>{data.text}</div>
    </div>
  );
};
