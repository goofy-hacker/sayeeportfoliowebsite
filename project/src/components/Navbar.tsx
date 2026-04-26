import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavLink {
  title: string;
  href: string;
}

interface NavbarProps {
  activeSection: string | null;
}

const links: NavLink[] = [
  { title: '>_Home', href: '#home' },
  { title: '>_About', href: '#about' },
  { title: '>_Work', href: '#work' },
  { title: '>_Skills', href: '#skills' },
  { title: '>_Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `fixed top-0 left-0 z-50 w-full transition-all duration-300 font-typewriter ${
    isScrolled 
      ? 'bg-black/90 shadow-md backdrop-blur-md' 
      : 'bg-transparent'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="text-xl font-typewriter">
          <span className="text-matrix-400 hover:text-matrix-300 transition-colors">$ sayee.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-typewriter transition-colors tracking-wider ${
                    activeSection === link.href.substring(1) 
                      ? 'text-matrix-400' 
                      : 'text-matrix-500 hover:text-matrix-300'
                  }`}
                >
                  {link.title.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2 text-matrix-500 ring-1 ring-matrix-700 transition-colors hover:bg-matrix-900/30 hover:text-matrix-300"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-matrix-300" />
            ) : (
              <Moon size={18} className="text-matrix-500" />
            )}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2 text-matrix-500 ring-1 ring-matrix-700 transition-colors hover:bg-matrix-900/30 hover:text-matrix-300"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-matrix-300" />
            ) : (
              <Moon size={18} className="text-matrix-500" />
            )}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-matrix-500 hover:text-matrix-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 bg-black/95 px-4 py-6 shadow-lg backdrop-blur-sm md:hidden font-typewriter">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-2 text-sm font-typewriter tracking-wider transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-matrix-400' 
                      : 'text-matrix-500 hover:text-matrix-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  $ {link.title.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;