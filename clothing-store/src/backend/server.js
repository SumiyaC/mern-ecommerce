const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PZ9euAtrmBnkwD0Zd78dVBBzGSEus8oVmsiUrKGSsPAGIw2ruFN0xNbEWhPh1dnr6wNagMN9XfTGuNgtg1cnjQZ0031TwgF9U'); // Replace with your actual secret key

const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'eur',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3001, () => console.log('Server is running on port 3001'));
