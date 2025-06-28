// src/MoviePage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "./MovieDetail";

const API_KEY = "67eb2a6c";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

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
      {movie ? <MovieDetail movie={movie} /> : <div>Loading...</div>}
    </div>
  );
}
