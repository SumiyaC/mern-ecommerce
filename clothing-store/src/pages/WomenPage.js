import React from 'react';
import { Link } from 'react-router-dom';

const WomenPage = () => {
  // Example array of product data
  const products = [
    { id: 1, name: 'Product 1', imageUrl: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', imageUrl: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', imageUrl: '/images/product3.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="page-container">
      <div className="navigation-panel">
        <Link to="/">Home</Link> {'>'} Women
      </div>
      <div className="content">
        <h1>Welcome to Women's Clothing</h1>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.imageUrl} alt={product.name} />
              <div className="product-name">{product.name}</div>
              {/* Add more product details as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WomenPage;
