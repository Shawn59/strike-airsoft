import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dayjs from 'dayjs';
import { statusList } from '@/shared/api/baseService';
import { prisma } from '@/lib/prisma';

const { internalServerError } = statusList;
const status: globalThis.ResponseInit = { status: internalServerError };
const { VERSION, ADMIN_MAIL, ADMIN_MAIL_PASS, BUSINESS_MAIL, BUSINESS_MAIL_PASS } = process.env;

const cred =
  VERSION === 'dev'
    ? {
        user: ADMIN_MAIL,
        pass: ADMIN_MAIL_PASS,
      }
    : {
        user: BUSINESS_MAIL,
        pass: BUSINESS_MAIL_PASS,
      };

export async function POST(req: NextRequest) {
  try {
    const { data } = await req.json();

    // console.log('data = ', data);

    const { name: nameCommand, typeGame, phone, countPeople, standard, vip, date, rent, time } = data;

    //TODO: запись в бд
    //свободная игра не записывается в БД
    if (typeGame !== 'free' && date && time && prisma?.record) {
      const [day, month, year] = date.split('.').map(Number);
      const [hours, minutes] = time.split(':').map(Number);
      const dateTime = new Date(Date.UTC(year, month - 1, day, hours, minutes));

      if (isNaN(dateTime.getTime())) {
        return NextResponse.json({ message: 'Некорректная дата или время' }, status);
      }

      const startTime = new Date(dateTime.getTime() - 2 * 60 * 60 * 1000);
      const endTime = new Date(dateTime.getTime() + 2 * 60 * 60 * 1000);

      /*    console.log('dateTime = ', dateTime);
      console.log('endTime = ', endTime);*/

      //проверка на существования записи по дате
      const existingRecords = await prisma?.record?.findMany({
        where: {
          date: {
            gte: startTime,
            lte: endTime,
          },
        },
      });

      if (existingRecords.length > 0) {
        return NextResponse.json({ message: 'Выбранное время пересекается с существующей записью' }, status);
      }

      await prisma.record.create({
        data: {
          date: dateTime,
        },
      });
    }

    if (!cred.user || !cred.pass) {
      console.error('Email credentials missing');
      return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: cred,
    });

    /* const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'guillermo76@ethereal.email',
        pass: '4kqSGg7sRzgmjFJzrN',
      },
    });*/

    await transporter.sendMail({
      from: cred.user,
      to: cred.user,
      subject: 'Запись на игру',
      text: `
        Тип игры: ${typeGame === 'free' || typeGame === 'freePlay' ? 'открытая' : 'с друзьями'}\n
        Имя или название команды: ${nameCommand}\n
        Телефон: +7${phone}\n
        Количество человек: ${countPeople}\n
        Аренда снаряжения: ${standard && vip ? 'Оба типа экипировки' : standard ? 'Стандартная экипировка' : vip ? 'VIP Экипировка' : !rent ? 'Аренда не требуется' : 'Требуется аренда'}\n
        Дата: ${date ? date : dayjs().day(7).format('DD.MM.YYYY')}${time ? '\n' : ''}
        ${time ? `Время: ${time}` : ''}
      `,
    });

    return NextResponse.json({ message: 'Запись успешно выполнена!!!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending email' }, status);
  }
}
