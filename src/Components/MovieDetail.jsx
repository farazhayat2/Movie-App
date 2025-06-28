// MovieDetail.jsx
import React from "react";

export default function MovieDetail({ movie, darkMode }) {
  const containerStyle = {
    display: "flex",
    flexDirection: window.innerWidth < 768 ? "column" : "row",
    alignItems: "flex-start",
    gap: "2rem",
    padding: "2rem",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: darkMode ? "#1e293b" : "#ffffff",
    color: darkMode ? "#f8fafc" : "#0f172a",
    borderRadius: "12px",
    boxShadow: darkMode
      ? "0 6px 20px rgba(0,0,0,0.5)"
      : "0 6px 20px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  };

  const posterStyle = {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "10px",
  };

  const detailStyle = {
    flex: 1,
  };

  const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const textStyle = {
    marginBottom: "0.5rem",
    fontSize: "1rem",
  };

  const plotStyle = {
    marginTop: "1rem",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
        style={posterStyle}
      />

      <div style={detailStyle}>
        <div style={titleStyle}>{movie.Title}</div>
        <div style={textStyle}><strong>Year:</strong> {movie.Year}</div>
        <div style={textStyle}><strong>Genre:</strong> {movie.Genre}</div>
        <div style={textStyle}><strong>Runtime:</strong> {movie.Runtime}</div>
        <div style={textStyle}><strong>IMDb Rating:</strong> {movie.imdbRating}</div>
        <div style={plotStyle}><strong>Plot:</strong> {movie.Plot}</div>
      </div>
    </div>
  );
}
