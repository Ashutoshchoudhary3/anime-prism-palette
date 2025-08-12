import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import RatingCard from "@/components/RatingCard";
import { getDataByType, getAllData } from "@/data/sampleData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("anime");
  const [searchQuery, setSearchQuery] = useState("");
  const rawData = getDataByType(activeCategory);
  
  // Filter data based on search query
  const data = searchQuery
    ? rawData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : rawData;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onExploreClick={() => {
          document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      
      <main id="content-section" className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-hero bg-clip-text text-transparent">
              Explore by Category
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover highly-rated content across different platforms and sources
          </p>
        </div>
        
        <CategoryTabs 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <RatingCard key={item.id} {...item} />
          ))}
        </div>
        
        {data.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No content found for this category yet.
            </p>
          </div>
        )}
      </main>
      
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-lg font-bold gradient-primary bg-clip-text text-transparent mb-2">
              AnimeRank
            </h3>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for anime, manga, and manhwa ratings
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
