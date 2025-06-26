import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: "Abhas Jaiswal",
                email: "abhas.jaiswal0907@gmail.com",
                age: 20,
                nationality: "Indian",
                isAdmin: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Prisma User",
                email: "prisma@gmail.com",
                age: 20,
                nationality: "Indian",
                isAdmin: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Prisma User2",
                email: "prisma2@gmail.com",
                age: 20,
                nationality: "Indian",
                isAdmin: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Prisma User3",
                email: "prisma3@gmail.com",
                age: 20,
                nationality: "Indian",
                isAdmin: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Prisma User4",
                email: "prisma4@gmail.com",
                age: 20,
                nationality: "Indian",
                isAdmin: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },


            
        ]
    })
}

seed().then(() => prisma.$disconnect());