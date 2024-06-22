// controllers/productController.js
const Product = require('../models/product.model.js');

exports.searchProducts = async (req, res) => {
    try {
        const { query } = req.query;
        const products = await Product.find({
            name: { $regex: query, $options: 'i' },
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
