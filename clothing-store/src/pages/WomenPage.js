import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb, Modal, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WomenPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sample product data, replace with your actual data
  const products = [
    { id: 1, name: 'Product 1', price: '$50', image: '/images/women1.jpg', description: 'Description of Product 1', material: 'Material of Product 1', care: 'Care advice for Product 1', delivery: 'Delivery and payment info for Product 1' },
    { id: 2, name: 'Product 2', price: '$65', image: '/images/women2.jpg', description: 'Description of Product 2', material: 'Material of Product 2', care: 'Care advice for Product 2', delivery: 'Delivery and payment info for Product 2' },
    { id: 3, name: 'Product 3', price: '$45', image: '/images/women3.jpg', description: 'Description of Product 3', material: 'Material of Product 3', care: 'Care advice for Product 3', delivery: 'Delivery and payment info for Product 3' },
  ];

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="women-page">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Women</Breadcrumb.Item>
      </Breadcrumb>
      
      <h1 className="text-center section-title">Women's Collection</h1>
      
      <Row className="products">
        {products.map((product) => (
          <Col key={product.id} className="product">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary" onClick={() => handleViewDetails(product)}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for detailed view */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <img src={selectedProduct && selectedProduct.image} alt={selectedProduct && selectedProduct.name} style={{ width: '100%' }} />
            </Col>
            <Col md={8}>
              <p>Price: {selectedProduct && selectedProduct.price}</p>
              <p>Choose Size:</p>
              <div className="size-options">
                <Button variant="outline-dark" className="mr-2 mb-2">XXS</Button>
                <Button variant="outline-dark" className="mr-2 mb-2">XS</Button>
                <Button variant="outline-dark" className="mr-2 mb-2">S</Button>
                <Button variant="outline-dark" className="mr-2 mb-2">M</Button>
                <Button variant="outline-dark" className="mr-2 mb-2">L</Button>
                <Button variant="outline-dark" className="mr-2 mb-2">XL</Button>
                <Button variant="outline-dark" className="mb-2">XXL</Button>
              </div>
              <p className="mt-3"><a href="#">Size Guide</a></p>
              <Button variant="primary"><i className="fas fa-shopping-bag"></i> Add to Cart</Button>
              <p>Members receive free delivery to pick up points for purchases over €30.</p>
              <h4 className="mt-4 mb-3">Description and Fit</h4>
              <Collapse in={true}>
                <div>
                  <p>{selectedProduct && selectedProduct.description}</p>
                </div>
              </Collapse>
              <h4 className="mt-3 mb-3">Material</h4>
              <Collapse in={true}>
                <div>
                  <p>{selectedProduct && selectedProduct.material}</p>
                </div>
              </Collapse>
              <h4 className="mt-3 mb-3">Care Advice</h4>
              <Collapse in={true}>
                <div>
                  <p>{selectedProduct && selectedProduct.care}</p>
                </div>
              </Collapse>
              <h4 className="mt-3 mb-3">Delivery and Payment</h4>
              <Collapse in={true}>
                <div>
                  <p>{selectedProduct && selectedProduct.delivery}</p>
                </div>
              </Collapse>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      
    </Container>
  );
};

export default WomenPage;
