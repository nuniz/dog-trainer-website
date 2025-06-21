
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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Social Media Links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/danydogtrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="עקבו אחרינו באינסטגרם"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/danydogtrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="עקבו אחרינו בפייסבוק"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">ד</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-charcoal">דני</h1>
              <p className="text-sm text-gray-600">מאלף כלבים מוסמך</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-charcoal hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+972501234567"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="התקשר לדני"
            >
              <Phone size={20} />
              <span className="hidden lg:inline">050-123-4567</span>
            </a>
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="שלח הודעה בוואטסאפ"
            >
              <MessageCircle size={20} />
              <span className="hidden lg:inline">וואטסאפ</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-charcoal hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-charcoal hover:text-primary transition-colors duration-200 font-medium py-2"
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
                    className="p-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/danydogtrainer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-primary hover:text-primary/80 transition-colors"
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
