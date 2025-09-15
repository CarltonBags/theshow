import { useState, useEffect } from 'react';
import charactersImage from '../assets/characters.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-secondary via-primary to-primary-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-black rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-black rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-black rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-black rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
        {/* Characters */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <img 
            src={charactersImage} 
            alt="Steve and Lenny - The Crypto Degenz" 
            className="w-full max-w-sm mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Tagline */}
        <div className={`text-center mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-fredoka font-bold text-white text-outline mb-4">
            THE CRYPTO CARTOON SERIES
          </h1>
          <p className="text-xl md:text-2xl font-nunito font-semibold text-white text-outline mb-6">
            Follow Steve & Lenny as they navigate the wild world of crypto!
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Code errors, corrupt VCs, greedy influencers - watch our heroes tackle it all 
            in this hilarious South Park-style crypto adventure!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button 
            className="cartoon-button bg-secondary text-black hover:bg-secondary/90"
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-4 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;