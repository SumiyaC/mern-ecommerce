
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GoogleLoginButton = ({ onSuccess }) => {
  const handleSuccess = (response) => {
    const credential = response.credential;
    const userObject = jwtDecode(credential);
    console.log(userObject);
    if (onSuccess) onSuccess(credential);
  };

  const handleError = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <GoogleLogin
      client_id="170156368361-l9mkbla74b5mmg0jckv9e53m7vja9kil.apps.googleusercontent.com" // Directly insert your client ID
      buttonText="Login with Google"
      onSuccess={handleSuccess}
      onFailure={handleError}
      cookiePolicy={'single_host_origin'}
  />
  );
};

export default GoogleLoginButton;
