

// // src/components/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import GoogleLoginComponent from './GoogleLogin';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/auth/login', { email, password });
//       // Handle login success, e.g., store token, redirect user
//       localStorage.setItem('token', response.data.token);
//       navigate('/');
//     } catch (error) {
//       console.error('Login Error:', error);
//     }
//   };

//   const handleGoogleSuccess = async (token) => {
//     try {
//       const response = await axios.post('/api/auth/google-login', { idToken: token });
//       // Handle login success, e.g., store token, redirect user
//       localStorage.setItem('token', response.data.token);
//       navigate('/');
//     } catch (error) {
//       console.error('Google Login Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <hr />
//       <h3>Or login with Google</h3>
//       <GoogleLoginComponent onSuccess={handleGoogleSuccess} />
//     </div>
//   );
// };

// export default Login;

// src/components/Login.js
//--------------


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import GoogleLoginComponent from './GoogleLogin';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       navigate('/');
//     } catch (error) {
//       console.error('Login Error:', error);
//     }
//   };

//   const handleGoogleSuccess = async (token) => {
//     try {
//       const response = await axios.post('/api/auth/google-login', { idToken: token });
//       localStorage.setItem('token', response.data.token);
//       navigate('/');
//     } catch (error) {
//       console.error('Google Login Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <hr />
//       <h3>Or login with Google</h3>
//       <GoogleLoginComponent onSuccess={handleGoogleSuccess} />
//     </div>
//   );
// };

// export default Login;
//----------------
// src/components/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import GoogleLoginComponent from './GoogleLogin';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       navigate('/');
//     } catch (error) {
//       console.error('Login Error:', error);
//     }
//   };

//   const handleGoogleSuccess = async (token) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/google-login', { idToken: token });
//       localStorage.setItem('token', response.data.token);
//       navigate('/');
//     } catch (error) {
//       console.error('Google Login Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <h3>Or login with Google</h3>
//       <GoogleLoginComponent onSuccess={handleGoogleSuccess} />
//     </div>
//   );
// };

// export default Login;
//------------------------
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { GoogleLogin } from '@react-oauth/google';  // Use the new Google login package

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       navigate('/');
//     } catch (error) {
//       console.error('Login Error:', error);
//       alert('Failed to login. Please check your credentials.');
//     }
//   };

//   const handleGoogleSuccess = async (response) => {
//     try {
//       const idToken = response.credential; // Extract ID token from Google response
//       const serverResponse = await axios.post('http://localhost:5000/api/auth/google-login', { idToken });
//       localStorage.setItem('token', serverResponse.data.token);
//       navigate('/');
//     } catch (error) {
//       console.error('Google Login Error:', error);
//       alert('Failed to login with Google. Please try again.');
//     }
//   };

//   const handleGoogleFailure = (error) => {
//     console.error('Google Login Failure:', error);
//     alert('Google login failed. Please try again.');
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ display: 'block', width: '100%', padding: '8px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ display: 'block', width: '100%', padding: '8px' }}
//           />
//         </div>
//         <button type="submit" style={{ padding: '10px 20px', margin: '10px 0' }}>Login</button>
//       </form>
//       <h3>Or login with Google</h3>
//       <GoogleLogin
//         onSuccess={handleGoogleSuccess}
//         onError={handleGoogleFailure} // Use new error handler
//         useOneTap // Optional for Google one-tap login
//         client_id="170156368361-l9mkbla74b5mmg0jckv9e53m7vja9kil.apps.googleusercontent.com" // Use the correct client ID
//       />
//     </div>
//   );
// };

// export default Login;
//----------------------

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';  // Ensure you're using the latest version

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');  // Redirect to home after successful login
    } catch (error) {
      console.error('Login Error:', error);
      alert('Failed to login. Please check your credentials.');
    }
  };

  const handleGoogleSuccess = async (response) => {
    try {
      const idToken = response.credential; // Extract ID token from Google response
      const serverResponse = await axios.post('http://localhost:5000/api/auth/google-login', { idToken });
      localStorage.setItem('token', serverResponse.data.token);
      navigate('/');  // Redirect to home after successful login
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
        onError={handleGoogleFailure} // Use new error handler
        useOneTap // Optional for Google one-tap login
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} // Ensure the correct client ID
      />
    </div>
  );
};

export default Login;
