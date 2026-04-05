import styles from './CostPageView.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { costData } from '@/views/CostPageView/lib/costData';
import { Button } from '@/shared';

export const CostPageView = async () => {
  return (
    <div className={styles.costPageView}>
      <ContentLayout>
        <h1 className={styles.title}>{'Стоимость!'}</h1>
        <div className={styles.content}>
          <div className={styles.priceTable}>
            <div className={styles.row}>
              {costData.headers.map((item, index) => {
                return (
                  <div key={index} className={styles.headerDesk}>
                    {item}
                  </div>
                );
              })}
            </div>

            {costData.cells.map((item, index) => {
              return (
                <div className={styles.row} key={index}>
                  <div className={styles.headerMob}>{costData.headers[index]}</div>
                  <div className={styles.item}>{item.name}</div>
                  <div className={styles.item}>{item.price}</div>
                  <div className={styles.item}>{item.priceHol}</div>
                </div>
              );
            })}
          </div>

          <div className={styles.sale}>
            <p className={styles.saleTitle}>{'Скидки:'}</p>
            <ul>
              <li>{'Именинники: 20% имениннику и по 10% каждому другу'}</li>
              <li>{'Студенты: 10% при предъявлении студенческого билета'}</li>
              <li>{'Сертификат: 20% всем Выбрать можно только одну скидку!'}</li>
            </ul>
            <p>{'Выбрать можно только одну скидку!'}</p>
          </div>

          <div className={styles.btnRecordContainer}>
            <Button className={styles.btnRecord} label={'Записаться'} href={'/record'} />
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
