// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
// import ProductList from './components/ProductList'; 
import WomenPage from './pages/WomenPage';
import './App.css'; // Add custom styles if needed

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/men" element={<ProductList category="men" />} />
        <Route path="/women" element={<ProductList category="women" />} /> */}
        <Route path="/women-page" element={<WomenPage />} /> {/* Updated route path */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
