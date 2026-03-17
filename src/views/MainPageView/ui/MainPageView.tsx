'use server';

import { GreetingBlock } from '@/views/MainPageView/ui/components/GreetingBlock/GreetingBlock';
import { InfoBlock } from '@/views/MainPageView/ui/components/InfoBlock/InfoBlock';

export const MainPageView = async () => {
  return (
    <>
      <GreetingBlock />

      <InfoBlock />
    </>
  );
};
