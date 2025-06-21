
import React from 'react';
import { Play, Instagram } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: 'אילוף בסיסי לגורים',
      description: 'למידת הפקודות הבסיסיות הראשונות',
      embedUrl: 'https://www.instagram.com/p/CExample1/embed',
      thumbnail: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'פתרון בעיות התנהגות',
      description: 'איך להתמודד עם נביחות מוגזמת',
      embedUrl: 'https://www.instagram.com/p/CExample2/embed',
      thumbnail: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'טיפים לאילוף מתקדם',
      description: 'טכניקות מתקדמות לכלבים בוגרים',
      embedUrl: 'https://www.instagram.com/p/CExample3/embed',
      thumbnail: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section id="videos" className="py-24 bg-gradient-to-b from-white to-light-gray/50">
      <div className="container-custom">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
            <Instagram className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-charcoal mb-6 leading-tight">
            סרטוני אילוף באינסטגרם
          </h2>
          <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            צפו בסרטונים שיעזרו לכם להבין טוב יותר את תהליך האילוף
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <a
            href="https://instagram.com/danydogtrainer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-all duration-300 font-medium text-lg bg-primary/5 px-6 py-3 rounded-full hover:bg-primary/10"
          >
            <Instagram className="w-5 h-5" />
            עקבו אחרינו באינסטגרם לעוד תכנים
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 aspect-square">
                <iframe 
                  src={video.embedUrl}
                  width="100%" 
                  height="100%"
                  frameBorder={0}
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                  title={video.title}
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {video.description}
                </p>
                
                <a
                  href="https://instagram.com/danydogtrainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 font-semibold group-hover:gap-3"
                >
                  <Play className="w-4 h-4" />
                  צפו בסרטון
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
