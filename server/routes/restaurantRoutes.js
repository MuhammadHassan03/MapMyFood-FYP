const express = require('express');
const { signup, login, getMe } = require('../services/auth');
const { protect } = require('../middleware/auth');
const restaurantRouter = express.Router();

restaurantRouter.post('/signup', signup);
restaurantRouter.post('/login', login);
restaurantRouter.get('/getMe', protect, getMe)

module.exports = { restaurantRouter };
