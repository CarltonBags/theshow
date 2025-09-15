import { useState } from 'react';
import titlecardImage from '../assets/titlecard.png';

const Episodes = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const episodes = [
    {
      id: 1,
      title: "Episode 1 - The Dev",
      description: "Steve and Lenny need an additional Dev. But the applicants are not what they were hoping for.",
      thumbnail: "https://img.youtube.com/vi/idB9tzSEKEk/maxresdefault.jpg",
      youtubeId: "idB9tzSEKEk",
      duration: "2:33"
    },
    {
      id: 2,
      title: "Episode 2 - Monee",
      description: "The boys make a beginner mistake in their financial planning: Talking about a token launch unencrypted.",
      thumbnail: titlecardImage,
      youtubeId: "", // Placeholder
      duration: "x:xx"
    },
    {
      id: 3,
      title: "Episode 3 - Leroy",
      description: "Steve and Lenny decide to get some advice from a crypto veteran. Will his advice be helpful?",
      thumbnail: titlecardImage,
      youtubeId: "", // Placeholder
      duration: "x:xx"
    },
    {
      id: 4,
      title: "Episode 4 - BTC",
      description: "The guys wanted to attend a crypto conference for networking. But they accidentally bought tickets to a BTC conference instead...",
      thumbnail: titlecardImage,
      youtubeId: "", // Placeholder
      duration: "x:xx"
    }
  ];

  return (
    <section id="episodes" className="relative py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div>
          <div className="text-center text-8xl md:text-9xl lg:text-huge xl:text-giant font-fredoka font-black text-primary mb-8 text-outline">
            SEASON ONE
          </div>

          {/* Episodes List */}
          <div className="space-y-32">
            {episodes.map((episode, index) => (
              <div key={episode.id} className="max-w-6xl mx-auto">
                {/* Desktop Layout */}
                {index % 2 === 0 ? (
                  // Even numbered episodes - Text Left, Video Right
                  <div className="hidden lg:flex gap-16 items-center bg-primary border-8 border-white rounded-2xl p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]">
                    {/* Text on Left */}
                    <div className="w-5/12">
                      <div className="space-y-6">
                        <h3 className="text-4xl font-fredoka font-black text-white mb-4">
                          {episode.title}
                        </h3>
                        <p className="text-xl text-white font-nunito leading-relaxed">
                          {episode.description}
                        </p>
                        <button 
                          onClick={() => setSelectedEpisode(episode)}
                          className="cartoon-button bg-secondary text-primary text-lg px-6 py-3 mt-6 hover:scale-110"
                        >
                          WATCH NOW
                        </button>
                      </div>
                    </div>
                    
                    {/* Video on Right */}
                    <div className="w-7/12">
                      <div 
                        className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => setSelectedEpisode(episode)}
                      >
                        <div className="relative rounded-xl overflow-hidden border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                          <div className="aspect-video">
                            <img 
                              src={episode.thumbnail} 
                              alt={episode.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 rounded-lg text-base font-bold border-2 border-white">
                            {episode.duration}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-black transform hover:scale-110 transition-transform">
                              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Odd numbered episodes - Video Left, Text Right
                  <div className="hidden lg:flex gap-16 items-center bg-primary border-8 border-white rounded-2xl p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]">
                    {/* Video on Left */}
                    <div className="w-7/12">
                      <div 
                        className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => setSelectedEpisode(episode)}
                      >
                        <div className="relative rounded-xl overflow-hidden border-8 border-black ">
                          <div className="aspect-video">
                            <img 
                              src={episode.thumbnail} 
                              alt={episode.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 rounded-lg text-base font-bold border-2 border-white">
                            {episode.duration}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-black transform hover:scale-110 transition-transform">
                              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text on Right */}
                    <div className="w-5/12">
                      <div className="space-y-6">
                        <h3 className="text-4xl font-fredoka font-black text-white mb-4">
                          {episode.title}
                        </h3>
                        <p className="text-xl text-white font-nunito leading-relaxed">
                          {episode.description}
                        </p>
                        <button 
                          onClick={() => setSelectedEpisode(episode)}
                          className="cartoon-button bg-secondary text-primary text-lg px-6 py-3 mt-6 hover:scale-110"
                        >
                          WATCH NOW
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile Layout */}
                <div className="lg:hidden space-y-8 bg-primary border-8 border-white rounded-2xl p-6 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]">
                  <div className="space-y-6">
                    <h3 className="text-4xl font-fredoka font-black text-white mb-4">
                      {episode.title}
                    </h3>
                    <p className="text-xl text-white font-nunito leading-relaxed">
                      {episode.description}
                    </p>
                    <button 
                      onClick={() => setSelectedEpisode(episode)}
                      className="cartoon-button bg-secondary text-primary text-lg px-6 py-3 mt-6 hover:scale-110"
                    >
                      WATCH NOW
                    </button>
                  </div>
                  
                  <div 
                    className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedEpisode(episode)}
                  >
                    <div className="relative rounded-xl overflow-hidden border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <div className="aspect-video">
                        <img 
                          src={episode.thumbnail} 
                          alt={episode.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 rounded-lg text-base font-bold border-2 border-white">
                        {episode.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Player Modal */}
          {selectedEpisode && (
            <div 
              className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedEpisode(null)}
            >
              <div 
                className="bg-background rounded-lg border-4 border-black max-w-4xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-3xl font-fredoka font-bold text-primary">
                      {selectedEpisode.title}
                    </h3>
                    <button 
                      onClick={() => setSelectedEpisode(null)}
                      className="cartoon-button bg-destructive text-destructive-foreground text-2xl px-4 py-2"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="aspect-video mb-4 rounded-lg overflow-hidden border-4 border-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedEpisode.youtubeId}`}
                      className="w-full h-full"
                      allowFullScreen
                      title={selectedEpisode.title}
                    ></iframe>
                  </div>
                  
                  <p className="text-muted-foreground font-nunito text-lg">
                    {selectedEpisode.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Episodes;