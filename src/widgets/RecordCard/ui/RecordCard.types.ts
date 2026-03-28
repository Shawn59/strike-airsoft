export interface IRecordCardDataItem {
  id: number;
  title: string;
  description: string;
  countPeople: string;
  durationGame: string;
  src: string;
}

export interface IRecordCardData {
  data: IRecordCardDataItem;
}
