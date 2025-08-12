import { Button } from "@/components/ui/button";
import { Star, TrendingUp, BookOpen, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="gradient-primary p-2 rounded-lg shadow-neon">
            <Star className="h-6 w-6 text-white anime-glow" />
          </div>
          <h1 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
            AnimeRank
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            <TrendingUp className="h-4 w-4 mr-2" />
            Trending
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-secondary">
            <BookOpen className="h-4 w-4 mr-2" />
            Browse
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-accent">
            <Zap className="h-4 w-4 mr-2" />
            Reviews
          </Button>
        </nav>
        
        <Button variant="anime" size="sm">
          Join Now
        </Button>
      </div>
    </header>
  );
};

export default Header;