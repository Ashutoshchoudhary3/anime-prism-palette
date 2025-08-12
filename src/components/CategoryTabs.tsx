import { Button } from "@/components/ui/button";
import { Tv, BookOpen, Scroll } from "lucide-react";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  const categories = [
    { id: "anime", label: "Anime", icon: Tv, color: "primary" },
    { id: "manga", label: "Manga", icon: BookOpen, color: "secondary" },
    { id: "manhwa", label: "Manhwa", icon: Scroll, color: "accent" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        
        return (
          <Button
            key={category.id}
            variant={isActive ? "anime" : "outline"}
            size="lg"
            onClick={() => onCategoryChange(category.id)}
            className={`
              relative overflow-hidden group transition-all duration-300
              ${isActive ? 'animate-neon-glow' : 'hover:border-primary hover:text-primary'}
            `}
          >
            <Icon className="h-5 w-5 mr-2" />
            {category.label}
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            )}
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;