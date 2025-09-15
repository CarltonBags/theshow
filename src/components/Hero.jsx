import { useState, useEffect } from 'react';
import charactersImage from '../assets/characters.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
        {/* Characters */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <img 
            src={charactersImage} 
            alt="Steve and Lenny - Crypto Degenz" 
            className="w-full max-w-3xl mx-auto"
          />
        </div>

        {/* Tagline */}
        <div className={`text-center mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-7xl lg:text-7xl font-fredoka font-black text-primary text-outline mb-6">
            THE CRYPTO MINI-CARTOON SERIES
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-nunito font-bold text-primary mb-6">
            Follow Steve & Lenny as they navigate the wild world of crypto!
          </p>
          <p className="text-xl md:text-2xl text-primary/90 max-w-3xl mx-auto">
            Code errors, disgusting chicks, greedy influencers - watch our heroes tackle it all 
            on their journey to code the greatest Launchpad in Crypto history!
          </p>
        </div>

        {/* Trailer */}
        <div className={`w-full max-w-4xl mx-auto mb-12 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-fredoka font-black text-primary text-center text-outline mb-6">
            TRAILER
          </h2>
          <div className="relative rounded-xl overflow-hidden border-8 border-black shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/z8RMODBZTBc"
                title="DEGENZ Trailer"
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button 
            className="cartoon-button bg-primary text-white hover:bg-primary/90"
            onClick={() => document.getElementById('episodes').scrollIntoView({ behavior: 'smooth' })}
          >
            WATCH EPISODES
          </button>
          <button 
            className="cartoon-button bg-white text-primary hover:bg-white/90"
            onClick={() => window.open('https://twitter.com/DegenzTheShow', '_blank')}
          >
            FOLLOW ON TWITTER
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <div className="w-6 h-10 border-4 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;