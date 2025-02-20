import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import './NewsLetterSignUp.css';

const NewsLetterSignUp = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', {
        name,
        email,
      });
      setMessage(response.data.message);
      setMessageType('success');
      setEmail('');
      setName('');
      setTimeout(() => {
        setMessage(null);
        onClose();
      }, 3000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Something went wrong.');
      setMessageType('error');
    }
  };

  return (
    <div className="newsletter-signup">
      {message && (
        <Alert variant={messageType === 'success' ? 'success' : 'danger'}>
          {message}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default NewsLetterSignUp;
