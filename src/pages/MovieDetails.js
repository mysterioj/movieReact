import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css';

const API_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '37317224df9d2274a01c570a6d12c17b';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/${id}?api_key=${API_KEY}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <Link to="/" className="back-button">Go back</Link>
      <div className="movie-details-content">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-details-info">
          <h1>{movie.title}</h1>
          <p>{movie.tagline}</p>
          <p>{movie.overview}</p>
          <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Runtime: {movie.runtime} min</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
