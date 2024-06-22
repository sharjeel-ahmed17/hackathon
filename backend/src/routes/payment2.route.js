// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { createPaymentIntent, confirmPayment } = require('../controllers/payment2.controller.js');
const authMiddleware = require('../middlewares/auth.middlewate.js');

router.post('/create-payment-intent', authMiddleware, createPaymentIntent);
router.post('/confirm-payment', confirmPayment);

module.exports = router;
