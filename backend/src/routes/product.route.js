// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { searchProducts } = require('../controllers/product.controller.js');

// Other routes...

router.get('/search', searchProducts);

module.exports = router;
