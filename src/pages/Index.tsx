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
    <div className="min-h-screen pt-20 md:pt-24">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Videos />
        <Testimonials />
        
        {/* Contact Section - Enhanced for personal touch and wider layout */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 scroll-offset">
          <div className="container-custom mx-auto px-4"> {/* Use mx-auto and px-4 for better responsiveness */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charcoal mb-4 animate-on-scroll">
                יש לכם שאלות? רוצים לקבוע פגישה?
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-on-scroll">
                אני כאן בשבילכם! אל תהססו ליצור איתי קשר בכל דרך שנוחה לכם.
                אשמח לעזור לכם וללוות אתכם בתהליך.
              </p>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 animate-on-scroll"> {/* Wider layout with flex-wrap for responsiveness */}
              {/* Phone */}
              <div className="bg-white rounded-card p-8 flex-1 min-w-[280px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl text-primary transform hover:scale-110 transition-transform duration-300">📞</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-charcoal">שיחת טלפון</h3>
                  <p className="text-gray-600 mb-4">מעדיפים שיחה אישית? אל תהססו לחייג!</p>
                  <a href="tel:+972508462906" className="btn-primary text-lg px-6 py-3 rounded-full inline-flex items-center gap-2">
                    <span className="text-white">050-846-2906</span>
                  </a>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="bg-white rounded-card p-8 flex-1 min-w-[280px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl text-primary transform hover:scale-110 transition-transform duration-300">💬</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-charcoal">שליחת וואטסאפ</h3>
                  <p className="text-gray-600 mb-4">שלחו לי הודעה בכל נושא, אשמח לענות.</p>
                  <a 
                    href="https://wa.me/972508462906" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg px-6 py-3 rounded-full inline-flex items-center gap-2"
                  >
                    <span className="text-white">שלחו הודעה עכשיו</span>
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="bg-white rounded-card p-8 flex-1 min-w-[280px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl text-primary transform hover:scale-110 transition-transform duration-300">📧</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-charcoal">שליחת אימייל</h3>
                  <p className="text-gray-600 mb-4">לפניות מפורטות או שיתופי פעולה.</p>
                  <a href="mailto:info@asafdogtrainer.co.il" className="btn-primary text-lg px-6 py-3 rounded-full inline-flex items-center gap-2">
                    <span className="text-white">שלחו אימייל</span>
                  </a>
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