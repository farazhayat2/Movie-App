// MovieCard.jsx
import React from "react";

export default function MovieCard({ movie, onClick, darkMode }) {
  const cardStyle = {
    backgroundColor: darkMode ? "#1e293b" : "#ffffff",
    color: darkMode ? "#f1f5f9" : "#1e293b",
    padding: "1rem",
    borderRadius: "8px",
    width: "200px",
    boxShadow: darkMode
      ? "0 4px 12px rgba(0,0,0,0.4)"
      : "0 4px 12px rgba(0,0,0,0.1)",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "0.5rem",
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=No+Image"}
        alt={movie.Title}
        style={imageStyle}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}
