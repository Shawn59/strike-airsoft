import styles from './RecordPageView.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { RecordCardList } from '@/widgets/RecordCard/lib/RecordCardData';
import { RecordCard } from '@/widgets/RecordCard/ui/RecordCard';
import { RecordModal } from '@/entities';
import { getHolidays } from '@/shared/lib/getHolidays/getHolidays';

export const RecordPageView = async () => {
  const holidays = await getHolidays();

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

                  <RecordModal typeGame={item.typeGame} holidays={holidays} />
                </div>
              );
            })}
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
