import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css';  // Убедитесь, что этот путь правильный

const API_URL = 'https://api.themoviedb.org/3/movie';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/${id}?api_key=YOUR_API_KEY`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container movie-details">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
