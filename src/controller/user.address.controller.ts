import { userAddressService } from "../services";
import { Request, Response } from "express";
import { UserAddress, OptionalUserAddress } from "../types/user.type";

const createUserAddressController = async (req: Request, res: Response) => {
    const data: UserAddress = req.body;
    const userId = res.locals.id;
    const result = await userAddressService.createUserAddressService({...data,userId:userId});
    res.status(201).json({data:result});
}

const updateUserAddressController = async (req: Request, res: Response) => {
    const data: OptionalUserAddress = req.body;
    const addressId: number = Number(req.params.id)
    const result = await userAddressService.updateUserAddressService(addressId,data);
    res.status(201).json({data:result});
}

const delteUserAddressController = async (req: Request, res: Response) => {
    const addressId: number = Number(req.params.id)
    const result = await userAddressService.delteUserAddressService(addressId);
    res.status(201).json(result);
}

const findUserAddressController = async (req: Request, res: Response) => {
    const userId = res.locals.id;
    const result = await userAddressService.findUserAddressService(userId);
    res.status(201).json({data:result});
}
export {
    createUserAddressController,
    updateUserAddressController,
    delteUserAddressController,
    findUserAddressController
}