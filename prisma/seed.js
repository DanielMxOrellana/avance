"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
