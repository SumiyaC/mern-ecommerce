// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; // Create and import a new CSS file for the HomePage styles

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="main-section">
        <img src="/images/banner.jpg" alt="Main Banner" className="main-image" />
        <div className="main-text">New Collection Available Now</div>
      </section>
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories">
          <div className="category">
            <img src="/images/menCate.jpg" alt="Men" />
            <div className="category-name">Men</div>
          </div>
          <div className="category">
            <img src="/images/womenCate.jpg" alt="Women" />
            <div className="category-name">Women</div>
          </div>
          <div className="category">
            <img src="/images/saleCate.jpg" alt="Sale" />
            <div className="category-name">Sale</div>
          </div>
        </div>
      </section>
      <section className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="products">
          <div className="product">
            <img src="/images/product1.jpg" alt="Product 1" />
            <div className="product-name">Product 1</div>
            <div className="product-price">$49.99</div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product">
            <img src="/images/product2.jpg" alt="Product 2" />
            <div className="product-name">Product 2</div>
            <div className="product-price">$59.99</div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product">
            <img src="/images/product3.jpg" alt="Product 3" />
            <div className="product-name">Product 3</div>
            <div className="product-price">$69.99</div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>
      <section className="newsletter-section">
        <h2>Sign up for our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Sign Up</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
