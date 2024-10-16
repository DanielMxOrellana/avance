import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.lista.upsert({
    where: { id: 1 }, // Cambia esto según tu lógica
    update: {},
    create: {
      name: 'Nombre de ejemplo',
      isAlive: true,
    },
  });

  console.log(post1);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
