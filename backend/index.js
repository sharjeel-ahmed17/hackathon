const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const cartRoutes = require('./src/routes/cart.route.js')
const paymentRoutes = require('./src/routes/payment2.route.js');
const authRoutes = require('./src/routes/auth.route.js');
const otpRoutes = require('./src/routes/otp.route.js');
const catagoryRoutes = require('./src/routes/catagory.route.js');
const subCatagoryRoutes = require('./src/routes/sub.catagory.route.js');
const productRoutes = require('./src/routes/product.route.js');
const searchProductRoute = require('./src/routes/search.product.route.js')



const connectDb = require('./src/database/db.js');


const app = express();
const port = 3000;

dotenv.config();
app.use(cors())

app.use(bodyParser.json());
connectDb()


app.use('/api/auth', authRoutes);
app.use('/api/otp/', otpRoutes);
app.use('/api/categories', catagoryRoutes);
app.use('/api/subcategories', subCatagoryRoutes);
app.use('/api/products', productRoutes);
app.use("/api/search", searchProductRoute);
app.use('/api/cart', cartRoutes);
app.use('/api/payment', paymentRoutes);

app.get("/", (req, res) => {
    res.send("Server is running");
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
