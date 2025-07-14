import React, { useState } from "react";
import { posts } from "../assets/posts";
import NewsCard from "./NewsCard";

const CountryTrends: React.FC = () => {
  const [search, setSearch] = useState("");
  const [expandedCountries, setExpandedCountries] = useState<
    Record<string, boolean>
  >(() => {
    const allExpanded: Record<string, boolean> = {};
    Object.keys(posts).forEach((country) => {
      allExpanded[country] = true;
    });
    return allExpanded;
  });

  const countries = Object.keys(posts);

  const filteredCountries = search.trim()
    ? countries.filter((country) =>
        country.toLowerCase().includes(search.toLowerCase())
      )
    : countries;

  const handleToggle = (country: string) => {
    setExpandedCountries((prev) => ({
      ...prev,
      [country]: !prev[country],
    }));
  };

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-watermelon">
        Explore Global Trends 🌍
      </h2>

      <input
        type="text"
        placeholder="Search country..."
        className="w-full md:w-1/2 mb-8 px-4 py-2 border rounded shadow-sm focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredCountries.length === 0 ? (
        <p className="text-muted text-center mt-4">
          No country found with that name.
        </p>
      ) : (
        filteredCountries.map((country) => (
          <div key={country} className="mb-12">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800">{country}</h3>
              <button
                onClick={() => handleToggle(country)}
                className="text-sm text-watermelon underline hover:text-mint/80 transition"
              >
                {expandedCountries[country] ? "Hide Trends" : "Show Trends"}
              </button>
            </div>

            {expandedCountries[country] && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {posts[country].map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default CountryTrends;
