import { Metadata } from 'next';
import { CostPageView } from '@/views';

export const metadata: Metadata = {
  title: 'CounterStrikeBall - Стоимость',
  description: 'Стоимость и скидки на игру',
  alternates: {
    canonical: '/cost',
  },
};

export default CostPageView;
