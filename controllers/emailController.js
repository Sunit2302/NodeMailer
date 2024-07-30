//controllers/emailController.js

//const sendMail = require("../utils/mail");
const nodemailer = require("nodemailer")
const sendTestEmail = async (req, res) => {

  const  { to, subject, text }   = req.body;


if (!to || !subject || !text) {
  return res.status(400).json({ error: 'Missing required fields'});
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '', // Use Your Gmail ID
    pass: '', // Use app-specific password
  },
});

const sendMail = async (to, subject, text) => {
  const mailOptions = {
    from: "masterweapon2302@gmail.com",
    to,
    subject,
    text,
    html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #fff;
                  padding: 20px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                  text-align: center;
                  padding: 10px 0;
                  border-bottom: 1px solid #ddd;
              }
              .header img {
                  max-width: 150px;
              }
              .content {
                  padding: 20px;
              }
              .content h1 {
                  font-size: 24px;
                  color: #333;
              }
              .content p {
                  font-size: 16px;
                  color: #555;
                  line-height: 1.5;
              }
              .footer {
                  text-align: center;
                  padding: 10px 0;
                  border-top: 1px solid #ddd;
                  margin-top: 20px;
                  color: #aaa;
                  font-size: 14px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <img src="https://assets.static-upwork.com/org-logo/1789267916009369600" alt="Company Logo">
              </div>
              <div class="content">
                  <h1>Welcome to Our Company</h1>
                  <p>Dear Customer,</p>
                  <p>We are excited to have you with us. Our company is committed to providing you with the best service possible. We strive to offer you a seamless and enjoyable experience.</p>
                  <p>If you have any questions or need assistance, please do not hesitate to contact us. We are here to help you.</p>
                  <p>Thank you for choosing our company. We look forward to serving you.</p>
              </div>
              <div class="footer">
                  &copy; 2024 digi Lateral Solutions. All rights reserved.
              </div>
          </div>
      </body>
      </html>
    `
  };


  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email could not be sent');
  }
};

try {
  await sendMail(to, subject, text);
  res.status(200).json({ message: 'Email sent successfully', success: true });
} catch (error) {
  res.status(500).json({ error: 'Error sending email', success: false });
};

};


module.exports = sendTestEmail