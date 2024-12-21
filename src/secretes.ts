import dotenv from 'dotenv';

dotenv.config();

export const secretes = {
    Port: process.env.PORT,
    secreteKey: process.env.SECRETE_KEY,
    email: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    admin: process.env.ADMIN_EMAIL
}