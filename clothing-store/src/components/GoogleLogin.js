
// // src/components/GoogleLogin.js
// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import jwtDecode from 'jwt-decode';  // Import jwtDecode correctly

// const GoogleLoginButton = ({ onSuccess }) => {
//   const handleSuccess = (response) => {
//     const credential = response.credential;
//     const userObject = jwtDecode(credential);  // Decode JWT
//     console.log(userObject);
//     if (onSuccess) onSuccess(credential);  // Call parent onSuccess callback
//   };

//   const handleError = (error) => {
//     console.error('Login failed:', error);
//   };

//   return (
//     <GoogleLogin
//       onSuccess={handleSuccess}
//       onError={handleError}
//     />
//   );
// };

// export default GoogleLoginButton;

// src/components/GoogleLogin.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GoogleLoginButton = ({ onSuccess }) => {
  const handleSuccess = (response) => {
    const credential = response.credential;
    const userObject = jwtDecode(credential);  // Decode JWT token to get user details
    console.log(userObject);
    if (onSuccess) onSuccess(credential);  // Pass credential to parent component
  };

  const handleError = (error) => {
    console.error('Login failed:', error);
  };

  return (
    // <GoogleLogin
    //   //clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    //   clientId={170156368361-l9mkbla74b5mmg0jckv9e53m7vja9kil.apps.googleusercontent.com}
    //   onSuccess={handleSuccess}
    //   onError={handleError}
    //   cookiePolicy={'single_host_origin'}
    // />
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
