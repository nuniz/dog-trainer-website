import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'טל זורע',
      location: 'תל אביב',
      dogName: 'פאדג',
      rating: 5,
      text: 'אימצנו את פאדג כשהייתה בת שנתיים, אחרי שנמצאה ברחוב. היא סבלה מחרדת נטישה ומשכה המון ברצועה, מה שהקשה עלינו מאוד. אסף עזר לנו להתגבר על קשיים אלו, וכיום פאדג רגועה, ואנחנו מתחילים אילוף מתקדם.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'אבי לוי',
      location: 'חיפה',
      dogName: 'לונה',
      rating: 5,
      text: 'לאחר שנים של בעיות עם לונה, אסף הצליח לפתור הכל בכמה מפגשים. הוא לא רק מאלף מקצועי, אלא גם אדם מיוחד שמבין כלבים.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'רותי דוד',
      location: 'ירושלים',
      dogName: 'צ\'רלי',
      rating: 5,
      text: 'המלצתי על אסף לכל החברים שלי. צ\'רלי למד לציית ולהתנהג יפה תודות לטכניקות החיוביות והסבלניות של אסף.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'יוסי גרין',
      location: 'באר שבע',
      dogName: 'רוקי',
      rating: 5,
      text: 'רוקי היה כלב אגרסיבי עד שפגשנו את אסף. היום הוא הכלב הכי מתוק בשכונה. תודה על המקצועיות והחום האנושי!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-accent fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-light-gray scroll-offset">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-charcoal mb-6">
            מה הלקוחות שלי אומרים
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            מאות בעלי כלבים כבר חוו את השינוי החיובי. 
            קראו את החוויות האמיתיות שלהם עם אסף.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="card animate-on-scroll hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-charcoal text-lg">
                      {testimonial.name}
                    </h4>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{testimonial.location}</span>
                  </div>
                  <p className="text-primary font-medium">
                    בעלים של {testimonial.dogName}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -right-2 w-24 h-24 text-sand opacity-50" />
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
