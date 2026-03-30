import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';
import dayjs from "dayjs";
import {statusList} from "../../../shared/api/baseService";

const prisma = new PrismaClient();
const {internalServerError} = statusList
const status:globalThis.ResponseInit = { status: internalServerError }
const {VERSION, ADMIN_MAIL, ADMIN_MAIL_PASS, BUSINESS_MAIL, BUSINESS_MAIL_PASS} = process.env

const cred = VERSION === 'dev' ? {
  user: ADMIN_MAIL,
  pass: ADMIN_MAIL_PASS,
} : {
  user: BUSINESS_MAIL,
  pass: BUSINESS_MAIL_PASS,
}

const {user} = cred

export async function POST(req:NextRequest) {
  try {
    const { name, data } = await req.json();
    const { name: nameCommand, phone, count, standard, vip, date, rent, time } = data;

    if (date && time) {
      const [day, month, year] = date.split('.').map(Number);
      const [hours, minutes] = time.split(':').map(Number);
      const dateTime = new Date(year, month - 1, day, hours, minutes);

      if (isNaN(dateTime.getTime())) {
        return NextResponse.json(
          { message: 'Некорректная дата или время' },
          status
        );
      }

      const startTime = new Date(dateTime.getTime() - 2 * 60 * 60 * 1000);
      const endTime = new Date(dateTime.getTime() + 2 * 60 * 60 * 1000);

      const existingRecords = await prisma.record.findMany({
        where: {
          date: {
            gte: startTime,
            lte: endTime
          }
        }
      });

      if (existingRecords.length > 0) {
        return NextResponse.json(
          { message: 'Выбранное время пересекается с существующей записью' },
          status
        );
      }

      await prisma.record.create({
        data: {
          date: dateTime,
        },
      });
    }

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: cred,
    });

    await transporter.sendMail({
      from: user,
      to: user,
      subject: 'Запись на игру',
      text: `
        Тип игры: ${name === 'freePlay' ? 'открытая' : 'с друзьями'}\n
        Имя или название команды: ${nameCommand}\n
        Телефон: +7${phone}\n
        Количество человек: ${count}\n
        Аренда снаряжения: ${standard && vip ? 'Оба типа экипировки' : standard ? 'Стандартная экипировка' : vip ? 'VIP Экипировка' : !rent ? 'Аренда не требуется' : 'Требуется аренда'}\n
        Дата: ${date ? date : dayjs().day(7).format('DD.MM.YYYY')}${time ? '\n' : ''}
        ${time ? `Время: ${time}` : ''}
      `
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending email' }, status);
  }
}