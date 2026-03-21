import styles from './RulesBlock.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { rulesBlockData } from '@/views/MainPageView/lib/rulesBlockData';
import React from 'react';

const RuleCard = React.memo(({ data }) => {
  return (
    <div className={styles.ruleCard}>
      <h2 className={styles.cardTitle}>{data.title}</h2>

      <ul className={styles.content}>
        {data.list.map((rule) => {
          return <li key={rule.id}>{rule.text}</li>;
        })}
      </ul>
    </div>
  );
});

export const RulesBlock = () => {
  return (
    <div className={styles.rulesBlock}>
      <ContentLayout>
        <div className={styles.blockContainer}>
          <h1 className={styles.title}>{'Правила игры'}</h1>

          <div className={styles.cardContainer}>
            {rulesBlockData.map((item) => {
              return <RuleCard key={item.title} data={item} />;
            })}
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
