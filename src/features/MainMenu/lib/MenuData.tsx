import {MenuDataArrayType} from "./types";
import {menuTheme} from "../ui/menuTheme";
import Play from "../ui/images/play.svg"
import Equip from "../ui/images/equip.svg"
import Video from "../ui/images/video.svg"
import Cost from "../ui/images/cost.svg"
import Contact from "../ui/images/contact.svg"

const {primaryIcon} = menuTheme;

export const menuData:MenuDataArrayType = [
  {
    label: 'Записаться',
    key: '0',
    MyIcon: Play,
    dopStyle: primaryIcon,
    link: '/record'
  },
  {
    label: 'Экипировка',
    key: '1',
    MyIcon: Equip,
    link: '/equip'
  },
  {
    label: 'Видео с игр',
    key: '2',
    MyIcon: Video,
    link: '/video'
  },
  {
    label: 'Стоимость',
    key: '3',
    MyIcon:  Cost,
    link: '/cost'
  },
  {
    label: 'Контакты',
    key: '6',
    MyIcon: Contact,
    link: '/contact'
  }
];