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

export type UserAddress = {
    id?: number
    line1: string 
    line2 :string
    city: string
    country: string
    pincode: string
    state: string
    userId: number
}

export type OptionalUserAddress = Omit<Partial<UserAddress>, 'userId'>;