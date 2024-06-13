import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} className="movie-poster" />
      <h3>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;
