// src/pages/WomenPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb, Modal, Collapse, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WomenPage.css';

const WomenPage = ({ cartItems, setCartItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sortOrder, setSortOrder] = useState('');

  const initialProducts = [
    { id: 1, name: 'Product 1', price: 50, image: '/images/women1.jpg', description: 'Description of Product 1', material: 'Material of Product 1', care: 'Care advice for Product 1', delivery: 'Delivery and payment info for Product 1' },
    { id: 2, name: 'Product 2', price: 65, image: '/images/women2.jpg', description: 'Description of Product 2', material: 'Material of Product 2', care: 'Care advice for Product 2', delivery: 'Delivery and payment info for Product 2' },
    { id: 3, name: 'Product 3', price: 45, image: '/images/women3.jpg', description: 'Description of Product 3', material: 'Material of Product 3', care: 'Care advice for Product 3', delivery: 'Delivery and payment info for Product 3' },
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleSort = (e) => {
    const sortBy = e.target.getAttribute('data-sort');
    setSortOrder(sortBy);

    let sortedProducts;
    if (sortBy === 'price-asc') {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      sortedProducts = [...products].sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = initialProducts;
    }
    setProducts(sortedProducts);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedSize) {
      const newItem = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedProduct.image,
        size: selectedSize,
        quantity: 1,
      };
      setCartItems(prevItems => [...prevItems, newItem]);
      setShowCartModal(true);
      setShowModal(false);
    } else {
      alert("Please select a size.");
    }
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  return (
    <Container className="women-page">
      <Breadcrumb className="custom-breadcrumb">
        <Breadcrumb.Item className="breadcrumb-home"><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Women</Breadcrumb.Item>
      </Breadcrumb>
      
      <h1 className="text-center section-title">Women's Collection</h1>

      <div className="filter-bar">
        <Dropdown className="filter-dropdown">
          <Dropdown.Toggle variant="link">Price</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-sort="price-asc" onClick={handleSort}>Low to High</Dropdown.Item>
            <Dropdown.Item data-sort="price-desc" onClick={handleSort}>High to Low</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="filter-dropdown">
          <Dropdown.Toggle variant="link">Brand</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-sort="brand-1">Brand 1</Dropdown.Item>
            <Dropdown.Item data-sort="brand-2">Brand 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="filter-dropdown">
          <Dropdown.Toggle variant="link">Color</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-sort="color-1">Color 1</Dropdown.Item>
            <Dropdown.Item data-sort="color-2">Color 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="filter-dropdown">
          <Dropdown.Toggle variant="link">Size</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-sort="size-1">Small</Dropdown.Item>
            <Dropdown.Item data-sort="size-2">Medium</Dropdown.Item>
            <Dropdown.Item data-sort="size-3">Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="filter-dropdown">
          <Dropdown.Toggle variant="link">Material</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-sort="material-1">Cotton</Dropdown.Item>
            <Dropdown.Item data-sort="material-2">Polyester</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="filter-dropdown">
          <Dropdown.Toggle variant="link">Rating</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-sort="rating-1">1 Star</Dropdown.Item>
            <Dropdown.Item data-sort="rating-2">2 Stars</Dropdown.Item>
            <Dropdown.Item data-sort="rating-3">3 Stars</Dropdown.Item>
            <Dropdown.Item data-sort="rating-4">4 Stars</Dropdown.Item>
            <Dropdown.Item data-sort="rating-5">5 Stars</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="filter-dropdown">
          <Dropdown.Toggle variant="link">Availability</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-sort="available">In Stock</Dropdown.Item>
            <Dropdown.Item data-sort="unavailable">Out of Stock</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row className="products">
        {products.map((product) => (
          <Col key={product.id} className="product">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
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
              <p>Price: ${selectedProduct && selectedProduct.price}</p>
              <p>Choose Size:</p>
              <div className="size-options">
                {['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'dark' : 'outline-dark'}
                    className="mr-2 mb-2"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
              <p className="mt-3"><a href="#">Size Guide</a></p>
              <Button variant="primary" onClick={handleAddToCart}><i className="fas fa-shopping-cart"></i> Add to Cart</Button>
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

      {/* Modal for cart details */}
      <Modal show={showCartModal} onHide={handleCloseCartModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>My Cart, {cartItems.length} item(s)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map(item => (
            <div key={item.id}>
              <Row>
                <Col md={4}>
                  <img src={item.image} alt={item.name} style={{ width: '100%' }} />
                </Col>
                <Col md={8}>
                  <p><strong>Name:</strong> {item.name}</p>
                  <p><strong>Price:</strong> €{item.price}</p>
                  <p><strong>Size:</strong> {item.size}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <p><strong>Sub-total:</strong> €{item.price * item.quantity}</p>
                </Col>
              </Row>
              <hr />
            </div>
          ))}
          <div className="cart-buttons mt-4">
            <Link to="/viewcart" className="btn btn-outline-dark mr-2">View Cart</Link>
            <Button variant="primary" onClick={handleCloseCartModal}>Checkout</Button>
          </div>
          <p className="mt-3">Free Delivery Worldwide*</p>
          <p>More info here...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCartModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default WomenPage;
