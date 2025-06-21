
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-5">
          {/* Social Media Links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/danydogtrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="עקבו אחרינו באינסטגרם"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/danydogtrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="עקבו אחרינו בפייסבוק"
            >
              <Facebook size={18} />
            </a>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">ד</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-charcoal">דני</h1>
              <p className="text-sm text-gray-600 font-medium">מאלף כלבים מוסמך</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-charcoal hover:text-primary transition-all duration-300 font-medium py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+972501234567"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium"
              aria-label="התקשר לדני"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">050-123-4567</span>
            </a>
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 font-medium"
              aria-label="שלח הודעה בוואטסאפ"
            >
              <MessageCircle size={18} />
              <span className="hidden lg:inline">וואטסאפ</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-full text-charcoal hover:text-primary hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 py-6 rounded-b-2xl shadow-xl">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-charcoal hover:text-primary transition-colors duration-200 font-medium py-3 px-4 hover:bg-primary/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                <a
                  href="tel:+972501234567"
                  className="btn-secondary flex-1 text-center"
                >
                  התקשר
                </a>
                <div className="flex gap-2">
                  <a
                    href="https://www.instagram.com/danydogtrainer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-110 transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/danydogtrainer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 transition-all duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
