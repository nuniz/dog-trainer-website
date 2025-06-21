import React from 'react';
import { Baby, Dog, Home, Users, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Baby className="w-12 h-12 text-primary" />,
      title: 'אילוף גורים',
      description: 'הכשרה בסיסית לגורים מגיל 8 שבועות',
      features: [
        'לימוד פקודות בסיסיות',
        'חיטוי וחברות',
        'פתרון בעיות נשיכה',
        'הרגלי שירותים'
      ],
      price: 'החל מ-300 ₪',
      duration: '6 מפגשים'
    },
    {
      icon: <Dog className="w-12 h-12 text-primary" />,
      title: 'אילוף כלבים בוגרים',
      description: 'תוכנית מותאמת לכלבים בוגרים',
      features: [
        'פתרון בעיות התנהגות',
        'ציות ושליטה',
        'אילוף מתקדם',
        'חיזוק הקשר עם הבעלים'
      ],
      price: 'החל מ-400 ₪',
      duration: '8 מפגשים'
    },
    {
      icon: <Home className="w-12 h-12 text-primary" />,
      title: 'אילוף בבית',
      description: 'מפגשי אילוף פרטיים בבית הלקוח',
      features: [
        'מפגש אישי בבית',
        'התאמה לסביבה הביתית',
        'מעורבות כל בני המשפחה',
        'תוכנית אילוף מותאמת'
      ],
      price: 'החל מ-250 ₪',
      duration: 'מפגש בודד'
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'אילוף קבוצתי',
      description: 'מפגשי אילוף בקבוצות קטנות',
      features: [
        'חברות עם כלבים אחרים',
        'למידה בסביבה חברתית',
        'עלות נמוכה יותר',
        'מפגשים שבועיים'
      ],
      price: 'החל מ-150 ₪',
      duration: 'מפגש שבועי'
    }
  ];

  return (
    <section id="services" className="py-20 bg-light-gray scroll-offset">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-charcoal mb-6">
            השירותים שלנו
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            מגוון שירותי אילוף מותאמים לכל סוג של כלב ובעלים. 
            כל תוכנית מתוכננת באופן אישי לפי הצרכים הספציפיים שלכם.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card animate-on-scroll hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-charcoal mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and Duration */}
              <div className="flex items-center justify-between bg-sand/20 rounded-lg p-4">
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                  <div className="text-gray-600 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary rounded-card p-12 text-white animate-on-scroll">
          <h3 className="text-3xl font-bold mb-4">
            לא בטוחים איזה שירות מתאים לכם?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            <a 
              href="https://wa.me/972508462906"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              קבעו שיחת ייעוץ חינם
            </a>
            {" "}ונבחר יחד את התוכנית המושלמת עבורכם
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
