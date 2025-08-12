export const sampleAnimeData = [
  {
    id: 1,
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    genre: ["Action", "Drama", "Fantasy"],
    year: 2013,
    description: "Humanity fights for survival against giant humanoid Titans in this intense dark fantasy series.",
    sources: [
      { name: "MyAnimeList", rating: 9.0, maxRating: 10, color: "#2e51a2" },
      { name: "AniDB", rating: 8.5, maxRating: 10, color: "#4f46e5" },
      { name: "Kitsu", rating: 4.2, maxRating: 5, color: "#ec4899" },
      { name: "IMDB", rating: 9.0, maxRating: 10, color: "#f59e0b" }
    ],
    type: "anime" as const
  },
  {
    id: 2,
    title: "Demon Slayer",
    image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=300&fit=crop",
    genre: ["Action", "Supernatural", "Shounen"],
    year: 2019,
    description: "A young boy becomes a demon slayer to save his sister and avenge his family.",
    sources: [
      { name: "MyAnimeList", rating: 8.7, maxRating: 10, color: "#2e51a2" },
      { name: "AniDB", rating: 8.2, maxRating: 10, color: "#4f46e5" },
      { name: "Kitsu", rating: 4.1, maxRating: 5, color: "#ec4899" },
      { name: "IMDB", rating: 8.9, maxRating: 10, color: "#f59e0b" }
    ],
    type: "anime" as const
  },
  {
    id: 3,
    title: "Your Name",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    genre: ["Romance", "Drama", "Supernatural"],
    year: 2016,
    description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies.",
    sources: [
      { name: "MyAnimeList", rating: 8.4, maxRating: 10, color: "#2e51a2" },
      { name: "AniDB", rating: 8.9, maxRating: 10, color: "#4f46e5" },
      { name: "Kitsu", rating: 4.3, maxRating: 5, color: "#ec4899" },
      { name: "IMDB", rating: 8.2, maxRating: 10, color: "#f59e0b" }
    ],
    type: "anime" as const
  }
];

export const sampleMangaData = [
  {
    id: 4,
    title: "One Piece",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    genre: ["Adventure", "Comedy", "Shounen"],
    year: 1997,
    description: "Follow Monkey D. Luffy and his pirate crew in search of the ultimate treasure, One Piece.",
    sources: [
      { name: "MyAnimeList", rating: 9.2, maxRating: 10, color: "#2e51a2" },
      { name: "AniDB", rating: 8.8, maxRating: 10, color: "#4f46e5" },
      { name: "Kitsu", rating: 4.4, maxRating: 5, color: "#ec4899" },
      { name: "IMDB", rating: 9.0, maxRating: 10, color: "#f59e0b" }
    ],
    type: "manga" as const
  },
  {
    id: 5,
    title: "Naruto",
    image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=300&fit=crop",
    genre: ["Action", "Adventure", "Martial Arts"],
    year: 1999,
    description: "A young ninja seeks recognition from his peers and dreams of becoming the Hokage.",
    sources: [
      { name: "MyAnimeList", rating: 8.3, maxRating: 10, color: "#2e51a2" },
      { name: "AniDB", rating: 8.1, maxRating: 10, color: "#4f46e5" },
      { name: "Kitsu", rating: 3.9, maxRating: 5, color: "#ec4899" },
      { name: "IMDB", rating: 8.4, maxRating: 10, color: "#f59e0b" }
    ],
    type: "manga" as const
  }
];

export const sampleManhwaData = [
  {
    id: 6,
    title: "Solo Leveling",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 2018,
    description: "In a world where hunters fight monsters, the weakest hunter gains incredible power.",
    sources: [
      { name: "MyAnimeList", rating: 8.9, maxRating: 10, color: "#2e51a2" },
      { name: "AniDB", rating: 8.7, maxRating: 10, color: "#4f46e5" },
      { name: "Kitsu", rating: 4.3, maxRating: 5, color: "#ec4899" },
      { name: "IMDB", rating: 8.8, maxRating: 10, color: "#f59e0b" }
    ],
    type: "manhwa" as const
  },
  {
    id: 7,
    title: "Tower of God",
    image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=300&fit=crop",
    genre: ["Action", "Adventure", "Mystery"],
    year: 2010,
    description: "A boy enters a mysterious tower where each floor brings new challenges and revelations.",
    sources: [
      { name: "MyAnimeList", rating: 8.2, maxRating: 10, color: "#2e51a2" },
      { name: "AniDB", rating: 8.0, maxRating: 10, color: "#4f46e5" },
      { name: "Kitsu", rating: 4.0, maxRating: 5, color: "#ec4899" },
      { name: "IMDB", rating: 8.3, maxRating: 10, color: "#f59e0b" }
    ],
    type: "manhwa" as const
  }
];

export const getAllData = () => [...sampleAnimeData, ...sampleMangaData, ...sampleManhwaData];

export const getDataByType = (type: string) => {
  switch (type) {
    case "anime": return sampleAnimeData;
    case "manga": return sampleMangaData;
    case "manhwa": return sampleManhwaData;
    default: return getAllData();
  }
};