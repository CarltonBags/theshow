import { useState } from 'react';

const Episodes = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const episodes = [
    {
      id: 1,
      title: "Episode 1 - The Dev",
      description: "Steve and Lenny meet their first developer. Things don't go as planned when the code starts breaking faster than they can fix it.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder
      youtubeId: "dQw4w9WgXcQ", // Placeholder
      duration: "3:42"
    },
    {
      id: 2,
      title: "Episode 2 - Monee",
      description: "The boys encounter their first greedy investor. Watch as corporate greed meets crypto chaos in this hilarious episode.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder
      youtubeId: "dQw4w9WgXcQ", // Placeholder
      duration: "2:58"
    },
    {
      id: 3,
      title: "Episode 3 - Leroy",
      description: "Steve and Lenny meet Leroy, an influencer who promises the moon but delivers... well, you'll have to watch to find out!",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder
      youtubeId: "dQw4w9WgXcQ", // Placeholder
      duration: "3:15"
    }
  ];

  return (
    <section id="episodes" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-fredoka font-bold text-primary text-outline mb-4 bounce-in">
            SEASON ONE
          </h2>
          <p className="text-xl text-muted-foreground font-nunito font-semibold">
            Watch Steve and Lenny's crypto adventures unfold!
          </p>
        </div>

        {/* Episodes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {episodes.map((episode, index) => (
            <div 
              key={episode.id}
              className={`cartoon-card cursor-pointer slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedEpisode(episode)}
            >
              <div className="relative mb-4 rounded-lg overflow-hidden border-4 border-black">
                <img 
                  src={episode.thumbnail} 
                  alt={episode.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded text-sm font-bold">
                  {episode.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center border-4 border-black">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-fredoka font-bold text-primary mb-2">
                {episode.title}
              </h3>
              <p className="text-muted-foreground font-nunito">
                {episode.description}
              </p>
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

        {/* Coming Soon */}
        <div className="text-center">
          <div className="cartoon-card inline-block">
            <h3 className="text-3xl font-fredoka font-bold text-primary mb-2">
              MORE EPISODES COMING SOON!
            </h3>
            <p className="text-muted-foreground font-nunito">
              Subscribe to our Twitter for updates on new episodes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;