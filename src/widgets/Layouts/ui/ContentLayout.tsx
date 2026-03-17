import styles from './ContentLayout.module.scss';

export const ContentLayout = async ({ children }) => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};
