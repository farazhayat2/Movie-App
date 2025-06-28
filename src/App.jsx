import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CategoryDropdown from "./Components/CategoryBar"; 
import Home from "./Components/Home";
import MoviePage from "./Components/MoviePage";

const API_KEY = "67eb2a6c";

function App() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  // Load default movies on initial load
  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  const fetchMovies = async (title) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = async (title) => {
    await fetchMovies(title);
    navigate("/"); // Return to home after search
  };

  const handleGenreClick = async (genre) => {
    await fetchMovies(genre);
    navigate("/"); // Ensure it stays on home page
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar onSearch={handleSearch} />
      <CategoryDropdown onGenreClick={handleGenreClick} /> {/* ✅ Updated here */}
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
