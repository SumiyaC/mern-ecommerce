// src/pages/WomenPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const WomenPage = () => {
  // Dummy product data for women's clothing
  const products = [
    { id: 1, name: 'Women Product 1', price: 40, image: 'product1.jpg' },
    { id: 2, name: 'Women Product 2', price: 50, image: 'product2.jpg' },
    { id: 3, name: 'Women Product 3', price: 60, image: 'product3.jpg' },
    // Add more products as needed
  ];

  return (
    <Container className="page-container">
      <Row className="navigation-panel mb-3">
        <Col>
          <Link to="/">Home</Link> {'>'} <strong>Women</strong>
        </Col>
      </Row>
      <Row className="content">
        <Col>
          <h1>Welcome to Women's Clothing</h1>
          <Row>
            {products.map(product => (
              <Col key={product.id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default WomenPage;
