import { z } from "zod";
export const  createProductSchema = z.object({
    name: z.string().min(1," Product name is required").max(30,"User name must be less than 30 characters"),
    description: z.string().min(1,"Description is required").max(30,"Description must be less than 300 characters"),
    stock: z.number().min(0,"Stock can not be negative").default(0),
    price: z.number().min(0,"Price can not be negative").default(0),
})


export const update = createProductSchema.partial()