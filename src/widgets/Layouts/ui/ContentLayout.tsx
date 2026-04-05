import styles from './ContentLayout.module.scss';
import classNames from 'classnames';
import { FC } from 'react';

interface IContentLayout {
  isSwiper?: boolean;
  children: React.ReactNode;
}

export const ContentLayout: FC<IContentLayout> = async ({ isSwiper, children }) => {
  return (
    <div className={styles.contentLayout}>
      <div className={classNames(styles.contentContainer, isSwiper && styles.isSwiper)}>{children}</div>
    </div>
  );
};
