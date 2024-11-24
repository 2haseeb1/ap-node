import Order from './order';
import Car from '../cars/car';

export const placeOrder = async (email: string, carId: string, quantity: number) => {
  const car = await Car.findById(carId);
  if (!car) throw new Error('Car not found');

  if (car.quantity < quantity) {
    throw new Error(`Insufficient stock available. Only ${car.quantity} left in stock.`);
  }

  car.quantity -= quantity;
  car.inStock = car.quantity > 0;
  await car.save();

  const totalPrice = car.price * quantity;

  const order = new Order({
    email,
    car: carId,
    quantity,
    totalPrice,
  });

  return await order.save();
};

export const calculateRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return result[0]?.totalRevenue || 0;
};
