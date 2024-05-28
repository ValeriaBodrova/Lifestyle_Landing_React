import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Header';
import HeroSection from './HeroSection';
import Top10Grow from './Top10Grow';
import DecorateYourHome from './DecorateYourHome';
import IndoorPlants from './IndoorPlants';
import OutdoorPlants from './OutdoorPlants';
import PlantCare from './PlantCare';
import FeaturedProducts from './FeaturedProducts';
import FreeDelivery from './FreeDelivery';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Top10Grow />
      <DecorateYourHome />
      <IndoorPlants />
      <OutdoorPlants />
      <PlantCare />
      <FeaturedProducts />
      <FreeDelivery />
      <Footer />
    </div>
  );
}

export default App;
