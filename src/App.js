import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Header from './components/Header';
import Sidebar from './components/Sidebar'; // Импортируем Sidebar
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const hideSidebar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="app">
      {!hideSidebar && <Sidebar />}
      <div className="main-content" style={{ marginLeft: hideSidebar ? 0 : '220px' }}>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/top-rated-movies" element={<div>Top Rated Movies</div>} />
            <Route path="/top-rated-tv-shows" element={<div>Top Rated TV Shows</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/genre/:genre" element={<div>Genre Page</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
