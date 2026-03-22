import { Metadata } from 'next';
import { VideoPageView } from '@/views';

export const metadata: Metadata = {
  title: 'CounterStrikeBall - Видео',
  description: 'Видео с игры и воскресок',
  metadataBase: new URL('https://www.counterstrikeball.ru'),
  alternates: {
    canonical: '/video',
  },
};

export default VideoPageView;
