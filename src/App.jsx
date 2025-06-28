// App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import MoviePage from "./Components/MoviePage";

const API_KEY = "67eb2a6c";

function App() {
  const [movies, setMovies] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

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
    navigate("/");
  };

  const handleGenreClick = async (genre) => {
    await fetchMovies(genre);
    navigate("/");
  };

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
        color: darkMode ? "#e2e8f0" : "#1e293b",
        fontFamily: "Arial, sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      <Navbar onSearch={handleSearch} darkMode={darkMode} toggleTheme={toggleTheme} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              darkMode={darkMode}
              onGenreClick={handleGenreClick} // ✅ pass this to Home
            />
          }
        />
        <Route path="/movie/:id" element={<MoviePage darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
