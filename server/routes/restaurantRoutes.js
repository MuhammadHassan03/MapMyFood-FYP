const express = require('express');
const { signup, login, getMe } = require('../services/auth');
const { protect } = require('../middleware/auth');
const { createItem, getItems, updateItem, deleteItem, getItem, createMenu, getMenu, deleteMenu } = require('../services/restaurantServices');
const restaurantRouter = express.Router();

restaurantRouter.post('/item', protect,  createItem);
restaurantRouter.get('/items', protect,  getItems);
restaurantRouter.put('/item/:itemId', protect, updateItem);
restaurantRouter.delete('/item/:itemId', protect, deleteItem);
restaurantRouter.get('/item/:idemId', protect,  getItem);
restaurantRouter.post('/menu', protect, createMenu)
restaurantRouter.get('/menu', protect, getMenu)
restaurantRouter.delete('/menu/:menuId', protect, deleteMenu)



module.exports = { restaurantRouter };
