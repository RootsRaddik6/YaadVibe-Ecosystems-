// simple DB utilities wrapper for common operations
import { prisma } from "@/lib/prisma";

export async function getParishes() {
  return prisma.parish.findMany({
    include: { towns: true }
  });
}

export async function seedParishIfEmpty() {
  const count = await prisma.parish.count();
  if (count === 0) {
    await prisma.parish.createMany({
      data: [
        { name: "Kingston" },
        { name: "Saint Andrew" },
        { name: "Portland" }
      ]
    });
  }
}