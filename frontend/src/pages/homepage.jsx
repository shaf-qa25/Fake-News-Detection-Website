import React, { useState, useEffect, useRef } from "react";
import ComplexFooter from "./footer";

const heroImages = [
  "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1650984661525-7e6b1b874e47?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=870",
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=435",
];

const API_URL = "https://vernis.onrender.com"; // your backend UR
const Home = () => {
  const [current, setCurrent] = useState(0);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const trendingRef = useRef(null);

  // Hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch trending news
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/trending/top-news`);
        const data = await res.json();
        setNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // Scroll to trending section
  const handleExploreClick = () => {
    if (trendingRef.current) {
      trendingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Detect Fake News Instantly
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl">
            Verify news articles and stay informed with facts.
          </p>
          <button
            onClick={handleExploreClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            Explore News
          </button>
        </div>
      </section>

      {/* TRENDING NEWS SECTION */}
      <section ref={trendingRef} className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6">🔥 Trending News</h2>

        {loading ? (
          <p>Loading trending news...</p>
        ) : news.length === 0 ? (
          <p>No news found. Please try again later.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Image */}
                {item.image ? (
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {item.description || "Click to read full article."}
                  </p>

                  {/* Source + Date */}
                  <div className="mt-auto flex justify-between items-center text-sm text-gray-500">
                    <span>{item.source.name}</span>
                    <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                  </div>

                  {/* Read More Button */}
                  <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      <ComplexFooter />
    </div>
  );
};

export default Home;
