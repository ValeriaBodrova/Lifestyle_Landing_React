import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './App.css';

const IndoorPlants = () => (
    <div className="indoor-plants-section" style={{ backgroundImage: 'url(/path-to-background.jpg)' }}>
      <Container className="text-center text-light">
        <h2>Indoor Plants</h2>
        <p>Bringing Nature Indoors: Explore Our Selection of Lush Indoor Plants</p>
        <Button variant="primary">Shop Indoor Plants</Button>
      </Container>
    </div>
  );

  export default IndoorPlants;