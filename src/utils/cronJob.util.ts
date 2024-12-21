import cron from 'node-cron';
import {prisma} from '../app'
import { sendStockAlertEmail, sendOrderReminderEmail } from './sendEmail.util';


cron.schedule('0 0 * * *',async () =>{
  console.log('Running Product Stock Monitoring Cron at midnight');

  const products = await prisma.product.findMany({
    where: {
      stock: {
        lt: 10,
      },
    },
  });

  for (const product of products) {
    await sendStockAlertEmail(product.name, product.stock);
  }
});


cron.schedule('0 * * * *', async () => {
  console.log('Running Order Fulfillment Reminder Cron every hour');

  const pendingOrders = await prisma.order.findMany({
    where: {
      status: 'pending',
      createdAt: {
        lt: new Date(Date.now() - 24 * 60 * 60 * 1000), 
      },
    },
    include: {
      user: true, 
    },
  });

  for (const order of pendingOrders) {
    await sendOrderReminderEmail(order.id, order.user.email);
  }
});
