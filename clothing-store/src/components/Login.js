

// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleLoginComponent from './GoogleLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      // Handle login success, e.g., store token, redirect user
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const handleGoogleSuccess = async (token) => {
    try {
      const response = await axios.post('/api/auth/google-login', { idToken: token });
      // Handle login success, e.g., store token, redirect user
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Google Login Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <hr />
      <h3>Or login with Google</h3>
      <GoogleLoginComponent onSuccess={handleGoogleSuccess} />
    </div>
  );
};

export default Login;
