import { Request, Response, NextFunction } from 'express';
import { createCar, findCarById, getAllCars } from './carService';

export const createCarController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newCar = await createCar(req.body);
    const responseCar = {
      ...newCar.toObject(),
      model: newCar['carModel'], // Access carModel explicitly
    };
    delete (responseCar as any)['carModel']; // Delete carModel safely
    res.status(201).json({
      message: 'Car created successfully',
      success: true,
      data: responseCar,
    });
  } catch (error) {
    next(error);
  }
};

export const getCarByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const car = await findCarById(req.params.carId);
    if (!car) {
      return res.status(404).json({
        message: 'Car not found',
        success: false,
      });
    }
    res.status(200).json({
      message: 'Car retrieved successfully',
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCarsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const searchTerm = req.query.searchTerm || '';
    const cars = await getAllCars(searchTerm as string);
    res.status(200).json({
      message: 'Cars retrieved successfully',
      success: true,
      data: cars,
    });
  } catch (error) {
    next(error);
  }
};
