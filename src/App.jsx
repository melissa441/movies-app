import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesBazerApp from "./components/MoviesBazerApp";
import MovieDetails from "./pages/MovieDetails";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

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
      </Routes>
    </Router>
  );
}

export default App;
