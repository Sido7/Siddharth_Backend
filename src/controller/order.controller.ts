import { Request, Response } from 'express';
import { orderService } from '../services';

export const createOrder = async (req: Request, res: Response) => {
  
    const userId = res.locals.id;
    const order = await orderService.createOrder({ ...req.body, userId });
    res.status(201).json(order);
};

export const cancelOrder = async (req: Request, res: Response) => {
    const  orderId  = Number(req.params.id);
    const status = req.body.status;
    const order = await orderService.cancelOrder(Number(orderId), status);
    res.status(200).json(order);
};

export const readOrder = async (req: Request, res: Response) => {
    const userId = res.locals.id;
    
    const order = await orderService.fetchOrder(userId);
    res.status(200).json(order);
};

export const deleteOrder = async (req: Request, res: Response) => {
    const orderId = Number(req.params.id);
    const order = await orderService.deleteOrderService(orderId);
    res.status(200).json({message: "Order Deleted Successfully"});
};
