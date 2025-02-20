import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light" className="navbar-top">
        <Container className="justify-content-end">
          <Nav>
            <Nav.Link href="#help">Help & FAQs</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Language
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/english">English</Dropdown.Item>
                <Dropdown.Item href="#/finnish">Finnish</Dropdown.Item>
                <Dropdown.Item href="#/swedish">Swedish</Dropdown.Item>
                <Dropdown.Item href="#/bangla">Bangla</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-middle">
        <Container>
          <Navbar.Brand as={Link} to="/">Kaapor</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/men">Men</Nav.Link>
            <Nav.Link as={Link} to="/women">Women</Nav.Link>
          </Nav>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <FaSearch />
          </div>
          <Nav className="icons">
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <FaUser />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                <Dropdown.Item as={Link} to="/account">My Account</Dropdown.Item>
                <Dropdown.Item as={Link} to="/orders">My Orders</Dropdown.Item>
                <Dropdown.Item as={Link} to="/returns">Return Information</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={Link} to="/favorites"><FaHeart /></Nav.Link>
            <Nav.Link as={Link} to="/cart"><FaShoppingBag /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="light" variant="light" className="navbar-bottom">
        <Container>
          <Nav className="me-auto">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}>Sale</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/sale/men">Men's Sale</Dropdown.Item>
                <Dropdown.Item as={Link} to="/sale/women">Women's Sale</Dropdown.Item>
                <Dropdown.Item as={Link} to="/sale/kids">Kids' Sale</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}>New In</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/new/men">Men's New In</Dropdown.Item>
                <Dropdown.Item as={Link} to="/new/women">Women's New In</Dropdown.Item>
                <Dropdown.Item as={Link} to="/new/kids">Kids' New In</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}>Clothing</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/clothing/men">Men's Clothing</Dropdown.Item>
                <Dropdown.Item as={Link} to="/clothing/women">Women's Clothing</Dropdown.Item>
                <Dropdown.Item as={Link} to="/clothing/kids">Kids' Clothing</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}>Trending</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/trending/men">Men's Trending</Dropdown.Item>
                <Dropdown.Item as={Link} to="/trending/women">Women's Trending</Dropdown.Item>
                <Dropdown.Item as={Link} to="/trending/kids">Kids' Trending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}>Brands</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/brands/nike">Nike</Dropdown.Item>
                <Dropdown.Item as={Link} to="/brands/adidas">Adidas</Dropdown.Item>
                <Dropdown.Item as={Link} to="/brands/puma">Puma</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}>Sportswear</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/sportswear/men">Men's Sportswear</Dropdown.Item>
                <Dropdown.Item as={Link} to="/sportswear/women">Women's Sportswear</Dropdown.Item>
                <Dropdown.Item as={Link} to="/sportswear/kids">Kids' Sportswear</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="secondary" variant="light" className="navbar-promo">
        <Container className="justify-content-center">
          <span className="text-white">New here? Get 25% off on your 1st purchase! Use our code: ProthomKroi</span>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
