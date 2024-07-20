// const express = require('express');
// const cors = require('cors');
// const stripe = require('stripe')('sk_test_51PZ9euAtrmBnkwD0Zd78dVBBzGSEus8oVmsiUrKGSsPAGIw2ruFN0xNbEWhPh1dnr6wNagMN9XfTGuNgtg1cnjQZ0031TwgF9U'); // Replace with your actual secret key
// const bodyParser = require('body-parser');
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

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

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//-------------------------


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
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.post('/create-payment-intent', async (req, res) => {
  let { amount, currency } = req.body;

  // Convert amount to cents if currency is EUR
  if (currency && currency.toLowerCase() === 'eur') {
    amount = Math.round(parseFloat(amount) * 100); // Convert amount to cents
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

// Importing routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Production setup to serve React app
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  // The "catchall" handler: for any request that doesn't match one above, send back index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
