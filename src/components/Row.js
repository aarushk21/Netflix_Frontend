import React, { useState } from 'react';
import './Row.css';

function Row({ title, isLargeRow = false }) {
  const [movies, setMovies] = useState([
    { id: 1, poster_path: '/sample1.jpg', backdrop_path: '/sample1.jpg', name: 'Movie 1' },
    { id: 2, poster_path: '/sample2.jpg', backdrop_path: '/sample2.jpg', name: 'Movie 2' },
    // Add more sample movies as needed
  ]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
