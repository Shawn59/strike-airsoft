import styles from './GreetingBlock.module.scss';
import { ContentLayout } from '@/widgets/Layouts/ui/ContentLayout';
import Image from 'next/image';

export const GreetingBlock = () => {
  return (
    <div className={styles.greetingBlock}>
      <ContentLayout>
        <h1 className={styles.title}>
          Играй
          <br />
          вживую!
        </h1>

        <Image src={'/bigLogo.svg'} className={styles.longLogo} alt={'логотип кс 2'} width={455} height={68} priority />
      </ContentLayout>
    </div>
  );
};
