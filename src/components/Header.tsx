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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
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
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/profile.jpg" 
                alt="אסף - מאלף כלבים" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-charcoal">אסף לוטנברג</h1>
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

          {/* Social Media Links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/asaflotenbrg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="עקבו אחרי באינסטגרם"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/danydogtrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="עקבו אחרי בפייסבוק"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+972508462906"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="התקשר לאסף"
            >
              <Phone size={20} />
              <span className="hidden lg:inline">050-123-4567</span>
            </a>
            <a
              href="https://wa.me/972508462906"
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
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
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
                  href="tel:+972508462906"
                  className="btn-secondary flex-1 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  התקשר
                </a>
                <div className="flex gap-2">
                  <a
                    href="https://www.instagram.com/asaflotenbrg"
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
