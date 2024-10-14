const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
  },
  price: {
    type: Number,
    required: true,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});


const Item = mongoose.model('Items', ItemSchema);
module.exports = Item;
