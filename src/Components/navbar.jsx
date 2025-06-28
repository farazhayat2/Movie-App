// Navbar.jsx
import React, { useState, useEffect } from "react";

export default function Navbar({ onSearch, darkMode, toggleTheme }) {
  const [query, setQuery] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
      setQuery(""); // Optional: clear input after search
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const navbarStyle = {
    width: "100%",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    backgroundColor: darkMode ? "#1e293b" : "#f1f5f9",
    color: darkMode ? "#f1f5f9" : "#1e293b",
    gap: isMobile ? "1rem" : "0",
    boxSizing: "border-box",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    flex: 1,
    textAlign: isMobile ? "center" : "left",
  };

  const searchContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    gap: "0.5rem",
  };

  const inputStyle = {
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid",
    borderColor: darkMode ? "#475569" : "#cbd5e1",
    backgroundColor: darkMode ? "#334155" : "#ffffff",
    color: darkMode ? "#f8fafc" : "#0f172a",
    width: isMobile ? "100%" : "250px",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: darkMode ? "#475569" : "#e2e8f0",
    color: darkMode ? "#f8fafc" : "#0f172a",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <nav style={navbarStyle}>
      <div style={titleStyle}>🎬 Movie App</div>

      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          style={inputStyle}
        />
        <button onClick={handleSearch} style={buttonStyle}>
          🔍 Search
        </button>
        <button onClick={toggleTheme} style={buttonStyle}>
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
