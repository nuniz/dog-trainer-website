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
        
        <section id="contact" className="py-20 bg-light-gray scroll-offset">
          <div className="container-custom">
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                {/* Enhanced Contact Info */}
                <div className="bg-white rounded-card p-8 h-full">
                  <h3 className="text-2xl font-semibold mb-6 text-charcoal text-center">פרטי קשר</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary">📞</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal">טלפון</h4>
                        <a href="tel:+972508462906" className="text-primary hover:underline">
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
                          href="https://wa.me/972508462906" 
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
                        <a href="mailto:info@asafdogtrainer.co.il" className="text-primary hover:underline">
                          info@asafdogtrainer.co.il
                        </a>
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
