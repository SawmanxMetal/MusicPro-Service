const { Router } = require('express');
const { getProduct, postProduct, updateProduct, updateProductCompra } = require('../controllers/product-controller');

const router = Router();

router.get('/products',  getProduct);
router.post('/insertproducts', postProduct);
router.put('/updateproducts/:sku', updateProduct);
router.put('/updateproductsCompra/', updateProductCompra);

updateProductCompra
module.exports = router