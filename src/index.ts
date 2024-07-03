import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Users {
    firstName: string,
    lastName: string,
    password: string
}

async function insertUser(username: string, { firstName, lastName, password }: Users) {
    const res = await prisma.users.create({
        data: {
            username,
            firstName,
            password,
            lastName
        }, select: {
            id: true,
            username: true,
            firstName: true
        }
    })
    console.log(res);
}

insertUser("prath@gmail.com", { firstName: "prath", lastName: "rath", password: "1231241" })

interface UpdateParams {
    firstName: string,
    lastName: string
}

async function updateUser(username: string, { firstName, lastName }: UpdateParams) {
    const res = await prisma.users.update({
        where: { username },
        data: {
            firstName,
            lastName
        }
    })
    console.log(res);
}

updateUser("prath@gmail.com", { firstName: "rath", lastName: "singh" })

