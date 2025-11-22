import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ChatSection from './components/ChatSection';
import ProblemsSection from './components/ProblemsSection';
import SolutionSection from './components/SolutionSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ChatSection />
        <ProblemsSection />
        <SolutionSection />
      </main>
    </div>
  );
}

export default App;
