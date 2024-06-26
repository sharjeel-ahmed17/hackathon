const express = require('express');
const router = express.Router();
const Category = require('../models/catagory.model.js');
router.post('/', async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/getallcatagory', async (req, res) => {
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/getsinglecatagory/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).send();
        res.send(category);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch('/updatecatagory/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!category) return res.status(404).send();
        res.send(category);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/deletecatagory/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).send();
        res.send(category);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router
