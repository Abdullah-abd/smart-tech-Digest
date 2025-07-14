// HomePage;
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { designPosts } from "../assets/designPosts";
import { posts as geoPosts } from "../assets/posts"; // country-specific posts
import { techPosts } from "../assets/techPosts";
import CountryTrends from "../components/CountryTrends"; // ✅ import component
import NewsCard from "../components/NewsCard";
import useGeolocation from "../hooks/GeolocationApi";
import useNetworkInfo from "../hooks/NetworkApi";

const HomePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<
    "for-you" | "tech" | "design" | "trends"
  >("for-you");

  const { effectiveType, saveData } = useNetworkInfo();
  const { country, loading: geoLoading } = useGeolocation();

  useEffect(() => {
    const isVerySlow = effectiveType === "2g" || effectiveType === "slow-2g";
    if (isVerySlow || saveData) {
      toast(
        "⚠️ You're on a slow connection. Some images may load in low quality or not display.",
        { duration: 5000 }
      );
    }
  }, [effectiveType, saveData]);

  const getArticles = () => {
    if (selectedTab === "tech") return techPosts;
    if (selectedTab === "design") return designPosts;
    if (geoLoading) return [];
    return geoPosts[country] || geoPosts["India"];
  };

  const articles = getArticles();

  return (
    <div className="min-h-screen bg-lightbg px-4 md:px-8 py-6">
      <Toaster
        position="top-right"
        toastOptions={{ style: { fontSize: "14px" } }}
      />

      {/* Branding + Navigation */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-watermelon">
            Smart Tech Digest 🍉
          </h1>
        </div>

        {/* Nav Tabs */}
        <nav className="mt-4 md:mt-0 flex gap-3 flex-wrap">
          {["for-you", "tech", "design", "trends"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow transition ${
                selectedTab === tab
                  ? "bg-watermelon text-white"
                  : "bg-white text-watermelon border border-watermelon hover:bg-watermelon hover:text-white"
              }`}
            >
              {tab === "for-you"
                ? "For You"
                : tab === "tech"
                ? "Tech"
                : tab === "design"
                ? "Design"
                : "Trends"}
            </button>
          ))}
        </nav>
      </header>

      {/* Section Title */}
      {selectedTab !== "trends" && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            {selectedTab === "for-you"
              ? `Top Stories in ${country || "India"}`
              : selectedTab === "tech"
              ? "Latest in Tech"
              : "Design Trends and Tips"}
          </h2>
          <p className="text-sm text-muted mt-1">
            {selectedTab === "for-you"
              ? "Based on your current location and interests"
              : selectedTab === "tech"
              ? "Modern stacks, libraries, and tooling"
              : "Fresh UI/UX inspirations and practices"}
          </p>
        </section>
      )}

      {/* Cards or Trends Section */}
      <section>
        {selectedTab === "trends" ? (
          <CountryTrends />
        ) : geoLoading && selectedTab === "for-you" ? (
          <p className="text-muted text-center">Detecting your location...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              return <NewsCard key={article.id} article={article} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
