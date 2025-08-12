import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroImage from "@/assets/anime-hero-bg.jpg";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onExploreClick: () => void;
}

const HeroSection = ({ searchQuery, onSearchChange, onExploreClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-anime-float">
          <span className="gradient-hero bg-clip-text text-transparent animate-glow-pulse">
            AnimeRank
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 animate-slide-in-up">
          Discover the best anime, manga, and manhwa with ratings from 
          <span className="text-primary font-bold"> multiple sources</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-in-up">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search anime, manga, manhwa..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl bg-card/80 backdrop-blur border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <Button 
            variant="hero" 
            size="lg" 
            className="animate-neon-glow"
            onClick={onExploreClick}
          >
            Explore Now
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground animate-slide-in-up">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
            <span>MyAnimeList</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary animate-glow-pulse" />
            <span>AniDB</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent animate-glow-pulse" />
            <span>Kitsu</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning animate-glow-pulse" />
            <span>IMDB</span>
          </div>
        </div>
      </div>
      
      {/* Floating anime elements */}
      <div className="absolute top-20 left-10 animate-anime-float">
        <div className="w-8 h-8 rounded-full gradient-primary shadow-neon opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-anime-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 rounded-full gradient-secondary shadow-pink opacity-60" />
      </div>
      <div className="absolute bottom-20 left-20 animate-anime-float" style={{ animationDelay: '2s' }}>
        <div className="w-10 h-10 rounded-full gradient-accent shadow-cyan opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;