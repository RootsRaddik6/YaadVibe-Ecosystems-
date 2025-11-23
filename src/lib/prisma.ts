import { PrismaClient } from "@prisma/client";

declare global {
  // allow hot reloads to reuse the same prisma client
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"]
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}