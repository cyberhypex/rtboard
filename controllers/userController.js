const bcrypt = require('bcrypt');
const User=require('../Models/Users');

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

  res.json({ message: 'Login successful', userId: user._id });
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'Email already in use' });

    
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      message: 'User created successfully',
      userId: user._id
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};