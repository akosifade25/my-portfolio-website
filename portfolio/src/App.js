import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contacts from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation/>
      <Home />
      <About />
      <Skills/>
      <Contacts/>
      <Footer />
    </div>
  );
}

export default App;