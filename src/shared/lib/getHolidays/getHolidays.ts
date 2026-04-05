import dayjs from 'dayjs';
import { GetObjectType } from './types';
import { prisma } from '@/lib/prisma';

export const getHolidays: GetObjectType = async () => {
  const currentYear = new Date().getFullYear();

  // 1. Получаем данные о праздниках (здесь тоже возможна ошибка)
  let holidaysString = '';
  /* try {
    const response = await fetch(`https://isdayoff.ru/api/getdata?year=${currentYear}&cc=ru&pre=0&covid=0&sd=0`);
    holidaysString = await response.text();
  } catch (fetchError) {
    console.error('Ошибка загрузки праздников:', fetchError);
    holidaysString = '0'.repeat(365); // fallback: все дни рабочие
  }*/

  // 2. Получаем данные из БД с обработкой ошибки
  let records = [];
  try {
    records = await prisma?.record?.findMany();
  } catch (dbError) {
    console.error('Ошибка доступа к базе данных:', dbError);
    // Не падаем, возвращаем пустой массив
    records = [];
  }

  return {
    holidays: holidaysString.split('').map((status, index) => {
      return {
        date: dayjs(new Date(currentYear, 0, 1))
          .add(index, 'day')
          .format('DD.MM.YYYY'),
        status: status !== '0',
      };
    }),
    time: dayjs().toISOString(),
    record: records, // теперь всегда массив, даже при ошибке
  };
};

export function getSundays(year: number = new Date().getFullYear()): string[] {
  const sundays: string[] = [];
  // Первый день года
  const firstDay = new Date(Date.UTC(year, 0, 1));
  // Находим первое воскресенье (getDay() === 0)
  const firstSunday = new Date(firstDay);
  firstSunday.setUTCDate(firstDay.getUTCDate() + ((7 - firstDay.getUTCDay()) % 7));

  // Перебираем все воскресенья, пока год не изменится
  const current = new Date(firstSunday);
  while (current.getUTCFullYear() === year) {
    // Форматируем дату в dd.mm.yyyy
    const day = String(current.getUTCDate()).padStart(2, '0');
    const month = String(current.getUTCMonth() + 1).padStart(2, '0');
    const formatted = `${day}.${month}.${year}`;
    sundays.push(formatted);
    // Переходим к следующему воскресенью (+7 дней)
    current.setUTCDate(current.getUTCDate() + 7);
  }
  return sundays;
}
