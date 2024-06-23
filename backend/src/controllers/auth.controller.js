const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');
const { generateOTP } = require('../utils/otp.util.js');
const { sendOTP } = require('../utils/mailer.util.js');

const generateToken = (id) => {
    return jwt.sign({ id }, '12345ABCDabcd@!#$', { expiresIn: '30d' });
};

let otps = {};

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();

        const otp = generateOTP();
        otps[email] = otp;
        await sendOTP(email, otp);

        res.status(201).json({ message: 'OTP sent to email' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.verifyOTP = async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ message: 'Email and OTP are required' });
    }

    if (otps[email] === otp) {
        delete otps[email];
        const user = await User.findOne({ email });
        if (user) {
            user.isVerified = true;
            await user.save();
            const token = generateToken(user._id);
            return res.status(200).json({ token });
        } else {
            return res.status(400).json({ message: 'User not found' });
        }
    } else {
        return res.status(400).json({ message: 'Invalid OTP' });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            if (!user.isVerified) {
                return res.status(400).json({ message: 'Please verify your email' });
            }
            const token = generateToken(user._id);
            return res.json({
                _id: user._id,
                email: user.email,
                token,
            });
        } else {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
