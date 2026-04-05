import styles from './RecordPageView.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { RecordCardList } from '@/widgets/RecordCard/lib/RecordCardData';
import { RecordCard } from '@/widgets/RecordCard/ui/RecordCard';
import { RecordModal } from '@/entities';
import { getHolidays } from '@/shared/lib/getHolidays/getHolidays';
import Link from 'next/link';

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

        <div className={styles.rule}>
          Перед игрой необходимо заполнить анкету, поэтому мы рекомендуем приходить за 30—40 минут до начала игры. Если
          по каким—то причинам у вас не получается посетить игру, просим предупреждать нас за 24 часа до начала игры{' '}
          <Link href={'/contact'}>{'в сообщениях группы, либо по телефону.'}</Link>
        </div>
      </ContentLayout>
    </div>
  );
};
