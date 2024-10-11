const User = require('../../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const signup = async (req, res) => {
  const { name, username, email, password, role } = req.body;

  if (!name || !username || !password || !role) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = new User({
    name,
    username,
    email,
    password,
    role,
  });

  await user.save();

  res.status(201).json({
    _id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
    role: user.role,
    token: generateToken(user._id),
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    username: user.username,
    role: user.role,
    token: generateToken(user._id),
  });
};

module.exports = { signup, login };
