import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={`fixed top-0 w-full bg-white/95 shadow-md z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold font-playfair text-[#800020]">SAVOR</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" 
            className={`font-medium ${isActive('/') ? 'text-[#800020]' : 'hover:text-[#800020]'} transition-colors`}>
            Home
          </Link>
          <Link href="/about" 
            className={`font-medium ${isActive('/about') ? 'text-[#800020]' : 'hover:text-[#800020]'} transition-colors`}>
            About
          </Link>
          <Link href="/services" 
            className={`font-medium ${isActive('/services') ? 'text-[#800020]' : 'hover:text-[#800020]'} transition-colors`}>
            Services
          </Link>
          <Link href="/menu" 
            className={`font-medium ${isActive('/menu') ? 'text-[#800020]' : 'hover:text-[#800020]'} transition-colors`}>
            Menu
          </Link>
          <Link href="/contact" 
            className={`font-medium ${isActive('/contact') ? 'text-[#800020]' : 'hover:text-[#800020]'} transition-colors`}>
            Contact
          </Link>
        </nav>
        
        {/* CTA Button (Desktop) */}
        <Link href="/contact#reservation" className="hidden md:block bg-[#800020] hover:bg-[#5D001A] text-white px-5 py-2 rounded transition-colors">
          Book a Table
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <Link href="/" 
            className={`font-medium py-2 ${isActive('/') ? 'text-[#800020]' : 'hover:text-[#800020]'} transition-colors`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link href="/about" 
            className={`font-medium py-2 ${isActive('/about') ? 'text-[#800020]' : 'hover:text-[#800020]'} transition-colors`}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link href="/services" 
            className={`font-medium py-2 ${isActive('/services') ? 'text-[#800020]' : 'hover:text-[#800020]'} transition-colors`}
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link href="/menu" 
            className={`font-medium py-2 ${isActive('/menu') ? 'text-[#800020]' : 'hover:text-[#800020]'} transition-colors`}
            onClick={closeMobileMenu}
          >
            Menu
          </Link>
          <Link href="/contact" 
            className={`font-medium py-2 ${isActive('/contact') ? 'text-[#800020]' : 'hover:text-[#800020]'} transition-colors`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <Link href="/contact#reservation" 
            className="bg-[#800020] hover:bg-[#5D001A] text-white px-5 py-2 rounded text-center transition-colors"
            onClick={closeMobileMenu}
          >
            Book a Table
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
