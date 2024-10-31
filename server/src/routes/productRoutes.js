import { Router } from 'express';
import { getProducts, getProduct } from '../controllers/productController.js';

const router = Router();

router.route('/').get(getProducts);

router.route('/:id').get(getProduct);

export default router;
