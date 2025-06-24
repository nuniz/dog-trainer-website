import React from 'react';
import { CheckCircle, Heart, Target } from 'lucide-react';

const Hero = () => {
  const benefits = [
    {
      icon: <Heart className="w-24 h-24 text-primary" />,
      title: 'גישה משולבת ומקצועית',
      description: 'מעל 5 שנות ניסיון באילוף, בגישה המשלבת חיזוקים חיוביים עם כלים לבניית קשר ותקשורת ברורה.'
    },
    {
      icon: <Target className="w-24 h-24 text-primary" />,
      title: 'התמחות בבעיות מורכבות',
      description: 'פתרונות מוכחים לטיפול ברכושנות, תוקפנות, חרדת נטישה ועוד, עם דגש על תוכנית אישית.'
    },
    {
      icon: <CheckCircle className="w-24 h-24 text-primary" />,
      title: 'תוצאות מעשיות ומוכחות',
      description: 'ידע תחרותי מעמיק (BH, IGP) שמתורגם לכלים לבניית ציות, שליטה וחיים מאוזנים יותר לכלבכם.'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-bl from-light-gray to-sand/30 pt-20 md:pt-24 scroll-offset overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1920&q=80"
          alt="אסף מאלף כלבים עם כלב"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right px-4 sm:px-0">
            <h1 className="text-h1-mobile md:text-h1-desktop font-extrabold text-white mb-6 leading-tight animate-fade-up">
              אילוף כלבים
              <span className="block text-accent mt-2">בהתאמה אישית</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              מאלף מוסמך עם ניסיון של למעלה מ-<span className="font-bold">5 שנים</span>.
              <span className="block mt-2">גישה חיובית ומקצועית לאילוף כלבים מכל הגילאים והגזעים.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/972508462906"
                className="btn-primary text-lg px-12 py-4 shadow-xl hover:shadow-2xl transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                קבעו שיחת ייעוץ חינם
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-white/80 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>מאלף מוסמך</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>+5 שנות ניסיון</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>מאות לקוחות מרוצים</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-up px-4 sm:px-0" style={{ animationDelay: '0.8s' }}>
          {benefits.map((benefit, index) => (
            <div key={index} className="card bg-white/95 backdrop-blur-sm text-center p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal">
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
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;