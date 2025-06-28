// src/Components/CategoryDropdown.jsx
import React, { useState } from "react";

const genres = ["Action", "Adventure", "Comedy", "Horror", "Romance", "Sci-Fi"];

export default function CategoryDropdown({ onGenreClick }) {
  const [open, setOpen] = useState(false);

  const dropdownStyle = {
    position: "relative",
    display: "inline-block",
    margin: "1rem",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  const listStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "6px",
    zIndex: 100,
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
    width: "100%",
  };

  const itemStyle = {
    padding: "10px 15px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
  };

  return (
    <div style={dropdownStyle}>
      <button onClick={() => setOpen(!open)} style={buttonStyle}>
        Category {open ? "▲" : "▼"}
      </button>
      {open && (
        <div style={listStyle}>
          {genres.map((genre) => (
            <div
              key={genre}
              style={itemStyle}
              onClick={() => {
                onGenreClick(genre);
                setOpen(false); // close dropdown after click
              }}
            >
              {genre}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
