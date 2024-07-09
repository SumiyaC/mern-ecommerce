import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import CartSummary from '../components/CartSummary';
import './ViewCartPage.css';

const ViewCartPage = ({ cartItems, handleRemoveFromCart }) => {
  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>My Cart</h1>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={4}>
                    <img src={item.image} alt={item.name} style={{ width: '100%' }} />
                  </Col>
                  <Col md={8}>
                    <h5>{item.name}</h5>
                    <p>Price: €{item.price.toFixed(2)}</p>
                    <p>Size: {item.size}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Sub-total: €{(item.price * item.quantity).toFixed(2)}</p>
                    <Button variant="outline-secondary" onClick={() => handleRemoveFromCart(item.id)}>
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <CartSummary cartItems={cartItems} subTotal={subTotal} />
        </Col>
      </Row>
    </Container>
  );
};

export default ViewCartPage;
