import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      axios.get('/api/users/me', { headers: { 'x-auth-token': token } })
        .then(res => setUser(res.data))
        .catch(err => console.error(err));
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      {user.role === 'admin' ? (
        <p>Admin View: Manage products, orders, etc.</p>
      ) : (
        <p>Customer View: Browse products, view orders, etc.</p>
      )}
    </div>
  );
};

export default Dashboard;


// src/components/Dashboard.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import jwtDecode from 'jwt-decode';

// const Dashboard = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decoded = jwtDecode(token);
//       axios.get('/api/users/me', { headers: { 'x-auth-token': token } })
//         .then(res => setUser(res.data))
//         .catch(err => console.error(err));
//     } else {
//       setUser(null); // Redirect to login if no token
//     }
//   }, []);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>Welcome, {user.name}</h1>
//       {user.role === 'admin' ? (
//         <p>Admin View: Manage products, orders, etc.</p>
//       ) : (
//         <p>Customer View: Browse products, view orders, etc.</p>
//       )}
//       <h3>Your Orders</h3>
//       <p>Order details will appear here...</p>
//     </div>
//   );
// };

// export default Dashboard;
