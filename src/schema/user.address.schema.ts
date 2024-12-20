import {z} from "zod";

export const userAddresSchema  = z.object({
    line1: z.string().min(1,"This Line can not be empty"),
    line2: z.string().min(1,"This Line can not be empty"),
    city: z.string().min(1,"City Field can not be empty"),
    state: z.string().min(1,"state Field can not be empty"),
    country: z.string().min(1,"country Field can not be empty"),
    pincode: z.string().min(1,"pincode Field can not be empty"),
})


export const userAddressOptionalSchema = userAddresSchema.partial()
  