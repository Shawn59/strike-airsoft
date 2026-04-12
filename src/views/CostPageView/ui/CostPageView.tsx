import styles from './CostPageView.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import { costData } from '@/views/CostPageView/lib/costData';
import { Button } from '@/shared';
import classNames from 'classnames';

export const CostPageView = async () => {
  return (
    <div className={styles.costPageView}>
      <ContentLayout>
        <h1 className={styles.title}>{'Стоимость!'}</h1>
        <div className={styles.content}>
          <div className={styles.priceTableDesk}>
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
                  <div className={styles.item}>{item.name}</div>
                  <div className={styles.item}>{item.price}</div>
                  <div className={styles.item}>{item.priceHol}</div>
                </div>
              );
            })}
          </div>

          <div className={styles.priceTableMobile}>
            <div className={styles.tableTitle}>{costData.headers[1]}</div>

            <div className={styles.row}>
              <div className={styles.item}>{`${costData.cells[0].name} экипировка`}</div>
              <div className={classNames(styles.item, styles.price)}>{costData.cells[0].price}</div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>{`${costData.cells[1].name} экипировка`}</div>
              <div className={classNames(styles.item, styles.price)}>{costData.cells[1].price}</div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>{`${costData.cells[2].name} экипировка`}</div>
              <div className={classNames(styles.item, styles.price)}>{costData.cells[2].price}</div>
            </div>

            <div className={styles.tableTitle}>{costData.headers[2]}</div>

            <div className={styles.row}>
              <div className={styles.item}>{`${costData.cells[0].name} экипировка`}</div>
              <div className={classNames(styles.item, styles.price)}>{costData.cells[0].priceHol}</div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>{`${costData.cells[1].name} экипировка`}</div>
              <div className={classNames(styles.item, styles.price)}>{costData.cells[1].priceHol}</div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>{`${costData.cells[2].name} экипировка`}</div>
              <div className={classNames(styles.item, styles.price)}>{costData.cells[2].priceHol}</div>
            </div>
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
