// src/pages/MenPage.js
import React from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenPage = () => {
  // Sample product data, replace with your actual data
  const products = [
    { id: 1, name: 'Product 1', price: '$50', image: '/images/men1.jpg' },
    { id: 2, name: 'Product 2', price: '$65', image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: '$45', image: '/images/menCate.jpg' },
  ];

  return (
    <Container className="men-page">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Men</Breadcrumb.Item>
      </Breadcrumb>
      
      <h1 className="text-center">Men's Collection</h1>
      
      <Row className="products">
        {products.map((product) => (
          <Col key={product.id} className="product">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenPage;
