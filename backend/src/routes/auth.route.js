// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, verifyOTP } = require('../controllers/auth.controller.js');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify-otp', verifyOTP); // New route for OTP verification
module.exports = router;
