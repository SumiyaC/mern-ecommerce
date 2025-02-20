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
        amount: Math.round(parseFloat(amount) * 100),
        currency: 'eur', 
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
        setMessage('Payment succeeded! Order details sent to your email. Your shipment will arrive within 7 business days.');
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
      <div className="form-group">
        <label>Cardholder's Name</label>
        <input
          type="text"
          className="form-control"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Card Details</label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            },
            hidePostalCode: true,
          }}
          className="card-element"
        />
      </div>
      <button className="pay-button" disabled={processing || succeeded}>
        {processing ? 'Processing…' : 'Pay'}
      </button>
      {error && <div className="card-error" role="alert">{error}</div>}
      {succeeded && <div className="payment-success" role="alert">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
