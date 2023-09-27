const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  SKU: String,
  Name: String,
  Description: String,
  Weigth: Number,
  ImageURL: String,
  Stock: Number,
  Price: Number
})

module.exports = mongoose.model('Product', ProductSchema) 