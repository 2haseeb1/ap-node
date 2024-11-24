import { Router } from 'express';
import {
  placeOrderController,
  calculateRevenueController,
} from './orderController';

const router = Router();


router.post('/', placeOrderController);


router.get('/revenue', calculateRevenueController);

export default router;
