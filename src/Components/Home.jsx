// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./moviecard";
import CategoryDropdown from "./CategoryBar"; // ✅ imported here only

export default function Home({ movies, darkMode, onGenreClick }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      {/* ✅ Category dropdown appears only on Home page, not Navbar */}
      <CategoryDropdown onGenreClick={onGenreClick} darkMode={darkMode} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "2rem",
          gap: "1rem",
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => handleClick(movie.imdbID)}
            darkMode={darkMode}
          />
        ))}
      </div>
    </>
  );
}
