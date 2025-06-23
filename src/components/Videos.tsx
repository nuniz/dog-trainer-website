import React from 'react';
import { Play, Instagram } from 'lucide-react'; // Play icon might not be needed if embedding

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: 'אילוף בסיסי לגורים',
      description: 'למדו איך להטמיע הרגלי יסוד חיוביים לגור החדש שלכם!',
      // Use Instagram's embed URL for posts. Note: 'embed?autoplay=1' might not work universally on Instagram embeds.
      // For Instagram, it's usually best to use their official embed code or ensure your URL is structured correctly.
      // If the direct embed from Instagram is problematic, YouTube/Vimeo are more reliable for autoplay.
      // Example of a more robust Instagram embed (requires a different URL structure or using their JS widget):
      // For simplicity, we'll stick to the current iframe structure for now, assuming it works as intended.
      embedUrl: 'https://www.instagram.com/p/Ct9B-fGgyKR/embed', // Removed autoplay for better user control and compatibility
      // We don't need a thumbnail if we are directly embedding the video and it loads immediately.
      // If Instagram embed shows a static image first, we could keep the thumbnail as a fallback or loading indicator.
    },
    {
      id: 2,
      title: 'פתרון בעיות התנהגות נפוצות',
      description: 'למידת פריקת אנרגיה נכונה, ובכך למנוע בעיות התנהגות של הרס הבית והשמדת רהיטים.',
      embedUrl: 'https://www.instagram.com/p/Cuoe0uUghpz/embed',
    },
    {
      id: 3,
      title: 'טיפים לאילוף מתקדם לכלבים בוגרים',
      description: 'למדו טכניקות מורכבות יותר וכיצד לשפר את הקשר עם כלבכם.',
      embedUrl: 'https://www.instagram.com/p/Ct9B-fGgyKR/embed',
    },
    // {
    //     id: 4,
    //     title: 'איך ללמד כלב לשבת',
    //     description: 'מדריך קצר ללימוד פקודת "שב" בקלות וביעילות.',
    //     embedUrl: 'https://www.instagram.com/p/Cg_X7gLA7Q4/embed', // Example for a fourth video if you want
    // }
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 scroll-offset">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-h2-mobile md:text-h2-desktop font-extrabold text-charcoal mb-4">
            סרטוני אילוף
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            צפו במבחר סרטוני אילוף והתנהגות כלבים, שיעניקו לכם הצצה מעמיקה לעולם האילוף ויעזרו לכם עם הטיפים הטובים ביותר.
          </p>
          <a
            href="https://www.instagram.com/asaflotenbrg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold text-lg bg-white px-5 py-2 rounded-full shadow-md hover:shadow-lg"
          >
            <Instagram className="w-6 h-6 text-pink-500" /> {/* Larger, colored Instagram icon */}
            <span>עקבו אחרינו באינסטגרם לעוד המון תכנים!</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid */}
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-103 transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }} // Staggered animation
            >
              <div className="relative w-full" style={{ paddingBottom: '100%' }}> {/* Aspect ratio container for Instagram */}
                <iframe 
                  src={video.embedUrl + '?autoplay=0&amp;app_id=1234567890'} // Added app_id as sometimes required for Instagram embeds. Autoplay set to 0.
                  width="100%" 
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Enhanced permissions
                  title={video.title}
                  className="absolute inset-0 w-full h-full object-cover" // Ensure iframe covers the container
                ></iframe>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;