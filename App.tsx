
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent font-sans leading-normal tracking-wider">
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-12 lg:px-24">
          <Hero />
          <div className="animate-fade-in-up">
             <About />
          </div>
           <div className="animate-fade-in-up animation-delay-300">
            <Experience />
          </div>
           <div className="animate-fade-in-up animation-delay-600">
            <Projects />
          </div>
           <div className="animate-fade-in-up animation-delay-900">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;