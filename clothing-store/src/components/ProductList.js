// src/components/ProductList.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductList = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', price: 20, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' },
    // Add more dummy products as needed
  ];

  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
