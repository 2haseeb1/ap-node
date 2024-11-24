import Car, { ICar } from './car';

type TransformedCar = Omit<ICar, 'carModel'> & { model: string };

export const getAllCars = async (searchTerm: string = ''): Promise<TransformedCar[]> => {
  const query = searchTerm
    ? {
        $or: [
          { brand: { $regex: searchTerm, $options: 'i' } },
          { carModel: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};

  const cars = await Car.find(query).lean();

  return cars.map((car) => {
    const transformedCar = {
      ...car,
      model: (car as any).carModel, // Access carModel explicitly
    };
    delete (transformedCar as any).carModel; // Delete carModel safely
    return transformedCar as TransformedCar;
  });
};

export const findCarById = async (id: string): Promise<TransformedCar | null> => {
  const car = await Car.findById(id).lean();
  if (car) {
    const transformedCar = {
      ...car,
      model: (car as any).carModel, // Map `carModel` to `model`
    };
    delete transformedCar['carModel']; // Delete `carModel` safely
    return transformedCar as TransformedCar;
  }
  return null;
};
