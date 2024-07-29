
// productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('./product');

router.get('/products', async (req, res) => {
  try {
    const category = req.query.category;
    console.log('Received Category Filter:', category); // Log the category filter
    const query = category ? { category } : {};
    console.log('MongoDB Query:', query); // Log the query
    const products = await Product.find(query);
    console.log('Products Found:', products); // Log the products found
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error); // Log errors
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;



