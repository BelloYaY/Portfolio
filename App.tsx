import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  // Default to light mode (false)
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check local storage on mount
    const savedTheme = localStorage.getItem('theme');
    
    // Only use saved theme if it exists, otherwise default to light
    if (savedTheme) {
      setTheme(savedTheme);
    }
    // We intentionally ignore system preference to enforce light mode default as per design spec
    // unless user has explicitly set a preference previously.
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className="bg-light dark:bg-dark min-h-screen text-primary-light dark:text-white selection:bg-accent selection:text-white transition-colors duration-700 ease-editorial">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full opacity-30 dark:opacity-10 transition-opacity duration-700"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/5 blur-[120px] rounded-full opacity-30 dark:opacity-10 transition-opacity duration-700"></div>
      </div>

      <Header toggleTheme={toggleTheme} isDark={theme === 'dark'} />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default App;