import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Grow</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#plants">Plants</Nav.Link>
            <Nav.Link href="#plant-care">Plant Care</Nav.Link>
            <Nav.Link href="#gifts">Gifts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  export default Header;