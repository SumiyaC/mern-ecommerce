const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  material: { type: String, required: true },
  care: { type: String, required: true },
  delivery: { type: String, required: true },
  category: {type: String, required: true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
