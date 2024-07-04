import { PrismaClient } from "@prisma/client";
import { get } from "http";

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

async function getUser(username: string) {
    const user = await prisma.users.findFirst({
        where: {
            username
        }
    })
    console.log(user);
}

getUser("prath@gmail.com")

async function insertTodos(userId: number) {
    const response = await prisma.todos.create({
        data: {
            title: "Learning Prisma",
            description: "Learning Prisma with Typescript",
            userId: 1
        }
    })
    console.log(response);
}

insertTodos(1);

async function getTodosAndUsersDetails(userId: number) {
    const response = await prisma.todos.findMany({
        where: {
            userId: userId
        }, select: {
            id: true,
            title: true,
            description: true
        }
    })
    console.log(response);
}

getTodosAndUsersDetails(1);


