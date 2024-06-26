// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, verifyOTP } = require('../controllers/auth.controller.js');



const authMiddleware = require('../middlewares/auth.middlewate.js');
const admin = require('../middlewares/auth.middlewate.js');




router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify-otp', verifyOTP); // New route for OTP verification


router.get('/admin', authMiddleware, admin, (req, res) => {
    res.json({ message: 'Admin access granted' });
});


module.exports = router;

