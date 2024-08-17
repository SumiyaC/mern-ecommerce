// import React, { useState } from 'react';
// import axios from 'axios';
// import GoogleLogin from './GoogleLogin';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('buyer'); // Default role

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/auth/register', { name, email, password, role });
//       alert(response.data.message);
//     } catch (error) {
//       alert(error.response.data.error);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="buyer">Buyer</option>
//           <option value="admin">Seller</option>
//         </select>
//         <button type="submit">Register</button>
//       </form>
//       <GoogleLogin />
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import GoogleLoginComponent from './GoogleLogin'; // Updated import for the new Google Login component

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('buyer'); // Default role is 'buyer'

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/auth/register', { name, email, password, role });
//       alert(response.data.message);
//     } catch (error) {
//       alert(error.response?.data?.error || 'An error occurred during registration');
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
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
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="buyer">Buyer</option>
//           <option value="seller">Seller</option>
//         </select>
//         <button type="submit">Register</button>
//       </form>
      
//       <hr />

//       <h3>Or Register Using Google</h3>
//       <GoogleLoginComponent /> {/* New Google Login component */}
//     </div>
//   );
// };

// export default Register;
