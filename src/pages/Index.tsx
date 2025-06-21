
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Videos from '../components/Videos';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Videos />
        <Testimonials />
        
        <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <div className="flex justify-center">
              <div className="max-w-lg w-full">
                <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
                  <div className="text-center mb-8">
                    <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                      <span className="text-3xl">📞</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-charcoal">פרטי קשר</h3>
                    <div className="w-16 h-1 bg-charcoal mx-auto"></div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group">
                      <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white text-lg">📞</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">טלפון</h4>
                        <a href="tel:+972501234567" className="text-charcoal hover:text-gray-600 transition-colors font-medium text-lg">
                          050-123-4567
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group">
                      <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white text-lg">💬</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">וואטסאפ</h4>
                        <a 
                          href="https://wa.me/972501234567" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-charcoal hover:text-gray-600 transition-colors font-medium text-lg"
                        >
                          שלחו הודעה
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group">
                      <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white text-lg">📧</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">אימייל</h4>
                        <a href="mailto:info@danydogtrainer.co.il" className="text-charcoal hover:text-gray-600 transition-colors font-medium text-lg">
                          info@danydogtrainer.co.il
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group">
                      <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white text-lg">🕒</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">שעות פעילות</h4>
                        <p className="text-gray-600 leading-relaxed">ימים א׳-ו׳: 08:00-20:00<br />שבת: 09:00-14:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
