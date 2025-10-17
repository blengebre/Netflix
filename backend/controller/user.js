const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body || {};
    if (!email || !username || !password) return res.status(400).json({ message: 'Email, username, and password are required' });

    const User = require('../model/user');
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already registered' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword, tokens:generateToken() });
     function generateToken() {
      const jwt = require('jsonwebtoken');
      const token = jwt.sign({ email }, process.env.jwtSecret || 'dudu', { expiresIn: '1h' });
      return token;
    }
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', email, username, token: newUser.tokens });
  } catch (error) {
    console.error('Register error:', error); // logs full error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


module.exports = {  registerUser };