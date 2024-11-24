import { Request, Response, NextFunction } from 'express';
import { placeOrder, calculateRevenue } from './orderService';


export const placeOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, car, quantity } = req.body;


    if (!email || !car || !quantity || typeof quantity !== 'number') {
      return res.status(400).json({
        message: 'Invalid input data',
        success: false,
      });
    }

    const order = await placeOrder(email, car, quantity);

    res.status(201).json({
      message: 'Order placed successfully',
      success: true,
      data: order,
    });
  } catch (error) {
    next(error); 
  }
};


export const calculateRevenueController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
   
    const totalRevenue = await calculateRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: { totalRevenue },
    });
  } catch (error) {
    next(error);
  }
};
