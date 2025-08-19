import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { options } from "../types/variable";

function TrailerPlayer({ movieId, isOpen, onClose }) {
  const [trailers, setTrailers] = useState([]);
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && movieId) {
      fetchTrailers();
    }
  }, [isOpen, movieId]);

  const fetchTrailers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );
      const data = await response.json();

      // Filter for trailers and teasers from YouTube
      const movieTrailers = data.results.filter(
        (video) =>
          video.site === "YouTube" &&
          (video.type === "Trailer" || video.type === "Teaser")
      );

      setTrailers(movieTrailers);
      setSelectedTrailer(movieTrailers[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trailers:", error);
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {selectedTrailer ? selectedTrailer.name : "Movie Trailers"}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative">
          {loading ? (
            <div className="aspect-video flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
            </div>
          ) : selectedTrailer ? (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedTrailer.key}?autoplay=1&rel=0`}
                title={selectedTrailer.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-300">
                No trailers available
              </p>
            </div>
          )}
        </div>

        {/* Trailer List */}
        {trailers.length > 1 && (
          <div className="p-4 border-t dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Available Trailers
            </h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {trailers.map((trailer) => (
                <button
                  key={trailer.id}
                  onClick={() => setSelectedTrailer(trailer)}
                  className={`w-full text-left p-2 rounded-md text-sm transition-colors ${
                    selectedTrailer?.id === trailer.id
                      ? "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <div className="font-medium">{trailer.name}</div>
                  <div className="text-xs text-gray-500">{trailer.type}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrailerPlayer;
