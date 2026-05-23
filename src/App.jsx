import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'dark';
  });

  const [viewMode, setViewMode] = useState('portfolio'); // 'portfolio' | 'all-projects'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (viewMode !== 'portfolio') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [viewMode]);

  return (
    <div className="app">
      {viewMode === 'portfolio' ? (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <TechStack />
            <Capabilities />
            <Projects onViewAll={() => {
              setViewMode('all-projects');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }} />
            <Contact />
          </main>
          <Footer />
        </>
      ) : (
        <AllProjects onBack={() => {
          setViewMode('portfolio');
          // Smoothly scroll back to projects section
          setTimeout(() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }} />
      )}
    </div>
  );
}
