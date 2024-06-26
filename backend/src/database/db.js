// import mongoose from "mongoose";
const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('mongo db connected successfully');

    } catch (error) {
        console.log('error', error);


    }
}

module.exports = connectDb;