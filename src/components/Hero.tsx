
import React from 'react';
import { CheckCircle, Heart, Target, Sparkles } from 'lucide-react';

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
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1920&q=80"
          alt="דני מאלף כלבים עם כלב"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/40"></div>
      </div>

      <div className="container-custom relative z-10 pt-28 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">מאלף מוסמך עם +10 שנות ניסיון</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-up leading-tight">
              אילוף כלבים
              <span className="block bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                בהתאמה אישית
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed animate-fade-up max-w-2xl mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
              מאלף מוסמך עם ניסיון של למעלה מ-10 שנים. 
              גישה חיובית ומקצועית לאילוף כלבים מכל הגילאים והגזעים.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://wa.me/972501234567" 
                className="bg-gradient-to-r from-primary to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-3 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                קבעו שיחת ייעוץ חינם
                <span className="group-hover:translate-x-1 transition-transform duration-300">←</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-white/80 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">מאלף מוסמך</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">+10 שנות ניסיון</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">מאות לקוחות מרוצים</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
