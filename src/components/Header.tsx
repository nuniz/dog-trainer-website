import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navigationItems.map(item => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      // Close menu if click is outside the header itself
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scrolling when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('click', handleClickOutside);
      // Restore body scrolling when mobile menu is closed
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { href: '#home', label: 'דף הבית' },
    { href: '#about', label: 'אודות' },
    { href: '#services', label: 'שירותים' },
    { href: '#videos', label: 'סרטונים' },
    { href: '#testimonials', label: 'המלצות' },
    { href: '#contact', label: 'צור קשר' },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        // Always use the opaque styling, regardless of scroll position
        'bg-white shadow-xl py-3 border-b border-gray-100'
      }`}
    >
      <nav className="container-custom mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center overflow-hidden shadow-md flex-shrink-0">
              <img
                src="/dog-trainer-website/images/profile.jpg"
                alt="אסף - מאלף כלבים"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-extrabold text-charcoal leading-tight">אסף לוטנברג</h1>
              <p className="text-sm text-gray-700 leading-tight">מאלף כלבים מוסמך</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href.substring(1))}
                className={`text-charcoal hover:text-primary transition-colors duration-200 font-semibold relative
                  ${activeSection === item.href.substring(1) ? 'text-primary' : ''}`}
              >
                {item.label}
                {/* Active link underline effect */}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-primary rounded-full animate-grow-x"></span>
                )}
              </a>
            ))}
          </div>

          {/* Desktop Quick Actions (Social & Contact - Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://www.instagram.com/asaflotenbrg/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-charcoal hover:text-primary transition-colors duration-200 rounded-full hover:bg-gray-100"
              aria-label="עקבו אחרי באינסטגרם"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/danydogtrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-charcoal hover:text-primary transition-colors duration-200 rounded-full hover:bg-gray-100"
              aria-label="עקבו אחרי בפייסבוק"
            >
              <Facebook size={24} />
            </a>
          </div>

          {/* Mobile Quick Actions (Social links always visible + Menu button) */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://www.instagram.com/asaflotenbrg/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-charcoal hover:text-primary transition-colors duration-200 rounded-full hover:bg-gray-100"
              aria-label="עקבו אחרי באינסטגרם"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/danydogtrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-charcoal hover:text-primary transition-colors duration-200 rounded-full hover:bg-gray-100"
              aria-label="עקבו אחרי בפייסבוק"
            >
              <Facebook size={24} />
            </a>
            {/* Mobile menu button */}
            <button
              className="p-2 text-charcoal hover:text-primary transition-colors duration-200 rounded-full hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (visible when isMenuOpen is true) */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 top-[70px] bg-white/95 backdrop-blur-md flex flex-col p-6 border-t border-gray-200 animate-slide-in-right"
            style={{ zIndex: 49 }} // Ensure it's below the main header but above other content
          >
            <div className="flex flex-col gap-6 text-center">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-bold text-charcoal hover:text-primary transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)} // Close menu on navigation click
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-6 mt-6 border-t border-gray-200">
                {/* Contact buttons for mobile menu */}
                <a
                  href="tel:+972508462906"
                  className="bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-primary-dark transition-colors duration-200 flex items-center justify-center gap-2 font-semibold text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone size={20} />
                  התקשרו אלינו
                </a>
                <a
                  href="https://wa.me/972508462906"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-2 font-semibold text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle size={20} />
                  שלחו הודעה בוואטסאפ
                </a>
                {/* Social media links are now permanently visible outside this menu on mobile, removed from here */}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;