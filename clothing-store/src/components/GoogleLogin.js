// import React from 'react';

// const GoogleLogin = () => {
//   return (
//     <div>
//       <a href="/auth/google">Sign in with Google</a>
//     </div>
//   );
// };

// export default GoogleLogin;

// src/components/GoogleLogin.js
// import React from 'react';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// const GoogleLoginComponent = () => {
//   const handleSuccess = (credentialResponse) => {
//     console.log('Google Login Success:', credentialResponse);
//     // Handle successful login
//   };

//   const handleError = () => {
//     console.error('Google Login Error');
//     // Handle error
//   };

//   return (
//     <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
//       <GoogleLogin
//         onSuccess={handleSuccess}
//         onError={handleError}
//       />
//     </GoogleOAuthProvider>
//   );
// };

// export default GoogleLoginComponent;
// GoogleLogin.js
// src/components/GoogleLogin.js
// import React from 'react';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import axios from 'axios';

// const GoogleLoginComponent = () => {
//   const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       // Send the token to the server
//       const response = await axios.post('/auth/google', {
//         token: credentialResponse.credential, // This is the token you get from Google
//       });
//       if (response.data) {
//         window.location.href = '/'; // Redirect after successful login
//       }
//     } catch (error) {
//       console.error('Google Login Error:', error);
//     }
//   };

//   const handleGoogleFailure = (error) => {
//     console.error('Google Login Failed:', error);
//   };

//   return (
//     <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
//       <GoogleLogin
//         onSuccess={handleGoogleSuccess}
//         onError={handleGoogleFailure}
//         useOneTap
//       />
//     </GoogleOAuthProvider>
//   );
// };

// export default GoogleLoginComponent;
//------------------
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
