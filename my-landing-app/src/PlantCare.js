import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './App.css';

const PlantCare = () => (
    <div className="plant-care-section" style={{ backgroundImage: 'url(/path-to-background.jpg)' }}>
      <Container className="text-center text-light">
        <h2>Plant Care</h2>
        <p>Nurturing Plants: Your Guide to Thriving Greenery</p>
        <Button variant="primary">Shop Plant Care</Button>
      </Container>
    </div>
  );

  export default PlantCare;