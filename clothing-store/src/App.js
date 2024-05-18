// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductList from './components/ProductList'; // Assuming you have this component
import './App.css'; // Add custom styles if needed

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<ProductList />} />
        <Route path="/women" element={<ProductList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
