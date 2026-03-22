import React, { FC } from 'react';
import styles from './ReviewCard.module.scss';
import { Divider, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import { IReviewCard } from '@/widgets/ReviewCard/ui/ReviewCard.type';

export const ReviewCard: FC<IReviewCard> = ({ data }) => {
  if (!data) return;

  return (
    <div className={styles.reviewCard}>
      <div className={styles.headerContainer}>
        <div className={styles.nameContainer}>
          <Image alt={'аватар'} className={styles.avatar} width={48} height={48} src={data.img || '/review/user.svg'} />

          <Typography className={styles.name} noWrap>
            {data.authorName}
          </Typography>
        </div>

        <Rating className={styles.rating} readOnly name="size-large" defaultValue={data.rating} size="large" />
      </div>

      <Divider className={styles.divider} />

      <div className={styles.text}>{data.text}</div>

      <div className={styles.logoContainer}>
        <img
          loading={'lazy'}
          alt={data.from === '2GIS' ? 'Логотип 2GIS' : 'Логотип Яндекс карт'}
          src={data.from === '2GIS' ? '/review/2GIS.svg' : '/review/yandexMaps.svg'}
        />
      </div>
    </div>
  );
};
