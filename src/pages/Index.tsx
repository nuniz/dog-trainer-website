
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
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
        {/* Placeholder sections for future components */}
        <section id="videos" className="py-20 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-charcoal mb-6">
              סרטוני אילוף
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              צפו בסרטונים שיעזרו לכם להבין טוב יותר את תהליך האילוף
            </p>
            <div className="bg-sand/20 rounded-card p-12">
              <p className="text-lg text-gray-600">
                הסרטונים יתווספו בקרוב...
              </p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-light-gray">
          <div className="container-custom text-center">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-charcoal mb-6">
              המלצות לקוחות
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              קראו מה לקוחותינו אומרים על השירות והתוצאות
            </p>
            <div className="bg-white rounded-card p-12">
              <p className="text-lg text-gray-600">
                ההמלצות יתווספו בקרוב...
              </p>
            </div>
          </div>
        </section>

        <section id="tips" className="py-20 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-charcoal mb-6">
              טיפים ומאמרים
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              מאמרים וטיפים מועילים לאילוף וטיפוח הכלב שלכם
            </p>
            <div className="bg-sand/20 rounded-card p-12">
              <p className="text-lg text-gray-600">
                המאמרים יתווספו בקרוב...
              </p>
            </div>
          </div>
        </section>

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
                
                {/* Contact Form Placeholder */}
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
                {/* Map Placeholder */}
                <div className="bg-white rounded-card p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">מפה</h3>
                    <p className="text-gray-600">
                      כאן תוצג מפה עם מיקום השירות
                    </p>
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
