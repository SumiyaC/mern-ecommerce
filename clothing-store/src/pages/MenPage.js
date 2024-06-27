// src/pages/MenPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenPage.css';

const MenPage = () => {
  // Sample product data, replace with your actual data
  const initialProducts = [
    { id: 1, name: 'Product 1', price: 50, image: '/images/men1.jpg' },
    { id: 2, name: 'Product 2', price: 65, image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 45, image: '/images/menCate.jpg' },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [sortOrder, setSortOrder] = useState('');

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

  return (
    <Container className="men-page">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Men</Breadcrumb.Item>
      </Breadcrumb>
      
      <h1 className="text-center">Men's Collection</h1>

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
