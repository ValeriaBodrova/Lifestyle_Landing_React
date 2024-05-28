import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DecorateYourHome = () => (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img src="/path-to-your-image.jpg" alt="Decorate your home" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>Decorate your home</h2>
          <p>Let Grow reflect your style, creating personalized sanctuaries of elegance.</p>
          <img src="/path-to-image-with-person.jpg" alt="Person with plant" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );

  export default DecorateYourHome;