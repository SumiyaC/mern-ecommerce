
require('dotenv').config(); // Ensure this line is at the top

const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Import Stripe
const productRoutes = require('./routes/productRoutes'); // Import product routes
const User = require('./models/User'); // Import User model

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error('MongoDB connection error:', error));

// API endpoints for products
app.use('/api', productRoutes); // Use product routes under /api

// Subscribe endpoint for newsletter
app.post('/api/subscribe', async (req, res) => {
  const { name, email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already subscribed' });
    }

    // Create a new user
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(200).json({ message: 'Signed up successfully' });
  } catch (error) {
    console.error('Error subscribing user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create payment intent endpoint
app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  // Convert amount to cents if currency is EUR
  const amountInCents = currency && currency.toLowerCase() === 'eur'
    ? Math.round(parseFloat(amount) * 100) // Convert amount to cents
    : Math.round(parseFloat(amount)); // Assume amount is in cents for other currencies

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency || 'usd', // Default to USD if no currency is provided
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

// Serve React app (if applicable)
app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
