'use server';

import { GreetingBlock } from '@/views/MainPageView/ui/components/GreetingBlock/GreetingBlock';
import { InfoBlock } from '@/views/MainPageView/ui/components/InfoBlock/InfoBlock';
import styles from './MainPageView.module.scss';
import { RulesBlock } from '@/views/MainPageView/ui/components/RulesBlock/RulesBlock';

export const MainPageView = async () => {
  return (
    <>
      <GreetingBlock />

      <div className={styles.mainContent}>
        <InfoBlock />

        <RulesBlock />
      </div>
    </>
  );
};
