
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', async (req, res) => {
  try {
    const category = req.query.category;
    console.log('Received Category Filter:', category); 
    const query = category ? { category } : {};
    console.log('MongoDB Query:', query); 
    const products = await Product.find(query);
    console.log('Products Found:', products); 
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error); 
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;



