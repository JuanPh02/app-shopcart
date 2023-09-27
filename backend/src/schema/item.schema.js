const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
  SKU: String,
  quantity: Number
});

module.exports = mongoose.model('Item', ItemSchema) 