import { NavLink } from 'react-router-dom'

export default function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  
  console.log("Movie:", movie.title, "Full Image URL:", imageUrl);
  
  return (
    <NavLink to={`/movie/${movie.id}`} className="group cursor-pointer block">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          onLoad={() => console.log(" Image loaded:", movie.title)}
          onError={(e) => {
            console.error(" Image failed to load:", movie.title, imageUrl)
            console.error("Error details:", e)
          }}
        />
        
        {/* Rating badge */}
       
      </div>
      
      <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-1 truncate group-hover:text-pink-500 transition-colors">
        {movie.title}
      </h3>
      
      <div className="flex items-center space-x-8 text-xs text-gray-500 dark:text-gray-400">
        <span>{movie.release_date?.slice(0, 4)}</span>
        <div>
    <span className='text-red-500'>•</span>
        <span>{movie.runtime ? `${movie.runtime}m` : "104m"}</span>
        </div>
      
      </div>
    </NavLink>
  )
}