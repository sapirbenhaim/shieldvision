import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

/**
 * NavBar component for rendering the website's navigation bar.
 * Displays links to various sections and sign-up/sign-in buttons.
 */
const NavBar = () => {
  const user = localStorage.getItem("token");

  return (
    <div className='NavContainer'>
      <div className='NavBar'>
        <Link to='/' className='Link'>HOME</Link>
        <Link to='/about' className='Link'>ABOUT</Link>
        <Link to='/services' className='Link'>SERVICES</Link>
        <Link to='/pricing' className='Link'>PRICING</Link>
        <Link to='/contact' className='Link'>CONTACT</Link>
      </div>

      <div className='ButtonContainer'>
        <Link to='/signup' className='Link'>SIGN UP</Link>
        <div className='btnSignIn'>
          <Link to='/signin' className='LinkButton'>SIGN IN</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
