import React from "react";

export default function MovieCard({ movie, onClick }) {
  const cardStyle = {
    width: "220px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.2s",
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "0.75rem",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "0.5rem 0 0.25rem",
    color: "#111827",
  };

  const yearStyle = {
    fontSize: "0.875rem",
    color: "#64748b",
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=No+Image"}
        alt={movie.Title}
        style={imageStyle}
      />
      <div style={contentStyle}>
        <div style={titleStyle}>{movie.Title}</div>
        <div style={yearStyle}>{movie.Year}</div>
      </div>
    </div>
  );
}
