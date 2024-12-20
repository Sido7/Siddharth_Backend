import dotenv from 'dotenv';

dotenv.config();

export const secretes = {
    Port: process.env.PORT,
    secreteKey: process.env.SECRETE_KEY
}