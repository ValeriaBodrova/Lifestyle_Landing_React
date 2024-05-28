import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const Top10Grow = () => (
    <Container className="my-5">
      <h2>Top 10 Grow</h2>
      <p>Discover our most popular plants</p>
      <Row>
        {/* Example plant item */}
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="/path-to-plant-image.jpg" />
            <Card.Body>
              <Card.Title>Hybrid Cactus</Card.Title>
              <Card.Text>£15.00</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Repeat for more plants */}
      </Row>
    </Container>
  );

  export default Top10Grow;