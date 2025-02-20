require('dotenv').config();
const express = require('express');
const passport = require('passport');
require('./config/passport'); 
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/User');
const app = express();


app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp'); 
  next();
});

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(passport.initialize());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error('MongoDB connection error:', error));

app.use('/api/auth', authRoutes);


app.use('/api', productRoutes);

app.post('/api/subscribe', async (req, res) => {
  const { name, email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already subscribed' });
    }

    const newUser = new User({ name, email });
    await newUser.save();
    res.status(200).json({ message: 'Signed up successfully' });
  } catch (error) {
    console.error('Error subscribing user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  const amountInCents = currency && currency.toLowerCase() === 'eur'
    ? Math.round(parseFloat(amount) * 100)
    : Math.round(parseFloat(amount));

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency || 'usd',
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
