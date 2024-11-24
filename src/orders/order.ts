import mongoose, { Schema, Document } from 'mongoose';


export interface IOrder extends Document {
  email: string;
  car: mongoose.Types.ObjectId; 
  quantity: number;
  totalPrice: number;
}


const OrderSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], 
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car',
      required: [true, 'Car ID is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price must be a positive value'],
    },
  },
  {
    timestamps: true, 
  }
);


export default mongoose.model<IOrder>('Order', OrderSchema);
