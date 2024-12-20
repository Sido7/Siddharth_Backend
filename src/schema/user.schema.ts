import { z } from "zod";

export const  createUserSchema = z.object({
    name: z.string().min(1,"User name is required").max(30,"User name must be less than 30 characters").regex(/^[a-zA-Z ]+$/, "User name must be only letters and spaces"),
    email: z.string().email("Invalid email").min(1,"Email is required").max(50,"Email must be less than 50 characters"),
    password: z.string().min(8,"Password must grter than 8 characters"),
    role: z.enum(["user","admin"]).default("user")
})