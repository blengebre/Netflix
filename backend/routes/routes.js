
const { registerUser } = require('../controller/user');
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../model/user");
require("dotenv").config();
//const transporter=nodemailer.createTransport({
// service:"gmail",
//auth:{
//user:process.env.e.
// pass:proocee.env.pa}})
//transporter.verify(errr,sucess)=>{
    // if(err)}
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) console.error("Email transport error:", error);
  else console.log("Ready to send emails!");
});

router.post("/welcome", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({ message: "Invalid or missing email." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const signupLink = `http://localhost:5173/next?email=${encodeURIComponent(email)}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Create your account",
      html: `
        <h2>Welcome, ${user.name || "User"}!</h2>
        <p>Click below to complete your signup:</p>
        <a href="${signupLink}" 
           style="padding:10px 20px;background:#ff4b2b;color:white;text-decoration:none;border-radius:5px;">
           Create Account
        </a>
      `,
    };

    console.log(`Sending welcome email to: ${user.email}`);

    await transporter.sendMail(mailOptions);
    res.json({ message: `Email sent to ${user.email}`, link: signupLink });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ message: "Error sending email" });
  }
});

router.post('/register', registerUser);

module.exports = router;
