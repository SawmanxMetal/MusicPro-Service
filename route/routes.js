const { Router } = require('express');
const { getProduct, postProduct, updateProduct } = require('../controllers/product-controller');

const router = Router();

router.get('/products',  getProduct);
router.post('/insertproducts', postProduct);
router.put('/updateproducts/:sku', updateProduct);



module.exports = router