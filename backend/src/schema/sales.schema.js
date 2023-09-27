const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');

const SaleSchema = new Schema({
  SaleID: String,
  User: String,
  Date: {
    type: String,
    default: () => moment().format('DD-MM-YY HH:mm:ss'),
  },
  PaymentType: Number,
  Total: Number,
  SoldProducts: [{ SKU: String, Quantity: Number}],
})

module.exports = mongoose.model('Sale', SaleSchema) 