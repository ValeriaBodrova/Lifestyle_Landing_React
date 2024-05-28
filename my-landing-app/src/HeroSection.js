import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => (
    <div className="hero-section" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <Container className="text-center text-light">
        <h1>Grow the tranquility of your home</h1>
        <p>Create an Oasis of Calm. Explore Ways to Cultivate and Enhance the Peaceful Ambiance of Your Home.</p>
        <Button variant="primary">Shop Now</Button>
      </Container>
    </div>
  );

  export default HeroSection;