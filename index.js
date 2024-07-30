// app.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes.js");
//const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")


const app = express();
app.use(express.json());
app.use(bodyParser.json())
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
