const express = require('express');
const { signup, login } = require('../services/auth');
const { protect } = require('../middleware/auth');
const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/login', protect, login);

module.exports = authRouter;
