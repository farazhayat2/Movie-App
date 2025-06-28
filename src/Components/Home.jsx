// src/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./moviecard";

export default function Home({ movies }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "2rem",
    gap: "1rem",
  };

  return (
    <div style={gridStyle}>
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => handleClick(movie.imdbID)}
          />
        ))
      ) : (
        <p style={{ fontSize: "18px", color: "gray" }}>No movies to display</p>
      )}
    </div>
  );
}
