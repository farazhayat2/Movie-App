import React, { useState, useEffect } from "react";

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const navbarStyle = {
    width: "100%", // 👈 full width!
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    gap: isMobile ? "1rem" : "0",
    boxSizing: "border-box", // 👈 to include padding inside width
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
    border: "none",
    width: isMobile ? "100%" : "250px",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <nav style={navbarStyle}>
      <div style={titleStyle}>Movie Search App</div>
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
          Search
        </button>
      </div>
    </nav>
  );
}
