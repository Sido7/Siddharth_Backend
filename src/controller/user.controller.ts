import { userService } from "../services";
import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
    const data = req.body;
    const result = await userService.createUserService(data);
    res.status(201).json(result);
}

export const login = async (req: Request, res: Response) => {

    const userToken: string = await userService.loginUserService(req.body);
    
 res.status(200).json({
    message: 'Login success',
    token: userToken
})
}


const findUser = async (req: Request, res: Response) => {
    
    const email = res.locals.email;
    const result = await userService.findMeService(email);
    res.status(201).json(result);
}

export {
    createUser,
    findUser
}