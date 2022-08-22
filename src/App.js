import React from 'react'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tracker from './components/Tracker';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Tracker />
      <Footer />
    </div>
  );
}

export default App;
