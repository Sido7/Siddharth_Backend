import {prisma} from "../app"
import { User } from "../types/user.type"


async function createUser(userData: User){
    const user = await prisma.user.create({
        data: userData
    })
    return user
}

async function findUser(email: string){
    const user = await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
        }
    })
    return user
}

async function findAllUser(payload: any){
    const filter: any = {}
    if(payload.email){
        filter.email = payload.email as string
    }
    const user = await prisma.user.findMany({
        where: filter,
    })
    return user
}


export default {
    createUser,
    findUser,
    findAllUser
}