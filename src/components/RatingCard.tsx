import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Heart, Eye, ExternalLink } from "lucide-react";

interface RatingSource {
  name: string;
  rating: number;
  maxRating: number;
  color: string;
}

interface RatingCardProps {
  title: string;
  image: string;
  genre: string[];
  year: number;
  description: string;
  sources: RatingSource[];
  type: "anime" | "manga" | "manhwa";
}

const RatingCard = ({ title, image, genre, year, description, sources, type }: RatingCardProps) => {
  const averageRating = sources.reduce((acc, source) => acc + (source.rating / source.maxRating) * 10, 0) / sources.length;
  
  const getRatingClass = (rating: number) => {
    if (rating >= 8) return "rating-excellent";
    if (rating >= 6) return "rating-good";
    if (rating >= 4) return "rating-average";
    return "rating-poor";
  };

  const getTypeGradient = () => {
    switch (type) {
      case "anime": return "gradient-primary";
      case "manga": return "gradient-secondary";
      case "manhwa": return "gradient-accent";
      default: return "gradient-primary";
    }
  };

  return (
    <Card className="gradient-card shadow-card hover:shadow-neon transition-all duration-300 transform hover:scale-105 animate-slide-in-up group overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold ${getTypeGradient()}`}>
          {type.toUpperCase()}
        </div>
        <div className="absolute top-2 right-2 flex gap-1">
          <div className={`px-2 py-1 rounded-full text-xs font-bold ${getRatingClass(averageRating)}`}>
            {averageRating.toFixed(1)}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {genre.map((g) => (
            <Badge key={g} variant="outline" className="text-xs border-primary/30 text-primary">
              {g}
            </Badge>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="space-y-2 mb-4">
          {sources.map((source) => (
            <div key={source.name} className="flex items-center justify-between">
              <span className="text-sm text-foreground">{source.name}</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < (source.rating / source.maxRating) * 5
                          ? "text-warning fill-current"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold" style={{ color: source.color }}>
                  {source.rating.toFixed(1)}/{source.maxRating}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:text-destructive">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:text-accent">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm" className="hover:gradient-primary hover:text-white transition-all duration-300">
            <ExternalLink className="h-3 w-3 mr-1" />
            View
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RatingCard;