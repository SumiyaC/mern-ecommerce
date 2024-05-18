// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
