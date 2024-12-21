import { prisma } from "../app";
import { UserAddress, OptionalUserAddress } from "../types/user.type";


async function createUserAddress(userData: UserAddress) {
    const userAddress = await prisma.address.create({
        data:   userData
    })
    return userAddress
}

async function findUserAddress(userId: number) {
    const userAddress = await prisma.address.findMany({
        where: {
            userId: userId
        }
    })
    return userAddress
}

async function updateUserAddress(addressId: number, userData: OptionalUserAddress) {
    const userAddress = await prisma.address.update({
        where: {
            id: addressId
        },
        data: userData
    })
    return userAddress
}

async function deleteUserAddress(addressId: number) {
    const userAddress = await prisma.address.delete({
        where: {
            id: addressId
        }
    })
    return userAddress
}

async function fetchAddressById (addressId: number)  {
    return prisma.address.findUnique({
      where: { id: addressId },
    });
  };


export default {
    createUserAddress,
    findUserAddress,
    updateUserAddress,
    deleteUserAddress,
    fetchAddressById
}