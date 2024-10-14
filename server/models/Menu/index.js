const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  menuName: {
    type: String,
    required: true,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Items',
    },
  ],
  isPublic: {
    type: Boolean,
    required: true,
    default: false,
  }
});

const Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu;
