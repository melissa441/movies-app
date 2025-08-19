import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesBazerApp from "./components/MoviesBazerApp";
import MovieDetails from "./pages/MovieDetails";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Explore from "./pages/explore";
import Movie from "./pages/movies";
import TvShow from "./pages/tv-shows";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ScaleLoader loading={loading} />
      </div>
    );
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesBazerApp />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/src/pages/explore.jsx" element={<Explore />} />
        <Route path="/src/pages/movies.jsx" element={<Movie />} />
        <Route path="/src/pages/Tv-shows.jsx" element={<TvShow />} />
      </Routes>
    </Router>
  );
}

export default App;
