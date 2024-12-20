export type User = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role?: 'user' | 'admin';
}

export type UserLogin = {
    email: string;
    password: string
}