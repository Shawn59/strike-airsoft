import dayjs from "dayjs";
import {GetObjectType} from "./types";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getHolidays:GetObjectType = async () => {
  const currentYear = new Date().getFullYear();
  const response = await fetch(`https://isdayoff.ru/api/getdata?year=${currentYear}&cc=ru&pre=0&covid=0&sd=0`);
  const holidays = await response.text()

  const record = await prisma.record.findMany()

  return {
    holidays: holidays.split('').map((status, index) => {
      return {
        date: dayjs(new Date(currentYear, 0, 1)).add(index, 'day').format('DD.MM.YYYY'),
        status: status !== "0",
      };
    }),
    time: dayjs().toISOString(),
    record
  }
}