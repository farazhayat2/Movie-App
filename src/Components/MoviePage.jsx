// MoviePage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieDetail from "./MovieDetail";

const API_KEY = "67eb2a6c";

export default function MoviePage({ darkMode }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovie = async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
      const data = await res.json();
      setMovie(data);
    };
    getMovie();
  }, [id]);

  return (
    <div style={{ padding: "2rem" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: darkMode ? "#334155" : "#e2e8f0",
          color: darkMode ? "#f8fafc" : "#0f172a",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ⬅ Go Back
      </button>

      {movie ? <MovieDetail movie={movie} darkMode={darkMode} /> : <div>Loading...</div>}
    </div>
  );
}
