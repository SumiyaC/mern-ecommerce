
// src/components/GoogleLogin.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';  // Import jwtDecode correctly

const GoogleLoginButton = ({ onSuccess }) => {
  const handleSuccess = (response) => {
    const credential = response.credential;
    const userObject = jwtDecode(credential);  // Decode JWT
    console.log(userObject);
    if (onSuccess) onSuccess(credential);  // Call parent onSuccess callback
  };

  const handleError = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default GoogleLoginButton;
