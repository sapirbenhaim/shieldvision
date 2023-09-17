import React from 'react';
import './SignUp.css';
import NavBar from '../../components/NavBar/NavBar';
import Register from '../../components/authentication/Register/Register';

/**
 * The SignUp component provides a page for user registration.
 * @returns {JSX.Element} The SignUp page content.
 */
const SignUp = () => {
  return (
    <div className='signUp'>
      {/* Render the navigation bar */}
      <NavBar />
      {/* Render the registration component */}
      <Register />
    </div>
  );
}

export default SignUp;
