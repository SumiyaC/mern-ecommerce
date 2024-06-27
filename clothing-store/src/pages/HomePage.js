// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './HomePage.css';
//tst
tst
//tst
const HomePage = () => {
  return (
    <Container className="homepage">
      <Row className="main-section">
        <Col>
          <img src="/images/banner.jpg" alt="Main Banner" className="main-image" />
          <div className="main-text">New Collection Available Now</div>
        </Col>
      </Row>
      
      <Row className="categories-section">
        <Col>
          <h2>Shop by Category</h2>
          <Row className="categories">
            <Col className="category">
              <Card>
                <Card.Img variant="top" src="/images/menCate.jpg" alt="Men" className="category-image" />
                <Card.Body>
                  <Card.Title>Men</Card.Title>
                  <Button variant="primary">View All</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="category">
              <Card>
                <Link to="/women">
                  <Card.Img variant="top" src="/images/womenCate.jpg" alt="Women" className="category-image" />
                </Link>
                <Card.Body>
                  <Card.Title>Women</Card.Title>
                  <Link to="/women">
                    <Button variant="primary">View All</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="category">
              <Card>
                <Card.Img variant="top" src="/images/saleCate.jpg" alt="Sale" className="category-image" />
                <Card.Body>
                  <Card.Title>Sale</Card.Title>
                  <Button variant="primary">View All</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      
      <Row className="featured-products-section">
        <Col>
          <h2>Featured Products</h2>
          <Row className="products">
            <Col className="product">
              <Card>
                <Card.Img variant="top" src="/images/product1.jpg" alt="Trending" className="product-image" />
                <Card.Body>
                  <Card.Title>Trending</Card.Title>
                  <Button variant="primary">View All</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="product">
              <Card>
                <Card.Img variant="top" src="/images/product2.jpg" alt="Best Sellers" className="product-image" />
                <Card.Body>
                  <Card.Title>Best Sellers</Card.Title>
                  <Button variant="primary">View All</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="product">
              <Card>
                <Card.Img variant="top" src="/images/product3.jpg" alt="New Arrivals" className="product-image" />
                <Card.Body>
                  <Card.Title>New Arrivals</Card.Title>
                  <Button variant="primary">View All</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      
      <Row className="newsletter-section">
        <Col>
          <h2>Sign up for our Newsletter</h2>
          <Form>
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Control type="email" placeholder="Enter your email" />
              </Col>
              <Col xs="auto">
                <Button type="submit">Sign Up</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
