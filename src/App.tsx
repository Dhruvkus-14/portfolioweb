import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;