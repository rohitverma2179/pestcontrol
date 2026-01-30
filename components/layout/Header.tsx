import Link from 'next/link';
import { MapPin, Phone, Search, Menu, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full relative z-1000">
      {/* Top Bar */}
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

      {/* Main Nav */}
      <div className="bg-secondary py-4 shadow-sm">
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

            <nav className="hidden lg:block">
              <ul className="flex gap-8">
                <li><Link href="/" className="font-bold text-text-dark transition-all hover:text-primary active-link">Home</Link></li>
                <li><Link href="/about" className="font-bold text-text-dark transition-all hover:text-primary">About Us</Link></li>
                <li><Link href="/service" className="font-bold text-text-dark transition-all hover:text-primary">Services</Link></li>
                <li><Link href="/termite" className="font-bold text-text-dark transition-all hover:text-primary">Termite Protection</Link></li>
                <li><Link href="/blog" className="font-bold text-text-dark transition-all hover:text-primary">Latest News</Link></li>
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
              <button className="lg:hidden text-text-dark p-2 hover:bg-white/20 rounded-lg transition-colors">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
