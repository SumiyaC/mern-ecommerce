// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import WomenPage from './pages/WomenPage';
// import MenPage from './pages/MenPage';
// import ViewCartPage from './pages/ViewCartPage';
// import CheckoutPage from './pages/CheckoutPage';
// import './App.css';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const handleRemoveFromCart = (id) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== id));
//   };

//   return (
//     <Router>
//       <NavigationBar />
//       <div className="container mt-3">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/women" element={<WomenPage cartItems={cartItems} setCartItems={setCartItems} />} />
//           <Route path="/men" element={<MenPage cartItems={cartItems} setCartItems={setCartItems} />} />
//           <Route path="/viewcart" element={<ViewCartPage cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
//           <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import WomenPage from './pages/WomenPage';
// import MenPage from './pages/MenPage';
// import ViewCartPage from './pages/ViewCartPage';
// import CheckoutPage from './pages/CheckoutPage';
// //import Register from './components/Register';
// import Login from './components/Login';
// import './App.css';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const handleRemoveFromCart = (id) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== id));
//   };

//   return (
//     <Router>
//       <NavigationBar />
//       <div className="container mt-3">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/women" element={<WomenPage cartItems={cartItems} setCartItems={setCartItems} />} />
//           <Route path="/men" element={<MenPage cartItems={cartItems} setCartItems={setCartItems} />} />
//           <Route path="/viewcart" element={<ViewCartPage cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
//           <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
//           {/* <Route path="/register" element={<Register />} />  */}
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

//---------------------

// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';  // Import GoogleOAuthProvider
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import ViewCartPage from './pages/ViewCartPage';
import CheckoutPage from './pages/CheckoutPage';
import Login from './components/Login';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <NavigationBar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/women" element={<WomenPage cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/men" element={<MenPage cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/viewcart" element={<ViewCartPage cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
            <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;

