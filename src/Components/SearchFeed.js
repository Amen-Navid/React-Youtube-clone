import React from "react";

function SearchFeed({ searchResults }) {
  return (
    <>
      <div className="search-page">
        <h2>Search Result</h2>
        {searchResults.map((result) => (
          <div key={result.id.videoId} className="search-result">
            <iframe
              width="400"
              height="200"
              src={`https://www.youtube.com/embed/${result.id.videoId}`}
              alt={result.snippet.title}
              title={result.snippet.title}
              frameBorder="0"
              allowFullScreen
              className="search-container"
            ></iframe>
            <div className="search-details">
              <h2>{result.snippet.title}</h2>
              <p>{result.snippet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchFeed;
