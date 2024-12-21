import { z } from 'zod';

export const createOrderSchema = z.object({   
  addressId: z.number().int().positive(),  
  orderItems: z.array(
    z.object({
      productId: z.number().int().positive(), 
      quantity: z.number().int().positive(),   
    })
  ), 
});


export const updateOrderSchema = z.object({
    status: z.enum(['pending', 'completed', 'cancelled', 'returnd']),
})
