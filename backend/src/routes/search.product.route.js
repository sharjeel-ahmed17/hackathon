
const express = require('express');
const router = express.Router();
const { searchProducts } = require('../controllers/product.controller.js');



router.get('/product', searchProducts);

module.exports = router;
