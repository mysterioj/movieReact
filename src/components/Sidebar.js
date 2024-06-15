import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const genres = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 
  'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 
  'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'
];

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>MovieList</h2>
      <button className="watchlist-button">My watchlist</button>
      <div className="genres">
        {genres.map(genre => (
          <Link to={`/genre/${genre.toLowerCase().replace(' ', '-')}`} key={genre} className="genre-link">
            {genre}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
