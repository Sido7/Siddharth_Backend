import { UserAddress, OptionalUserAddress } from "../types/user.type";
import { userAddressRepository } from "../repository";

async function createUserAddressService(userData: UserAddress) {
    try {
        const userAddress = await userAddressRepository.createUserAddress(userData)
        return userAddress
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function findUserAddressService(userId: number) {
    try {
        const userAddress = await userAddressRepository.findUserAddress(userId)
        return userAddress
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function updateUserAddressService(addressId: number, userData: OptionalUserAddress) {
    try {
        const userAddress = await userAddressRepository.updateUserAddress(addressId,userData)
        return userAddress
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function delteUserAddressService(addressId: number) {
    try {
        const userAddress = await userAddressRepository.deleteUserAddress(addressId)
        return true
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default {
    createUserAddressService,
    findUserAddressService,
    updateUserAddressService,
    delteUserAddressService
}