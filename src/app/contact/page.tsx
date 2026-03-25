import { Metadata } from 'next';
import { ContactPageView } from '@/views';

export const metadata: Metadata = {
  title: 'CounterStrikeBall - Контакты',
  description: 'Контакты организации',
  metadataBase: new URL('https://www.counterstrikeball.ru'),
  alternates: {
    canonical: '/video',
  },
};

export default ContactPageView;
