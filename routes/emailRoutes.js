// routes/emailRoutes.js
const express = require("express");
const sendTestEmail  = require("../controllers/emailController");
const sendMail = require("../utils/mail");



const emailRoutes = express.Router();

emailRoutes.post('/send-email', sendTestEmail);

module.exports = emailRoutes