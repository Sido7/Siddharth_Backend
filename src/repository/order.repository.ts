import { prisma } from "../app";
import { Status } from "../types/order.type";


  async function createOrderInDB (orderData: any, orderItems: any[]){
    return prisma.order.create({
      data: {
        name: orderData.name,
        amount: orderData.amount,
        completeAddress: orderData.completeAddress,
        userId: orderData.userId,
        orderItem: {
          create: orderItems,
        },
      },
      include: {
        orderItem: true, 
      },
    });
  };
  
  async function fetchOrderItemsByOrderId(orderId: number) {
    return prisma.orderItem.findMany({
      where: { orderId },
    });
  };

  async function fetchOrderByUserId(userId: number) {
    return prisma.order.findMany({
      where: { userId },
    
    include: {
        orderItem: true, 
      },
    }
);
  };
  
  async function cancelOrderInDB(orderId: number,status : any) {
    return prisma.order.update({
      where: { id: orderId },
      data: { status: status },
    });
  };

  const deleteOrderById = async function (orderId: number) {
    return prisma.order.delete({
      where: { id: orderId },
    });
  };

  async function fetchOrderById(orderId: number) {
    return prisma.order.findUnique({
      where: { id: orderId },
    });
  }

  export default {
    createOrderInDB,
    fetchOrderItemsByOrderId,
    cancelOrderInDB,
    fetchOrderByUserId,
    deleteOrderById,
    fetchOrderById
  }