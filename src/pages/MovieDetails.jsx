import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Play, Star, Calendar, Clock, ArrowLeft } from "lucide-react";
import { options } from "../types/variable";
import TrailerPlayer from "../components/TrailerPlayer";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const formatRuntime = (minutes) => {
    if (!minutes) return "N/A";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const formatBudget = (amount) => {
    if (!amount) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Loading movie details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">Error: {error}</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-300">Movie not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Header with back button */}
      <div className="px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>

      {/* Hero Section with Backdrop */}
      <div className="relative">
        {movie.backdrop_path && (
          <div
            className="w-full h-96 bg-cover bg-center relative"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          >
            <div className="absolute bottom-8 left-8">
              <button
                onClick={() => setShowTrailer(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Play className="w-5 h-5" />
                <span>Watch Trailer</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full rounded-lg shadow-lg"
                />
              ) : (
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">No poster available</span>
                </div>
              )}
            </div>
          </div>

          {/* Movie Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {movie.title}
              </h1>
              {movie.tagline && (
                <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">
                  "{movie.tagline}"
                </p>
              )}

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {movie.vote_average?.toFixed(1)}/10 ({movie.vote_count}{" "}
                    votes)
                  </span>
                </div>

                <div className="flex items-center space-x-1">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                </div>

                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {formatRuntime(movie.runtime)}
                  </span>
                </div>
              </div>
            </div>

            {/* Genres */}
            {movie.genres && movie.genres.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Genres
                </h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Overview */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {movie.overview || "No overview available."}
              </p>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Movie Info
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {movie.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Release Date:</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {new Date(movie.release_date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Runtime:</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {formatRuntime(movie.runtime)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Budget:</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {formatBudget(movie.budget)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Revenue:</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {formatBudget(movie.revenue)}
                    </span>
                  </div>
                </div>
              </div>

              {movie.production_companies &&
                movie.production_companies.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Production Companies
                    </h3>
                    <div className="space-y-2">
                      {movie.production_companies.map((company) => (
                        <div
                          key={company.id}
                          className="flex items-center space-x-2"
                        >
                          {company.logo_path && (
                            <img
                              src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                              alt={company.name}
                              className="w-8 h-8 object-contain"
                            />
                          )}
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {company.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

      {/* Trailer Player Modal */}
      <TrailerPlayer
        movieId={id}
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
      />
    </div>
  );
}

export default MovieDetails;
