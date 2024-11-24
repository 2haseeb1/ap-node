import { Router } from 'express';
import { createCarController, getCarByIdController, getAllCarsController } from './carController';

const router = Router();

router.post('/', createCarController);
router.get('/', getAllCarsController);
router.get('/:carId', getCarByIdController);

export default router;
