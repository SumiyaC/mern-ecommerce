// const express = require('express');
// const cors = require('cors');
// const stripe = require('stripe')('sk_test_51PZ9euAtrmBnkwD0Zd78dVBBzGSEus8oVmsiUrKGSsPAGIw2ruFN0xNbEWhPh1dnr6wNagMN9XfTGuNgtg1cnjQZ0031TwgF9U'); // Replace with your actual secret key
// const path = require('path');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'build')));

// app.post('/create-payment-intent', async (req, res) => {
//   let { amount, currency } = req.body;

//   // Convert amount to cents if currency is EUR
//   if (currency && currency.toLowerCase() === 'eur') {
//     amount = Math.round(parseFloat(amount) * 100); // Convert amount to cents
//   } else {
//     // Handle other currencies if needed
//   }

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: currency || 'eur', // Set default currency to EUR if not provided
//     });
//     res.send({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error('Error creating payment intent:', error);
//     res.status(500).send({ error: error.message });
//   }
// });

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build/index.html'));
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PZ9euAtrmBnkwD0Zd78dVBBzGSEus8oVmsiUrKGSsPAGIw2ruFN0xNbEWhPh1dnr6wNagMN9XfTGuNgtg1cnjQZ0031TwgF9U'); // Replace with your actual secret key
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
console.log(process.env.MONGODB_URI);  // Check if the URI is correct
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('connection error:', err));

// Define a Product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  material: String,
  care: String,
  delivery: String
});

const Product = mongoose.model('Product', productSchema);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.post('/create-payment-intent', async (req, res) => {
  let { amount, currency } = req.body;

  // Convert amount to cents if currency is EUR
  if (currency && currency.toLowerCase() === 'eur') {
    amount = Math.round(parseFloat(amount) * 100); // Convert amount to cents
  } else {
    // Handle other currencies if needed
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: currency || 'eur', // Set default currency to EUR if not provided
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).send({ error: error.message });
  }
});

// API endpoints for products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post('/api/products', async (req, res) => {
  const { name, price, image, description, material, care, delivery } = req.body;
  const newProduct = new Product({ name, price, image, description, material, care, delivery });
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
