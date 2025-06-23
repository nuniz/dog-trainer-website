import React from 'react';
import { Award, Users, Clock, Star, Phone, MessageCircle, Bone, Smile } from 'lucide-react';

const About = () => {
  // We'll keep only 'שנות ניסיון' in the stats array for the floating box
  const stats = [
    { icon: <Clock className="w-12 h-12 text-primary" />, number: '5+', label: 'שנות ניסיון' },
    // Removed the other stats as they will be represented differently or textually
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 scroll-offset">
      <div className="container-custom mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content - Left Column (Main Text & CTA) */}
          <div className="animate-on-scroll">
            <h2 className="text-h2-mobile md:text-h2-desktop font-extrabold text-charcoal mb-4 leading-tight">
              אסף לוטנברג
              <span className="block text-primary text-xl md:text-2xl mt-2 font-semibold">
                מאלף כלבים - כלב טועה זה כלב שלומד.
              </span>
              <span className="block text-gray-700 text-lg mt-1 font-medium">
                בואו ללמוד איך ללמד את הכלב שלכם את הדרך הנכונה! 🤙🏻
              </span>
            </h2>

            <div className="text-gray-700 space-y-6 mb-8">
              <p className="text-xl leading-relaxed">
                שלום לכם, אני אסף לוטנברג, מאלף כלבים מוסמך עם למעלה מ-<span className="font-bold text-charcoal">10 שנות ניסיון</span> בתחום.
                במהלך השנים <span className="font-bold text-charcoal">אילפתי מעל 300 כלבים</span> והענקתי ל<span className="font-bold text-charcoal">מאות משפחות מרוצות</span> כלים לבניית קשר חזק ובטוח עם חברם הטוב ביותר.
                אני מאמין ב<span className="font-bold text-charcoal">גישה משולבת</span> וייחודית, ששואבת את הטוב ביותר משיטות אילוף שונות –
                מ<span className="font-bold text-charcoal">אילוף חיובי מבוסס חיזוקים</span> ועד לגישות המלמדות שליטה, משמעת ותקשורת ברורה.
                המסע שלי עם כלבים התפתח לתשוקה אמיתית לבניית קשר חזק, בטוח ומאוזן בין כלבים לבעליהם.
              </p>

              <p className="text-lg leading-relaxed">
                ההתמחות שלי כוללת טיפול במגוון <span className="font-bold text-charcoal">בעיות התנהגות קשות</span>, כמו <span className="font-bold text-charcoal">רכושנות, תוקפנות וחרדת נטישה</span>,
                תוך בניית תוכנית אילוף אישית המותאמת לצרכים הייחודיים של כל כלב ומשפחתו.
                אני ו<span className="font-bold text-charcoal">פולה</span>, הכלבה המדהימה שלי, משמשים כדוגמה חיה לגישה זו,
                כחסידים של <span className="font-bold text-charcoal">אילוף ביתי ותחרותי</span> כאחד.
              </p>

              <p className="text-lg leading-relaxed">
                מעבר לאילוף בסיסי ופתרון בעיות, אני עוסק גם ב<span className="font-bold text-charcoal">אילוף מתקדם</span> ומתחרה באופן פעיל
                ב<span className="font-bold text-charcoal">תחרויות כלבים (BH test ו-IGP)</span> עם פולה.
                הידע והניסיון המעשי שלי מאפשרים לי להעניק לכם כלים לא רק לאילוף,
                אלא גם להבנה עמוקה יותר של כלבכם, חיזוק הקשר שלכם ויצירת חיים משותפים מאושרים ומאוזנים.
                <span className="block mt-4 text-primary font-bold">בואו נבנה יחד את הדרך הנכונה לכלב שלכם!</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0"> {/* Added mb-8 for spacing before the image column starts on smaller screens */}
              <a
                href="https://wa.me/972508462906"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                צרו קשר בוואטסאפ
              </a>
              <a
                href="tel:+972508462906"
                className="btn-secondary flex items-center justify-center gap-2 text-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                התקשרו אליי
              </a>
            </div>
          </div>

          {/* Image and Certifications - Right Column */}
          <div className="animate-on-scroll mt-12 lg:mt-0 lg:ml-12">
            <div className="relative mb-8">
              <img
                src="/dog-trainer-website/images/dog_trainer_2.jpg"
                alt="אסף המאלף עם כלב"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white"
                loading="lazy"
              />
              {/* Floating Stat Box - Years of Experience */}
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 border-4 border-white">
                <div className="text-center">
                  <div className="text-4xl font-extrabold mb-1">10+</div>
                  <div className="text-lg opacity-90">שנות ניסיון</div>
                </div>
              </div>
            </div>

            {/* Certifications - Moved here for compactness */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mt-12"> {/* Added mt-12 */}
              <h3 className="text-2xl font-bold mb-5 text-charcoal flex items-center gap-3">
                <Award className="w-7 h-7 text-primary" />
                הסמכות והכשרות
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>הכשרה מתמשכת ולימוד שיטות אילוף חדשניות ומוכחות.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Bone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-charcoal">מתחרה פעיל בתחרויות כלבים (BH test, IGP)</span> עם הכלבה פולה.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;