import mongoose, { Schema, Document } from 'mongoose';

export interface ICar extends Document {
  brand: string;
  carModel: string; // Renamed to avoid conflict
  year: number;
  price: number;
  category: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible';
  description: string;
  quantity: number;
  inStock: boolean;
}

const CarSchema: Schema = new Schema(
  {
    brand: { type: String, required: true },
    carModel: { type: String, required: [true, 'Car model is required'] },
    year: { type: Number, required: true },
    price: { type: Number, required: true, min: [0, 'Price must be a positive value'] },
    category: {
      type: String,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: [0, 'Quantity must be a non-negative value'] },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<ICar>('Car', CarSchema);
