import styles from './RecordPageView.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { RecordCardList } from '@/widgets/RecordCard/lib/RecordCardData';
import { RecordCard } from '@/widgets/RecordCard/ui/RecordCard';
import dynamic from 'next/dynamic';
import { RecordModal } from '@/entities';

//const RecordModal = dynamic(() => import('@/entities').then((mod) => mod.RecordModal), { ssr: false });

export const RecordPageView = () => {
  return (
    <div className={styles.recordPageView}>
      <ContentLayout>
        <h1 className={styles.title}>{'Выбор за тобой!'}</h1>

        <div className={styles.content}>
          <div className={styles.recordCardsContainer}>
            {RecordCardList.map((item) => {
              return (
                <div key={item.id} className={styles.recordCardBlock}>
                  <RecordCard data={item} />

                  <RecordModal typeGame={item.typeGame} />
                </div>
              );
            })}
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
