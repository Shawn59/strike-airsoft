import { Prisma } from '.prisma/client';
import RecordCreateManyInput = Prisma.RecordCreateManyInput;

interface DateObjectType {
  date: string;
  status: boolean;
}

export interface IHolidaysData {
  holidays: DateObjectType[];
  time: string;
  record: RecordCreateManyInput[];
}

export type GetObjectType = () => Promise<IHolidaysData>;
