import React from 'react';
import { Play, Instagram } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: 'אילוף בסיסי לגורים',
      description: 'למידת הפקודות הבסיסיות הראשונות',
      embedUrl: 'https://www.instagram.com/p/Ct9B-fGgyKR/embed?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'פתרון בעיות התנהגות',
      description: 'איך להתמודד עם נביחות מוגזמת',
      embedUrl: 'https://www.instagram.com/p/Cuoe0uUghpz/embed?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'טיפים לאילוף מתקדם',
      description: 'טכניקות מתקדמות לכלבים בוגרים',
      embedUrl: 'https://www.instagram.com/p/CrYpqIsAsBD/embed?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section id="videos" className="py-20 bg-white scroll-offset">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-charcoal mb-6">
            סרטוני אילוף באינסטגרם
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            צפו בסרטונים שיעזרו לכם להבין טוב יותר את תהליך האילוף
          </p>
          <a
            href="https://instagram.com/danydogtrainer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Instagram className="w-5 h-5" />
            עקבו אחרינו באינסטגרם לעוד תכנים
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="card animate-on-scroll hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100 aspect-square">
                {/* Instagram embed iframe */}
                <iframe 
                  src={video.embedUrl}
                  width="100%" 
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                  title={video.title}
                  className="absolute inset-0"
                ></iframe>
              </div>
              
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                {video.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {video.description}
              </p>
              
              <a
                href="https://instagram.com/danydogtrainer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
