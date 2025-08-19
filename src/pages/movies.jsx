import { useEffect, useState } from "react";
import Header from "../components/Headers";
import MovieSection from "../components/MovieSection";
import { urlPath } from "../types/env";
import { options } from "../types/variable";

export default function Movie() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(urlPath, options);
        const data = await response.json();
        setTrendingMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    setTimeout(() => {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500"></div>
        </div>
      );
    }, 9000);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200 px-12">
      <Header />
      <MovieSection
        title="Available movies"
        movies={trendingMovies.slice(0,24)}
        backgroundColor="bg-pink-50"
      />
      {/* You can fetch different endpoints for recommended movies */}
    </div>
  );
}
