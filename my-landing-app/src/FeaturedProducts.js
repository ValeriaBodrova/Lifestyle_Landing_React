import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';

const FeaturedProducts = () => (
    <Container className="my-5">
      <h2>Featured Products</h2>
      <Row>
        {/* Example product item */}
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="/path-to-product-image.jpg" />
            <Card.Body>
              <Card.Title>Snake Plant</Card.Title>
              <Card.Text>£25.00 - 2 Litre Pot</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Repeat for more products */}
      </Row>
    </Container>
  );

  export default FeaturedProducts;