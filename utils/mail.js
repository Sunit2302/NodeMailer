// // utils/mail.js
// const nodemailer = require("nodemailer")
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'masterweapon2302@gmail.com',
//     pass: 'fgqx eubs uesv pzrs', // Use app-specific password
//   },
// });

// const sendMail = async (to, subject, text) => {
//   const mailOptions = {
//     from: 'masterweapon2302@gmail.com',
//     to: "yoxohit317@maxturns.com",
//     subject: "Test Email" ,
//     text: "Hello",
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw new Error('Email could not be sent');
//   }
// };

// module.exports = sendMail