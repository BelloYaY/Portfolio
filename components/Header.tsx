import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuVariants = {
    closed: { 
      opacity: 0, 
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    },
    open: { 
      opacity: 1, 
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({
      y: 0, 
      opacity: 1,
      transition: { delay: 0.1 + (i * 0.1), duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-light/80 dark:bg-dark/80 backdrop-blur-md border-b border-transparent dark:border-white/5' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-6 md:px-12 py-6">
        <a href="#" className="font-display font-bold text-xl tracking-tighter z-50 text-primary-light dark:text-primary-dark relative">
          DV .
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <nav className="flex gap-12">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm font-medium uppercase tracking-widest text-secondary-light dark:text-secondary-dark hover:text-accent dark:hover:text-accent transition-colors relative group"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 hover:border-accent dark:hover:border-accent text-secondary-light dark:text-secondary-dark hover:text-accent dark:hover:text-accent transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-6 md:hidden z-50">
           <button 
            onClick={toggleTheme}
            className="flex items-center justify-center text-primary-light dark:text-primary-dark active:scale-95 transition-transform"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-primary-light dark:text-primary-dark focus:outline-none active:scale-95 transition-transform"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-light dark:bg-dark z-40 flex flex-col items-start justify-center px-8"
          >
            <div className="flex flex-col gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a 
                  custom={i}
                  variants={itemVariants}
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="font-display text-5xl font-bold text-primary-light dark:text-primary-dark hover:text-accent transition-colors tracking-tight"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-8 text-xs font-mono text-secondary-light dark:text-gray-500 uppercase tracking-widest"
            >
              Menu
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;