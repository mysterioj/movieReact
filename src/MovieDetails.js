import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const API_URL = 'https://api.themoviedb.org/3/movie';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/${id}?api_key=37317224df9d2274a01c570a6d12c17b`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
