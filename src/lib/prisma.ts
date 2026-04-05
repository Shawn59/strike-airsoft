import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Если экземпляр ещё не создан — создаём, иначе используем существующий
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// В режиме разработки сохраняем экземпляр в глобальный объект
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
