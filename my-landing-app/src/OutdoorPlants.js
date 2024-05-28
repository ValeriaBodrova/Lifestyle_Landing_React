import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './App.css';

const OutdoorPlants = () => (
    <div className="outdoor-plants-section" style={{ backgroundImage: 'url(/path-to-background.jpg)' }}>
      <Container className="text-center text-light">
        <h2>Outdoor Plants</h2>
        <p>Explore Nature's Beauty: Shop our Outdoor Plant Collection</p>
        <Button variant="primary">Shop Outdoor Plants</Button>
      </Container>
    </div>
  );

  export default OutdoorPlants;