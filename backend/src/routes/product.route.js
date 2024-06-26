const express = require('express');
const router = express.Router();
const Product = require('../models/product.model.js');
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/getallproducts', async (req, res) => {
    try {
        const products = await Product.find().populate('subCategoryId');
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/getsingleproduct/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('subCategoryId');
        if (!product) return res.status(404).send();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch('/updateproduct/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) return res.status(404).send();
        res.send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/deleteproduct/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).send();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;