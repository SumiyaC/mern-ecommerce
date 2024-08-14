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

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import ViewCartPage from './pages/ViewCartPage';
import CheckoutPage from './pages/CheckoutPage';
import Register from './components/Register';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <NavigationBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenPage cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/men" element={<MenPage cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/viewcart" element={<ViewCartPage cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
          <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
          <Route path="/register" element={<Register />} /> {/* New Route for Registration */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
