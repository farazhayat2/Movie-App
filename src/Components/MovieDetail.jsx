import React from "react";

export default function MovieDetail({ movie }) {
  const containerStyle = {
    display: "flex",
    flexDirection: window.innerWidth < 768 ? "column" : "row",
    alignItems: "flex-start",
    gap: "2rem",
    padding: "2rem",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
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
    color: "#0f172a",
  };

  const textStyle = {
    marginBottom: "0.5rem",
    color: "#334155",
    fontSize: "1rem",
  };

  const plotStyle = {
    marginTop: "1rem",
    color: "#475569",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    marginTop: "1.5rem",
    padding: "12px 20px",
    backgroundColor: "#16a34a",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  };

  // ✅ Demo download link
  const demoDownloadUrl = "https://file-examples.com/storage/fe2f6d6bb9a38bb226556fe/2017/04/file_example_MP4_480_1_5MG.mp4";

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

        {/* ✅ Direct download button */}
        <a
  href="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
  download
  target="_blank"
  rel="noopener noreferrer"
  style={buttonStyle}
>
  Download Movie
</a>

      </div>
    </div>
  );
}
