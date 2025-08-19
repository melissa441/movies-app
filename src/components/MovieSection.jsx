import MovieCard from "./MovieCard";

export default function MovieSection({ title, movies }) {
  return (
    <section className="bg-white dark:bg-black px-4 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4 flex-1">
            <div>
              <img src="/Mask group.png" alt="trending" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 mx-4"></div>
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
              See More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
