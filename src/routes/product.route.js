import {Router} from 'express'
import { addProduct, getAllProducts, getProductById } from '../controllers/product.controller.js';




const router = Router();


router.route('/add').post(addProduct)
router.route('/all').get(getAllProducts)
router.route('/:id').get(getProductById)

export{router as productRouter};