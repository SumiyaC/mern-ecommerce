
require('dotenv').config(); // Ensure this line is at the top

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use environment variable for security
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./productRoutes'); // Import product routes

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error('MongoDB connection error:', error));

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

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
app.use('/api', productRoutes); // Use product routes under /api

// Serve React app (if applicable)
app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
