import type { IMenuData } from './types';
import PlaySvg from '../ui/images/play.svg';
import EquipSvg from '../ui/images/equip.svg';
import VideoSvg from '../ui/images/video.svg';
import CostSvg from '../ui/images/cost.svg';
import ContactSvg from '../ui/images/contact.svg';

export const menuData: IMenuData[] = [
  {
    id: 1,
    label: 'Записаться',
    iconSrc: PlaySvg,
    link: '/record',
  },
  {
    id: 2,
    label: 'Экипировка',
    iconSrc: EquipSvg,
    link: '/equip',
  },
  {
    id: 3,
    label: 'Видео с игр',
    iconSrc: VideoSvg,
    link: '/video',
  },
  {
    id: 4,
    label: 'Стоимость',
    iconSrc: CostSvg,
    link: '/cost',
  },
  {
    id: 5,
    label: 'Контакты',
    iconSrc: ContactSvg,
    link: '/contact',
  },
];
