import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const ViewCartPage = ({ cartItems, setCartItems }) => {
  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
  };

  const handleContinueShopping = () => {
    console.log('Continuing shopping...');
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <Card key={item.id} className="mb-3">
                <Card.Body>
                  <Row>
                    <Col md={2}>
                      <img src={item.image} alt={item.name} className="img-fluid" />
                    </Col>
                    <Col md={8}>
                      <h5>{item.name}</h5>
                      <p>Price: ${item.price}</p>
                      <p>Size: {item.size}</p>
                      <p>Quantity: {item.quantity}</p>
                    </Col>
                    <Col md={2} className="text-right">
                      <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          )}
          {cartItems.length > 0 && (
            <div className="text-right">
              <Button variant="outline-dark" className="mr-2" onClick={handleContinueShopping}>Continue Shopping</Button>
              <Button variant="primary" onClick={handleCheckout}>Proceed to Checkout</Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ViewCartPage;
