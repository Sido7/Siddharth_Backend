import { BadRequestError } from "../exceptions/badRequest.error";
import { ErrorCode } from "../exceptions/base.error";
import { NotFoundError } from "../exceptions/notFound.error";
import { productRepository, orderRepository, userAddressRepository, userRepository } from "../repository";

async function createOrder(orderData: any) {
   try{
    
    const address = await userAddressRepository.fetchAddressById(orderData.addressId);
    if (!address) {
       throw new BadRequestError('Address not found', ErrorCode.USER_NOT_FOUND)
    }

    const userDetails = await userRepository.fetchUserById(orderData.userId);
    if(!userDetails){
      throw new BadRequestError('User not found', ErrorCode.USER_NOT_FOUND)
    }
   
    let totalAmount = 0;
    const orderItems = [];
  
    for (const item of orderData.orderItems) {
      const product = await productRepository.fetchProductById(item.productId);
      if (!product) {
        throw new BadRequestError('Product not found', ErrorCode.USER_NOT_FOUND)
      }

      
        
      if (product.stock < item.quantity) {
        throw new BadRequestError('Stock not found', ErrorCode.USER_NOT_FOUND)
      }
  
      await productRepository.updateProductStock(item.productId, item.quantity);
  
      orderItems.push({
        productName: product.name,
        quantity: item.quantity,
        productId: item.productId
      });
  
      totalAmount += product.price * item.quantity;
    }
  
    const completeAddress = `${address.line1}, ${address.line2}, ${address.city}, ${address.state}, ${address.country} - ${address.pincode}`;
  
     const order = await orderRepository.createOrderInDB(
      {
        name: `${userDetails.name}`,
        amount: totalAmount,
        completeAddress,
        userId: orderData.userId,
      },
      orderItems
    );
    return order
   }catch(err){
    console.log(err);
    throw err
   }
  }
  
  async function fetchOrder(userId: number) {
    try{
    const order = await orderRepository.fetchOrderByUserId(userId);
    return order
    }
    catch(err){
        console.log(err);    
        throw err}
    }

  async function cancelOrder(orderId: number, status: string) {
    try{
        const order = await orderRepository.fetchOrderById(orderId)
  
    if (!order) {
        throw new NotFoundError('Order not found', ErrorCode.USER_NOT_FOUND, "Order Does Not exist");
    }

    const orderStatus = order.status;
  
    if (orderStatus === 'cancelled' || orderStatus === 'completed') {
      throw new BadRequestError(`Order is already in ${orderStatus}`, ErrorCode.UNPROCESSABLE_ENTITY)
    }

        if(status === 'cancelled'){
            const orderItems = await orderRepository.fetchOrderItemsByOrderId(orderId);
  
    for (const item of orderItems) {
      await productRepository.restoreProductStock(Number(item.productId), Number(item.quantity));
    }
        }
        
  
    return orderRepository.cancelOrderInDB(orderId,status);
    }catch(err){
        console.log(err);
        throw err
       }
  }

  async function deleteOrderService(orderId: number) {
    
    try{
        const order = await orderRepository.fetchOrderById(orderId)
  
    if (!order) {
        throw new NotFoundError('Order not found', ErrorCode.USER_NOT_FOUND, "Order Does Not exist");
    }
  
    const result = await orderRepository.deleteOrderById(orderId);
     return result
    }catch(err){    
        console.log(err);
        throw err
    }
  };
  
  export default { createOrder, cancelOrder, fetchOrder, deleteOrderService };