import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Board from './components/Board';
import Featured from './components/Featured';
import ContactSection from './components/Contact';

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900 scroll-smooth'>
      <Navbar />

      <div id="home">
        <LandingPage />
        <Marquee />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Board />
        <Featured />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
