import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Header from './components/Header';
import Login from './pages/Login'; // Импортируйте компонент входа
import Register from './pages/Register'; // Импортируйте компонент регистрации
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/top-rated-movies" element={<div>Top Rated Movies</div>} />
        <Route path="/top-rated-tv-shows" element={<div>Top Rated TV Shows</div>} />
        <Route path="/login" element={<Login />} /> {/* Добавьте маршрут для входа */}
        <Route path="/register" element={<Register />} /> {/* Добавьте маршрут для регистрации */}
      </Routes>
    </Router>
  );
}

export default App;
