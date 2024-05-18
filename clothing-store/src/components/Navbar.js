// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <div>
      {/* First Navbar */}
      <Navbar bg="light" expand="lg" className="border-bottom">
        <Container>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/help">Help & FAQs</Nav.Link>
            <NavDropdown title="Language" id="language-dropdown">
              <NavDropdown.Item href="#english">English</NavDropdown.Item>
              <NavDropdown.Item href="#finnish">Finnish</NavDropdown.Item>
              <NavDropdown.Item href="#swedish">Swedish</NavDropdown.Item>
              <NavDropdown.Item href="#bangla">Bangla</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* Second Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand as={Link} to="/">Kaapor</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/men">Men</Nav.Link>
            <Nav.Link as={Link} to="/women">Women</Nav.Link>
          </Nav>
          <Form inline className="mx-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="dark" id="account-dropdown">
                <FaUser />
              </Dropdown.Toggle>
              <Dropdown.Menu>
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
    </div>
  );
};

export default NavigationBar;
