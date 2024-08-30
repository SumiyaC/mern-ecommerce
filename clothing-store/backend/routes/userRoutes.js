const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.get('/me', (req, res) => {
  const token = req.headers['x-auth-token'];
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    User.findById(decoded.id).select('-password').then(user => {
      res.json(user);
    });
  } catch (err) {
    res.status(400).json({ message: 'Token is not valid' });
  }
});

module.exports = router;
