// // src/components/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import GoogleLogin from './GoogleLogin'; // Ensure this is your Google login component

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/auth/login', { email, password });
//       alert(response.data.message);
//       // You can store user data and redirect as needed
//       // For example: localStorage.setItem('user', JSON.stringify(response.data.user));
//       // window.location.href = '/'; // Redirect to homepage or dashboard
//     } catch (error) {
//       alert(error.response.data.error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <GoogleLogin /> {/* Google login option */}
//     </div>
//   );
// };

// export default Login;

// src/components/Login.js
// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import GoogleLoginComponent from './GoogleLogin'; // Ensure this path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      alert(response.data.message);
      if (response.data.user) {
        window.location.href = '/'; // Redirect after successful login
      }
    } catch (error) {
      alert(error.response.data.message || 'Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <h3>Or Login Using Google</h3>
      <GoogleLoginComponent />
    </div>
  );
};

export default Login;
