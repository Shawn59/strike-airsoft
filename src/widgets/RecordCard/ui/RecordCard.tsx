import { FC } from 'react';
import type { IRecordCardData } from '@/widgets/RecordCard/ui/RecordCard.types';
import Image from 'next/image';
import styles from './RecordCard.module.scss';

export const RecordCard: FC<IRecordCardData> = ({ data }) => {
  return (
    <div className={styles.recordCard}>
      <div className={styles.imageContainer}>
        <Image src={data.src} width={0} height={0} layout="responsive" loading={'eager'} alt={data.title} />
      </div>

      <div className={styles.recordContent}>
        <h2 className={styles.title}>{data.title}</h2>

        <span className={styles.description}>{data.description}</span>

        <div className={styles.footer}>
          <div className={styles.footerTitle}>
            {'Количество участников:'}
            <span className={styles.footerValue}>{data.countPeople}</span>
          </div>

          <div className={styles.footerTitle}>
            {'Длительность игры:'}
            <span className={styles.footerValue}>{data.durationGame}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
