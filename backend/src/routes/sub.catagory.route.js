const express = require('express');
const router = express.Router();
const SubCategory = require('../models/sub.catagory.model.js');
router.post('/', async (req, res) => {
    try {
        const subCategory = new SubCategory(req.body);
        await subCategory.save();
        res.status(201).send(subCategory);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/getallsubcatagory', async (req, res) => {
    try {
        const subCategories = await SubCategory.find().populate('categoryId');
        res.send(subCategories);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/getsinglesubcatagory/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id).populate('categoryId');
        if (!subCategory) return res.status(404).send();
        res.send(subCategory);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch('/updatesubcatagory/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!subCategory) return res.status(404).send();
        res.send(subCategory);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/deletesubcatagory/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
        if (!subCategory) return res.status(404).send();
        res.send(subCategory);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router