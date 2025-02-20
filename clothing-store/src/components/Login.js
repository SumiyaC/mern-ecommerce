import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login Error:', error);
      alert('Failed to login. Please check your credentials.');
    }
  };

  const handleGoogleSuccess = async (response) => {
    try {
      const idToken = response.credential;
      const serverResponse = await axios.post('http://localhost:5000/api/auth/google-login', { idToken });
      localStorage.setItem('token', serverResponse.data.token);
      navigate('/');
    } catch (error) {
      console.error('Google Login Error:', error);
      alert('Failed to login with Google. Please try again.');
    }
  };

  const handleGoogleFailure = (error) => {
    console.error('Google Login Failure:', error);
    alert('Google login failed. Please try again.');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', margin: '10px 0' }}>Login</button>
      </form>
      <h3>Or login with Google</h3>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleFailure}
        useOneTap
        client_id="170156368361-l9mkbla74b5mmg0jckv9e53m7vja9kil.apps.googleusercontent.com"
      />
    </div>
  );
};

export default Login;
