// // src/pages/HomePage.js
// import React from 'react';
// //import NavigationBar from '../components/Navbar.js';
// import { Link } from 'react-router-dom';
// // import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './HomePage.css';

// const HomePage = () => {
//   return (
//     <Container className="homepage">
//       <Row className="main-section">
//         <Col>
//           <img src="/images/banner.jpg" alt="Main Banner" className="main-image" />
//           <div className="main-text">New Collection Available Now</div>
//         </Col>
//       </Row>
      
//       <Row className="categories-section">
//         <Col>
//           <h2>Shop by Category</h2>
//           <Row className="categories">
//             <Col className="category">
//               <img src="/images/menCate.jpg" alt="Men" />
//               <div className="category-name">Men</div>
//               <div className="view-all">
//                 <Button variant="primary">View All</Button>
//               </div>
//             </Col>
//             <Col className="category">
//               <Link to="/women">
//                 <img src="/images/womenCate.jpg" alt="Women" />
//               </Link>
//               <div className="category-name">Women</div>
//               <div className="view-all">
//                 <Link to="/women">
//                   <Button variant="primary">View All</Button>
//                 </Link>
//               </div>
//             </Col>
//             <Col className="category">
//               <img src="/images/saleCate.jpg" alt="Sale" />
//               <div className="category-name">Sale</div>
//               <div className="view-all">
//                 <Button variant="primary">View All</Button>
//               </div>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
      
//       <Row className="featured-products-section">
//         <Col>
//           <h2>Featured Products</h2>
//           <Row className="products">
//             <Col className="product">
//               <Card>
//                 <Card.Img variant="top" src="/images/product1.jpg" alt="Trending" />
//                 <Card.Body>
//                   <Card.Title>Trending</Card.Title>
//                   <Button variant="primary">View All</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col className="product">
//               <Card>
//                 <Card.Img variant="top" src="/images/product2.jpg" alt="Best Sellers" />
//                 <Card.Body>
//                   <Card.Title>Best Sellers</Card.Title>
//                   <Button variant="primary">View All</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col className="product">
//               <Card>
//                 <Card.Img variant="top" src="/images/product3.jpg" alt="New Arrivals" />
//                 <Card.Body>
//                   <Card.Title>New Arrivals</Card.Title>
//                   <Button variant="primary">View All</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
      
//       <Row className="newsletter-section">
//         <Col>
//           <h2>Sign up for our Newsletter</h2>
//           <Form>
//             <Form.Row className="align-items-center">
//               <Col xs="auto">
//                 <Form.Control type="email" placeholder="Enter your email" />
//               </Col>
//               <Col xs="auto">
//                 <Button type="submit">Sign Up</Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './HomePage.css';

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
              <img src="/images/menCate.jpg" alt="Men" />
              <div className="category-name">Men</div>
              <div className="view-all">
                <Button variant="primary">View All</Button>
              </div>
            </Col>
            <Col className="category">
              <Link to="/women">
                <img src="/images/womenCate.jpg" alt="Women" />
              </Link>
              <div className="category-name">Women</div>
              <div className="view-all">
                <Link to="/women">
                  <Button variant="primary">View All</Button>
                </Link>
              </div>
            </Col>
            <Col className="category">
              <img src="/images/saleCate.jpg" alt="Sale" />
              <div className="category-name">Sale</div>
              <div className="view-all">
                <Button variant="primary">View All</Button>
              </div>
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
                <Card.Img variant="top" src="/images/product1.jpg" alt="Trending" />
                <Card.Body>
                  <Card.Title>Trending</Card.Title>
                  <Button variant="primary">View All</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="product">
              <Card>
                <Card.Img variant="top" src="/images/product2.jpg" alt="Best Sellers" />
                <Card.Body>
                  <Card.Title>Best Sellers</Card.Title>
                  <Button variant="primary">View All</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="product">
              <Card>
                <Card.Img variant="top" src="/images/product3.jpg" alt="New Arrivals" />
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

