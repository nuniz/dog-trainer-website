import React from 'react';
import { Home, BookOpen, Clock, CheckCircle, ArrowRight, MessageCircle, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-primary" />,
      title: 'אילוף ביתי',
      description: 'תוכניות אילוף פרטיות ומותאמות אישית בביתכם, לגורים ולכלבים בוגרים כאחד.',
      features: [
        'לגורים: חינוך בסיסי, גמילה מצרכים, טיפול בנשיכות',
        'לבוגרים: פתרון בעיות התנהגות (נביחות, הרס), ציות ושליטה',
        'התאמה מלאה לסביבה הביתית שלכם',
        'מעורבות והדרכה אישית של כל בני המשפחה'
      ],
      price: 'לפי תוכנית אישית',
      duration: 'משתנה בהתאם לצרכים',
      ctaLink: 'https://wa.me/972508462906?text=היי,%20אני%20מתעניין/ת%20באילוף%20ביתי%20לכלב/ה%20שלי.',
      isComingSoon: false,
    },
    {
      icon: <Clock className="w-10 h-10 text-gray-400" />,
      title: 'פנסיון כלבים',
      description: 'שירותי פנסיון איכותיים לטווח קצר וארוך, שיגיעו בעתיד הקרוב.',
      features: [
        'סביבה בטוחה ומפוקחת',
        'יחס אישי ודואג לכל כלב',
        'פעילויות וחברות',
        'עדכונים שוטפים לבעלים'
      ],
      price: 'בקרוב',
      duration: 'בקרוב',
      ctaLink: '#contact',
      isComingSoon: true,
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: 'אילוף קבוצתי',
      description: 'מפגשי אילוף מהנים בקבוצות קטנות, לשיפור חברות וציות בסביבה מבוקרת.',
      features: [
        'חיזוק פקודות בסיסיות ומתקדמות',
        'חברות מבוקרת עם כלבים אחרים',
        'פתרון בעיות התנהגות בסביבת גירויים',
        'דינמיקה קבוצתית ותמיכה הדדית'
      ],
      price: 'החל מ-150 ₪ למפגש',
      duration: 'מפגש שבועי',
      ctaLink: 'https://wa.me/972508462906?text=היי,%20אני%20מתעניין/ת%20באילוף%20קבוצתי.',
      isComingSoon: false,
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 scroll-offset">
      <div className="container-custom mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-h2-mobile md:text-h2-desktop font-extrabold text-charcoal mb-4">
            השירותים שלי לכלב ולכם
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            מגוון שירותי אילוף מקצועיים, מותאמים אישית לכל סוג של כלב ובעלים,
            על מנת להבטיח את התוצאות הטובות ביותר עבורכם.
          </p>
        </div>

        {/* Services Grid - Centered items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col transform transition-all duration-300 border border-gray-100 animate-on-scroll max-w-sm w-full
                ${service.isComingSoon ? 'opacity-70 grayscale cursor-not-allowed' : 'hover:scale-103'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`flex-shrink-0 p-3 rounded-xl shadow-md
                  ${service.isComingSoon ? 'bg-gray-200' : 'bg-primary'}`}>
                  {service.icon}
                </div>
                <div className="flex-grow">
                  <h3 className={`text-2xl font-bold ${service.isComingSoon ? 'text-gray-500' : 'text-charcoal'} mb-2`}>
                    {service.title}
                  </h3>
                  <p className={`text-gray-600 text-base ${service.isComingSoon ? 'italic' : ''}`}>
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6 flex-grow">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${service.isComingSoon ? 'text-gray-400' : 'text-green-500'}`} />
                      <span className={`text-base ${service.isComingSoon ? 'text-gray-500' : 'text-gray-800'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and Duration */}
              <div className="mt-auto">
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
                  <div>
                    <div className={`text-3xl font-extrabold ${service.isComingSoon ? 'text-gray-500' : 'text-primary'} mb-1`}>
                      {service.price}
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${service.isComingSoon ? 'text-gray-500' : 'text-gray-700'}`}>
                      <Clock className={`w-4 h-4 ${service.isComingSoon ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                {/* CTA Button for each service */}
                {service.isComingSoon ? (
                  <button
                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-300 text-gray-700 py-3 px-6 rounded-full font-semibold text-lg cursor-not-allowed shadow-sm"
                    disabled
                  >
                    מגיע בקרוב!
                  </button>
                ) : (
                  <a
                    href={service.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-full font-semibold text-lg hover:bg-primary-dark transition-colors duration-200 shadow-md"
                  >
                    לפרטים נוספים
                    <ArrowRight className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;