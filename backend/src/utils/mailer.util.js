const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'sharjeelalibari3@gmail.com',
        pass: 'vifq rmdf zwbd oqcn',
    },
});

exports.sendOTP = async (email, otp) => {
    const mailOptions = {
        from: 'sharjeelalibari3@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
    };

    await transporter.sendMail(mailOptions);
};
