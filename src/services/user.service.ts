import { string } from "zod";
import { BadRequestError } from "../exceptions/badRequest.error";
import { ErrorCode } from "../exceptions/base.error";
import { userRepository } from "../repository";
import { User, UserLogin } from "../types/user.type";
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import { PasswordValidationError } from "../exceptions/password.validation.error";
import { secretes } from "../secretes";

async function createUserService(userData: User) {
    try{
        const userExist: User[] = await userRepository.findAllUser({email:userData.email})
        if(userExist[0]){
            throw new BadRequestError('User already exist', ErrorCode.USER_ALREADY_EXIST)
        }
        const hashPassword = bcrypt.hashSync(userData.password, 10);
        const result = await userRepository.createUser({...userData,password:hashPassword} as User)
        return result
    }catch(err){
      console.log(err)
      throw err
    }
}

 async function loginUserService(userData: UserLogin) {
    try{
        const secretKey = secretes.secreteKey as string
        const userExist = await userRepository.findAllUser({email: userData.email})
        if(!userExist[0]){
            throw new BadRequestError('User not found', ErrorCode.USER_NOT_FOUND)
        }
        const userPassword = userExist[0].password
        if(!bcrypt.compareSync( userData.password, userPassword)){
            throw new PasswordValidationError('Invalid password', ErrorCode.INVALID_PASSWORD)
        }
        const token = Jwt.sign({email:userExist[0].email, role:userExist[0].role,id:userExist[0].id},secretKey, {expiresIn: '1d'})
            
        return token
    }catch(err){
        console.log(err)
        throw err
      }
}

async function findMeService(email: string) {
    try{
        const result = await userRepository.findUser(email)
        return result
    }catch(err){
        console.log(err)
        throw err
    }
}



export default {
    createUserService,
    findMeService,
    loginUserService
}
