import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import ViewCartPage from './pages/ViewCartPage'; // Import ViewCartPage
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <NavigationBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenPage cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/men" element={<MenPage cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/viewcart" element={<ViewCartPage cartItems={cartItems} setCartItems={setCartItems} />} /> {/* Add route for ViewCartPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
