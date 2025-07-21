import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Promotions from './components/Promotions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-light">
      <Header />
      <Hero />
      <Products />
      <Promotions />
      <Footer />
    </div>
  );
}

export default App;
