import nodemailer from 'nodemailer';
import { secretes } from '../secretes';



const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: secretes.email, 
    pass: secretes.password, 
  },
});


export const sendStockAlertEmail = async (productName: string, stock: number) => {
  const mailOptions = {
    from: secretes.email,
    to: secretes.admin, 
    subject: 'Product Stock Alert',
    text: `The stock for product "${productName}" has fallen below 10. Current stock: ${stock}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Stock alert email sent for product: ${productName}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


export const sendOrderReminderEmail = async (orderId: number, userEmail: string) => {
  const mailOptions = {
    from: secretes.email,
    to: userEmail, 
    subject: 'Reminder: Order Fulfillment Pending',
    text: `Your order with ID ${orderId} is still pending fulfillment. Please check the status.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Order reminder email sent for order ID: ${orderId}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
