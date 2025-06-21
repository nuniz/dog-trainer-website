
import React from 'react';
import { CheckCircle, Heart, Target } from 'lucide-react';

const Hero = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'גישה חיובית',
      description: 'אילוף מבוסס על חיזוק חיובי ללא אלימות'
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'תכנית מותאמת',
      description: 'תוכנית אילוף אישית לכל כלב ובעליו'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: 'תוצאות מדידות',
      description: 'שיפור ניכר ומדיד בהתנהגות הכלב'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-bl from-light-gray to-sand/30">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1920&q=80"
          alt="דני מאלף כלבים עם כלב"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container-custom relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <h1 className="text-h1-mobile md:text-h1-desktop font-bold text-white mb-6 animate-fade-up">
              אילוף כלבים
              <span className="block text-accent">בהתאמה אישית</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              מאלף מוסמך עם ניסיון של למעלה מ-10 שנים. 
              גישה חיובית ומקצועית לאילוף כלבים מכל הגילאים והגזעים.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://wa.me/972501234567" 
                className="btn-primary text-lg px-12 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                קבעו שיחת ייעוץ חינם
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-white/80 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>מאלף מוסמך</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>+10 שנות ניסיון</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>מאות לקוחות מרוצים</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          {benefits.map((benefit, index) => (
            <div key={index} className="card bg-white/95 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
