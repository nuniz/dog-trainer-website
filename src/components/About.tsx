import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Clock className="w-24 h-24" />, number: '10+', label: 'שנות ניסיון' },
    { icon: <Users className="w-24 h-24" />, number: '500+', label: 'כלבים שאולפו' },
    { icon: <Star className="w-24 h-24" />, number: '100%', label: 'שביעות רצון' },
    { icon: <Award className="w-24 h-24" />, number: '5', label: 'הסמכות מקצועיות' },
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-offset">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-charcoal mb-6">
              היכירו את דני
              <span className="block text-primary">המאלף שלכם</span>
            </h2>
            
            <div className="prose prose-lg text-gray-700 mb-8">
              <p className="text-xl leading-relaxed mb-6">
                שלום! אני דני, מאלף כלבים מוסמך עם למעלה מ-10 שנות ניסיון בתחום האילוף החיובי. 
                התמחותי היא ביצירת קשר חזק ובטוח בין הכלב לבעליו.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                אני מאמין באילוף מבוסס על הבנה, סבלנות וחיזוק חיובי. כל כלב הוא ייחודי, 
                ולכן אני מתאים את שיטות האילוף לאישיות ולצרכים הספציפיים של כל כלב ובעליו.
              </p>

              <p className="text-lg leading-relaxed">
                המטרה שלי היא לא רק לפתור בעיות התנהגות, אלא לחזק את הקשר בין הכלב לבעליו 
                וליצור חיים משותפים מאושרים ומאוזנים.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-sand/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-charcoal">הסמכות והכשרות</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>מאלף כלבים מוסמך - האגודה הישראלית למאלפי כלבים</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>התמחות באילוף חיובי ובעיות התנהגות</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>קורס מתקדם בפסיכולוגיה של כלבים</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>הכשרה מתמשכת בשיטות אילוף מתקדמות</span>
                </li>
              </ul>
            </div>

            <button className="btn-primary">
              בואו נכיר בפגישה אישית
            </button>
          </div>

          {/* Image and Stats */}
          <div className="animate-on-scroll">
            <div className="relative mb-8">
              <img
                src="/images/dog_trainer_2.jpg"
                alt="דני המאלף עם כלב"
                className="w-full h-124 object-cover rounded-card shadow-card"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-600">שנות ניסיון</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-sand/10 rounded-lg">
                  <div className="flex justify-center text-primary mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-charcoal mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
