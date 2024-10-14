const User = require('../../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  console.log('process.env.JWT_SECRET', process.env.JWT_SECRET)
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const signup = async (req, res) => {
  try {
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
  }
  catch (error) {
    console.log('error', error?.message)
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log('user', user)
    if (!user || !(await user.matchPassword(password))) {
      return res.status(200).json({ message: 'Invalid credentials' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      role: user.role,
      token: generateToken(user._id),
    });
  }
  catch (error) {
    console.log('error', error?.message)
  }
};

const getMe = (req, res) => {
  try {
    const user = req.user;
    if (user) {
      res.json(user);
    }
    res.json({ user: null })
  }
  catch (error) {
    console.log('error', error?.message)
  }
}

module.exports = { signup, login, generateToken, getMe };
