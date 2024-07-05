import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import './CheckoutPage.css'; // Import your custom CSS for styling

const stripePromise = loadStripe('pk_test_51PZ9euAtrmBnkwD0qqKNs8QhH1UknWfUQOiNecfSpw5BJPgRe9pnFAT0Cxsug6tVxUHDd2IrVGfEo3kKzebymOFE007Y0XtFk4'); // Replace with your actual publishable key
const CheckoutPage = ({ cartItems }) => {
  const subTotal = cartItems ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0) : 0;
  const deliveryCharge = 8.50;
  const total = subTotal + deliveryCharge;

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Checkout</h1>
          {/* Display cart items */}
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={total} />
          </Elements>
        </Col>
        <Col md={4}>
          <div className="payment-details">
            <h3>Payment Details</h3>
            <p>Sub-total: €{subTotal.toFixed(2)}</p>
            <p>Delivery: €{deliveryCharge.toFixed(2)}</p>
            <p>Total: €{total.toFixed(2)}</p>
            {/* Additional fields like cardholder name, etc. */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
