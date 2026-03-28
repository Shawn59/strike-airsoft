import { Metadata } from 'next';
import { RecordPageView } from '@/views';

export const metadata: Metadata = {
  title: 'CounterStrikeBall - Запись',
  description: 'Записаться на игру',
  metadataBase: new URL('https://www.counterstrikeball.ru'),
  alternates: {
    canonical: '/record'
  }
}

/*export const dynamic = 'force-dynamic';*/

export default RecordPageView;
