import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import ViewCartPage from './pages/ViewCartPage';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';

function App() {
  return (
    <Router>
      {/* Ensure NavigationBar is placed correctly without unintended padding or margins */}
      <div className="container">
        <NavigationBar />
      </div>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/viewcart" element={<ViewCartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
