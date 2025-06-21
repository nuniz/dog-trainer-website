
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
        
        <section id="contact" className="py-20 bg-light-gray">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-charcoal mb-6">
                  צרו קשר
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  מוזמנים לפנות אלינו לכל שאלה או לתיאום פגישה
                </p>
                
                {/* Contact Form */}
                <div className="bg-white rounded-card p-8">
                  <div className="space-y-6">
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="השם שלכם"
                        id="name"
                      />
                      <label htmlFor="name" className="form-label">השם שלכם</label>
                    </div>
                    <div className="form-group">
                      <input 
                        type="email" 
                        className="form-input" 
                        placeholder="כתובת אימייל"
                        id="email"
                      />
                      <label htmlFor="email" className="form-label">כתובת אימייל</label>
                    </div>
                    <div className="form-group">
                      <input 
                        type="tel" 
                        className="form-input" 
                        placeholder="מספר טלפון"
                        id="phone"
                      />
                      <label htmlFor="phone" className="form-label">מספר טלפון</label>
                    </div>
                    <div className="form-group">
                      <textarea 
                        className="form-input min-h-[120px] resize-none" 
                        placeholder="הודעה"
                        id="message"
                      ></textarea>
                      <label htmlFor="message" className="form-label">הודעה</label>
                    </div>
                    <button className="btn-primary w-full">
                      שלחו הודעה
                    </button>
                  </div>
                </div>
              </div>

              <div>
                {/* Enhanced Contact Info */}
                <div className="bg-white rounded-card p-8 h-full">
                  <h3 className="text-2xl font-semibold mb-6 text-charcoal">פרטי קשר</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary">📞</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal">טלפון</h4>
                        <a href="tel:+972501234567" className="text-primary hover:underline">
                          050-123-4567
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary">💬</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal">וואטסאפ</h4>
                        <a 
                          href="https://wa.me/972501234567" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          שלחו הודעה
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary">📧</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal">אימייל</h4>
                        <a href="mailto:info@danydogtrainer.co.il" className="text-primary hover:underline">
                          info@danydogtrainer.co.il
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary">🕒</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal">שעות פעילות</h4>
                        <p className="text-gray-600">ימים א׳-ו׳: 08:00-20:00<br />שבת: 09:00-14:00</p>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <a 
                        href="https://wa.me/972501234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full text-center"
                      >
                        קבעו שיחת ייעוץ חינם
                      </a>
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
