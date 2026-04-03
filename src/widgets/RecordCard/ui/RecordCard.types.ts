export interface IRecordCardDataItem {
  id: number;
  typeGame: 'free' | 'friend';
  title: string;
  description: string;
  countPeople: string;
  durationGame: string;
  src: string;
}

export interface IRecordCardData {
  data: IRecordCardDataItem;
}
