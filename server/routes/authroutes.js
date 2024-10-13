const express = require('express');
const { signup, login, getMe } = require('../services/auth');
const { protect } = require('../middleware/auth');
const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.get('/getMe', protect, getMe)

module.exports = { authRouter };
