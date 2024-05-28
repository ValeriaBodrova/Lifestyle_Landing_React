import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import './App.css';

const Footer = () => (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <Navbar.Brand href="#home">Grow</Navbar.Brand>
          </Col>
          <Col md={4}>
            <Nav className="justify-content-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#plants">Plants</Nav.Link>
              <Nav.Link href="#plant-care">Plant Care</Nav.Link>
              <Nav.Link href="#gifts">Gifts</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="text-right">
            <p>Follow us on social media</p>
            {/* Icons for social media would go here */}
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>Privacy Policy | Terms & Conditions</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );

  export default Footer;