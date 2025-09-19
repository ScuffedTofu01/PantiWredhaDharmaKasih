import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import VisionMission from './components/VisionMission';
import Media from './components/Media';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <History />
      <VisionMission />
      <Media />
      <Footer />
    </div>
  );
};

export default App;