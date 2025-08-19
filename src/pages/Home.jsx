import React, { useEffect } from 'react'   
import MovieCard from '../components/MovieCard'
import { urlPath } from '../types/env'
import { options } from '../types/variable'

function Home() {
    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    
    const handlindFetchMovies = async () => {
        try {
            setLoading(true)
            const response = await fetch(urlPath, options)
            const data = await response.json()
            console.log("Full API response:", data.results[0])
            setMovies(data.results)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        handlindFetchMovies()
    }, [])

    // Show loading spinner while fetching
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500"></div>
            </div>
        )
    }

    return (
        <div>
            {movies && movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default Home
