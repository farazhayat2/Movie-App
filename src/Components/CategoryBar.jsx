import React from "react";

export default function CategoryDropdown({ onGenreClick, darkMode }) {
  const genres = ["Action", "Adventure", "Comedy", "Drama", "Horror", "Romance"];

  const containerStyle = {
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: darkMode ? "#1e293b" : "#f1f5f9",
  };

  const selectStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: darkMode ? "#334155" : "#ffffff",
    color: darkMode ? "#f8fafc" : "#1e293b",
    border: "1px solid",
    borderColor: darkMode ? "#475569" : "#cbd5e1",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const handleChange = (e) => {
    const genre = e.target.value;
    if (genre) onGenreClick(genre);
  };

  return (
    <div style={containerStyle}>
      <select onChange={handleChange} style={selectStyle} defaultValue="">
        <option value="" disabled>Select Genre</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}
