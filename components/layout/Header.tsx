import Link from 'next/link';
import { MapPin, Phone, Search, Menu, Mail, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/service', label: 'Services' },
    { href: '/termite', label: 'Termite Protection' },
    { href: '/blog', label: 'Latest News' },
  ];

  return (
    <header className="w-full relative z-50">
      {/* Top Bar - Desktop */}
      <div className="bg-white py-2.5 border-b border-gray-100 hidden md:block">
        <div className="section-container">
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-text-light hover:text-primary transition-colors cursor-pointer">
                <MapPin size={14} className="text-primary" />
                <span>Bishwa Gurugram, Haryana-122006</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-text-light hover:text-primary transition-colors cursor-pointer">
                <Mail size={14} className="text-primary" />
                <span>info@fitindiapestcontrol.com</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-xs font-bold text-text-dark">
                <Phone size={14} className="text-primary" />
                <span>+91-9315805309</span>
              </div>
              <Link href="/appointment" className="bg-primary text-white px-4 py-1.5 rounded-md font-bold text-[10px] uppercase tracking-wider transition-all hover:bg-primary-hover hover:scale-105">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-secondary py-4 shadow-sm relative z-50">
        <div className="section-container">
          <div className="flex justify-between items-center">
            <div className="shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-text-dark rounded-lg flex items-center justify-center text-white font-black text-xl italic shadow-inner">F</div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-text-dark leading-none">FIT INDIA</span>
                  <span className="text-[10px] font-bold text-text-dark/70 tracking-tighter uppercase">Pest Control Services</span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:block">
              <ul className="flex gap-8">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-bold text-text-dark transition-all hover:text-primary ">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative bg-white/50 backdrop-blur rounded-full px-4 py-2 hidden sm:flex items-center border border-white/30">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="border-none bg-transparent p-0 w-32 outline-none text-xs text-text-dark font-bold placeholder:text-text-dark/50"
                />
                <Search size={14} className="text-text-dark" />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-text-dark p-2 hover:bg-white/20 rounded-lg transition-colors z-50"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-black text-text-dark">MENU</span>
                  <button onClick={toggleMenu} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <X size={20} className="text-text-dark" />
                  </button>
                </div>

                <nav className="flex-1">
                  <ul className="space-y-4">
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={toggleMenu}
                          className="flex justify-between items-center p-3 rounded-xl hover:bg-secondary font-bold text-text-dark group transition-all"
                        >
                          {link.label}
                          <ChevronRight size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-text-light">
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      <Phone size={18} />
                    </div>
                    <span>+91-9315805309</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-light">
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      <Mail size={18} />
                    </div>
                    <span>info@fitindiapestcontrol.com</span>
                  </div>

                  <Link
                    href="/appointment"
                    onClick={toggleMenu}
                    className="block w-full bg-primary text-white text-center py-3 rounded-xl font-bold uppercase tracking-wider mt-6 shadow-lg shadow-primary/30 active:scale-95 transition-all"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
