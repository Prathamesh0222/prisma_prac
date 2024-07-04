"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// interface Users {
//     firstName: string,
//     lastName: string,
//     password: string
// }
// async function insertUser(username: string, { firstName, lastName, password }: Users) {
//     const res = await prisma.users.create({
//         data: {
//             username,
//             firstName,
//             password,
//             lastName
//         }, select: {
//             id: true,
//             username: true,
//             firstName: true
//         }
//     })
//     console.log(res);
// }
// insertUser("prath@gmail.com", { firstName: "prath", lastName: "rath", password: "1231241" })
// interface UpdateParams {
//     firstName: string,
//     lastName: string
// }
// async function updateUser(username: string, { firstName, lastName }: UpdateParams) {
//     const res = await prisma.users.update({
//         where: { username },
//         data: {
//             firstName,
//             lastName
//         }
//     })
//     console.log(res);
// }
// updateUser("prath@gmail.com", { firstName: "rath", lastName: "singh" })
// async function getUser(username: string) {
//     const user = await prisma.users.findFirst({
//         where: {
//             username
//         }
//     })
//     console.log(user);
// }
// getUser("prath@gmail.com")
// async function insertTodos(userId: number) {
//     const response = await prisma.todos.create({
//         data: {
//             title: "Learning Prisma",
//             description: "Learning Prisma with Typescript",
//             userId: 1
//         }
//     })
//     console.log(response);
// }
// insertTodos(1);
function getTodosAndUsersDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todos.findMany({
            where: {
                userId: userId
            }, select: {
                id: true,
                title: true,
                description: true
            }
        });
        console.log(response);
    });
}
getTodosAndUsersDetails(1);
