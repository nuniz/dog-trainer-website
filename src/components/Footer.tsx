
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '#home', label: 'דף הבית' },
    { href: '#about', label: 'אודות' },
    { href: '#services', label: 'שירותים' },
    { href: '#contact', label: 'צור קשר' },
  ];

  const services = [
    'אילוף גורים',
    'אילוף כלבים בוגרים',
    'אילוף בבית',
    'אילוף קבוצתי',
    'חרדת נטישה'
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ד</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">אסף לוטנברג</h3>
                <p className="text-gray-400">מאלף כלבים מוסמך</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              מאלף כלבים מוסמך עם למעלה מ-10 שנות ניסיון. 
              מתמחה באילוף ביתי ופתרון בעיות התנהגות.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/asaf.lotenberg/" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="פייסבוק"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/asaflotenbrg" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="אינסטגרם"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/972508462906" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="וואטסאפ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">קישורים מהירים</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">השירותים שלנו</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">פרטי התקשרות</h4>
            <div className="space-y-4">
              <a 
                href="tel:+972508462906"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>050-846-2906</span>
              </a>
              <a 
                href="mailto:dani@dogtraining.co.il"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>info@asafdogtrainer.co.il</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>אזור המרכז, ישראל<br />שירות עד הבית</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6">
              <a 
                href="https://wa.me/972508462906"
                className="btn-secondary w-full text-center block border-primary text-primary hover:bg-primary hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                וואטסאפ
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-right">
              כל הזכויות שמורות לאסף © 2025
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">
                תנאי שירות
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                מדיניות פרטיות
              </a>
              <a href="#client-area" className="hover:text-primary transition-colors">
                אזור לקוחות
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
