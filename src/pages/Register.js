import React, { useState } from 'react';
import { json } from 'react-router-dom';
import './Register.css'; // Не забудьте добавить стили

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // есть ли кто уже с таким мылом
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = existingUsers.some(user => user.email === email);

        if(userExists) {
            alert('User with this email already exists');
        } else {
            const newUser = { name, email, password };
            existingUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(existingUsers));

            setEmail('');
            setName('');
            setPassword('');

            // Перенаправить на страницу входа
            window.location.href = '/login';
        }
    };

    return (
        <div className="register-container">
            <h2>Create new account</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
                <button type="submit">SUBMIT</button>
            </form>
            <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
    );
}

export default Register;
