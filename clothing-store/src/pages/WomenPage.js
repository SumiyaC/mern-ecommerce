// src/pages/WomenPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
import './WomenPage.css';

const WomenPage = () => {
  return (
    <Container className="page-container">
      <Breadcrumb className="breadcrumb-container">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Women</Breadcrumb.Item>
      </Breadcrumb>

      <h2 className="section-title">Women's Collection</h2>

      <Row className="products-section">
        <Col className="product-card">
          <Card>
            <Card.Img variant="top" src="/images/women1.jpg" alt="Women Product 1" />
            <Card.Body>
              <Card.Title className="product-name">Women Product 1</Card.Title>
              <Card.Text className="product-price">$49.99</Card.Text>
              <Button variant="primary" className="view-details">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="product-card">
          <Card>
            <Card.Img variant="top" src="/images/women3.jpg" alt="Women Product 2" />
            <Card.Body>
              <Card.Title className="product-name">Women Product 2</Card.Title>
              <Card.Text className="product-price">$59.99</Card.Text>
              <Button variant="primary" className="view-details">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="product-card">
          <Card>
            <Card.Img variant="top" src="/images/women2.jpg" alt="Women Product 3" />
            <Card.Body>
              <Card.Title className="product-name">Women Product 3</Card.Title>
              <Card.Text className="product-price">$39.99</Card.Text>
              <Button variant="primary" className="view-details">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more products as needed */}
      </Row>
    </Container>
  );
};

export default WomenPage;
