
const mongoose = require('mongoose');
const Product = require('./models/product'); // Adjust the path as necessary
const products = require('./products.json');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB Atlas');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert products from JSON file
    await Product.insertMany(products);
    console.log('Inserted new products');
    
    mongoose.disconnect();
  })
  .catch(error => console.error('MongoDB connection error:', error));
