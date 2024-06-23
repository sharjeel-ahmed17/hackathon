const jwt = require('jsonwebtoken');
const { generateOTP } = require('../utils/otp.util.js');
const { sendOTP } = require('../utils/mailer.util.js');

let otps = {};

exports.requestOTP = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    const otp = generateOTP();
    otps[email] = otp;

    await sendOTP(email, otp);
    res.status(200).json({ message: 'OTP sent' });
};

exports.verifyOTP = (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ message: 'Email and OTP are required' });
    }

    if (otps[email] === otp) {
        delete otps[email];
        const token = jwt.sign({ email }, '12345ABCDabcd@!#$', { expiresIn: '1h' });
        return res.status(200).json({ token });
    } else {
        return res.status(400).json({ message: 'Invalid OTP' });
    }
};
