import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollSpy } from './hooks/useScrollSpy';
import { ThemeProvider } from './contexts/ThemeContext';

import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';
import Terminal from './components/Terminal';

function App() {
  return (
    <Router basename="/sayeeportfoliowebsite">
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terminal" element={<Terminal />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

function Home() {
  const sectionIds = ['home', 'about', 'work', 'skills', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 100);

  return (
    <div className="min-h-screen bg-black text-matrix-400 dark:bg-black dark:text-matrix-400">
      <AnimatedCursor />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;