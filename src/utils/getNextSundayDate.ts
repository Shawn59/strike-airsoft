import dayjs from 'dayjs';
import 'dayjs/locale/ru'; // если нужна локализация
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

export const getNextSundayDate = () => {
  const now = dayjs().tz('Asia/Yekaterinburg'); // UTC+5
  let daysUntilSunday = (7 - now.day()) % 7;
  if (daysUntilSunday === 0) {
    daysUntilSunday = 7;
  }
  const nextSunday = now.add(daysUntilSunday, 'day').hour(14).minute(0).second(0).millisecond(0);
  return nextSunday.format('DD.MM.YYYY HH:mm');
};
