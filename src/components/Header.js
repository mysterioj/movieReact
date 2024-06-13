import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">🏠</Link>
        <Link to="/top-rated-movies" className="header-link">Top Rated Movies</Link>
        <Link to="/top-rated-tv-shows" className="header-link">Top Rated TV Shows</Link>
        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="header-link">TMDB</a>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search movie..." className="search-input" />
        <button className="search-button">🔍</button>
        {currentUser ? (
          <>
            <span>{currentUser.name}</span>
            <button onClick={handleLogout} className="header-link">Log Out</button>
          </>
        ) : (
          <Link to="/login" className="header-link">Log In</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
