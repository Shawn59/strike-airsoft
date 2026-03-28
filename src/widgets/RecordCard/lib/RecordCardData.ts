import { IRecordCardDataItem } from '@/widgets/RecordCard/ui/RecordCard.types';

export const RecordCardList: IRecordCardDataItem[] = [
  {
    id: 1,
    src: '/record/freePlay.jpg',
    title: '«Одиночная» открытая игра',
    description:
      'Открытая игра проводится каждое воскресенье в 14:00 для игроков, у которых не получается набрать свою компанию для игры.',
    countPeople: 'до 16',
    durationGame: '2 часа',
  },
  {
    id: 2,
    src: '/record/friendPlay.jpg',
    title: '«Многопользовательская» игра с друзьями',
    description:
      'Опыт, который запомнится надолго! Хочется ярких ощущений? Пригоняйте к нам играть в страйкбол: польза для тела и ума, сплочение в команде с друзьями и, конечно, куча адреналина! Играйте с друзьями, соберите свою команду. Оплата зависит от количества игроков.',
    countPeople: 'от 8 до 16',
    durationGame: '2 часа',
  },
];
