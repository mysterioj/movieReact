import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Получить пользователей из localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === email && user.password === password);
  
    if (user) {
      // Сохранить информацию о входе
      localStorage.setItem('currentUser', JSON.stringify(user));
  
      // Очистить поля формы
      setEmail('');
      setPassword('');
  
      // Перенаправить на главную страницу
      window.location.href = '/';
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Log in to your account</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">LOG IN</button>
        <button type="button">LOG IN WITH GOOGLE</button>
        <p>No account? <a href="/register">Register</a></p>
      </form>
    </div>
  );
}

export default Login;





