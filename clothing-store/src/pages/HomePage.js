import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import NewsLetterSignUp from '../components/newsLetterSignUp';
import './HomePage.css';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
                <Link to="/men">
                  <Card.Img variant="top" src="/images/menCate.jpg" alt="Men" className="category-image" />
                </Link>
                <Card.Body>
                  <Card.Title>Men</Card.Title>
                  <Link to="/men">
                    <Button variant="primary">View All</Button>
                  </Link>
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
                  <Link to="/sale">
                    <Button variant="primary">View All</Button>
                  </Link>
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
                  <Link to="/trending">
                    <Button variant="primary">View All</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="product">
              <Card>
                <Card.Img variant="top" src="/images/product2.jpg" alt="Best Sellers" className="product-image" />
                <Card.Body>
                  <Card.Title>Best Sellers</Card.Title>
                  <Link to="/best-sellers">
                    <Button variant="primary">View All</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="product">
              <Card>
                <Card.Img variant="top" src="/images/product3.jpg" alt="New Arrivals" className="product-image" />
                <Card.Body>
                  <Card.Title>New Arrivals</Card.Title>
                  <Link to="/new-arrivals">
                    <Button variant="primary">View All</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      
      <Row className="newsletter-section align-items-center">
        <Col className="d-flex justify-content-center">
          <h2 className="newsletter-heading">
            Sign up for our Newsletter
          </h2>
          <Button variant="primary" onClick={handleShowModal} className="ms-3">
            Sign Up
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Newsletter Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewsLetterSignUp onClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default HomePage;
