const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Category = require('./src/models/catagory.model.js');
const SubCategory = require('./src/models/sub.catagory.model.js');
const Product = require('./src/models/product.model.js');
const productRoute = require('./src/routes/product.route.js')
const cartRoutes = require('./src/routes/cart.route.js')
const paymentRoutes = require('./src/routes/payment2.route.js');
const authRoutes = require('./src/routes/auth.route.js');

const app = express();
const port = 3000;


app.use(cors())

app.use(bodyParser.json());


const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/noteapp');
        console.log('mongo db connected successfully');

    } catch (error) {
        console.log('error', error);


    }
}
connectDb()
// Category Routes
app.use("/api/", productRoute);
app.use('/api/cart', cartRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/auth', authRoutes);


app.post('/categories', async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
});

// get all catagories

app.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/categories/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).send();
        res.send(category);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.patch('/categories/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!category) return res.status(404).send();
        res.send(category);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/categories/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).send();
        res.send(category);
    } catch (error) {
        res.status(500).send(error);
    }
});

// SubCategory Routes
app.post('/subcategories', async (req, res) => {
    try {
        const subCategory = new SubCategory(req.body);
        await subCategory.save();
        res.status(201).send(subCategory);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/subcategories', async (req, res) => {
    try {
        const subCategories = await SubCategory.find().populate('categoryId');
        res.send(subCategories);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/subcategories/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id).populate('categoryId');
        if (!subCategory) return res.status(404).send();
        res.send(subCategory);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.patch('/subcategories/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!subCategory) return res.status(404).send();
        res.send(subCategory);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/subcategories/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
        if (!subCategory) return res.status(404).send();
        res.send(subCategory);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Product Routes
app.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find().populate('subCategoryId');
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('subCategoryId');
        if (!product) return res.status(404).send();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.patch('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) return res.status(404).send();
        res.send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).send();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
