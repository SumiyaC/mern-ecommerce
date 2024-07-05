import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error);
      return;
    }

    const { data: { clientSecret } } = await axios.post('http://localhost:3001/create-payment-intent', {
      amount: amount * 100,
    });

    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
      console.log(confirmError);
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded!');
      // Handle successful payment (e.g., redirect, show success message)
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="cardDetails">
        <Form.Label>Card details</Form.Label>
        <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
      </Form.Group>
      <Form.Group controlId="cardholderName">
        <Form.Label>Cardholder name</Form.Label>
        <Form.Control type="text" placeholder="Enter cardholder name" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!stripe}>
        Pay
      </Button>
    </Form>
  );
};

export default CheckoutForm;
