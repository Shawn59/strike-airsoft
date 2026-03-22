import styles from './ContentLayout.module.scss';
import classNames from 'classnames';

export const ContentLayout = async ({ isSwiper, children }) => {
  return (
    <div className={styles.contentLayout}>
      <div className={classNames(styles.contentContainer, isSwiper && styles.isSwiper)}>{children}</div>
    </div>
  );
};
