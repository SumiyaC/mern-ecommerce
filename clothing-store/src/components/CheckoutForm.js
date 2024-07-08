import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './CheckoutForm.css';

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardholderName, setCardholderName] = useState('');
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const { data } = await axios.post('http://localhost:5000/create-payment-intent', {
        amount: parseFloat(amount).toFixed(2), // Ensure amount is sent as a number
        currency: 'eur', // Hardcoded EUR, adjust if necessary
      });
      const clientSecret = data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: cardholderName,
          },
        },
      });

      if (result.error) {
        setError(`Payment failed: ${result.error.message}`);
      } else {
        setSucceeded(true);
        setMessage('Payment succeeded! Order receipt sent to your email. Your shipment will arrive within 5 business days.');
        setError(null);
      }
    } catch (err) {
      setError(`Network error: ${err.message}`);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cardholder's Name
        <input
          type="text"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          required
        />
      </label>
      <CardElement />
      <button disabled={processing || succeeded}>
        {processing ? 'Processing…' : 'Pay'}
      </button>
      {error && <div className="card-error" role="alert">{error}</div>}
      {succeeded && <div className="payment-success" role="alert">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
