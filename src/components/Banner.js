import React, { useState, useEffect } from 'react';
import './Banner.css';
import { BASE_URL, IMAGE_BASE_URL } from '../config/requests';
import requests from '../config/requests';

function Banner() {
  const [movie, setMovie] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_URL}${requests.fetchNetflixOriginals}`);
        const data = await response.json();
        setMovie(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      } catch (error) {
        console.error("Error fetching banner movie:", error);
      }
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handlePlay = () => {
    setShowTrailer(true);
  };

  if (!movie) return <div className="banner banner__loading">Loading...</div>;

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("${IMAGE_BASE_URL}${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={handlePlay}>Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      {showTrailer && (
        <div className="banner__trailer">
          <div className="banner__trailerContent">
            <h2>Coming Soon!</h2>
            <p>Video playback will be implemented in the next update.</p>
            <button onClick={() => setShowTrailer(false)}>Close</button>
          </div>
        </div>
      )}
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
