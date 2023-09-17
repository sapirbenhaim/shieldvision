import React from 'react';
import { Link } from 'react-router-dom';
import './AboutHeader.css';

/**
 * Represents the header section of the About page.
 * @returns {JSX.Element} The AboutHeader component.
 */
const AboutHeader = () => {
  return (
    <div id='aboutHeader'>
      <h1 id='aboutTitle'>
        WE PROTECT THE PEOPLE<br/>
        WHO PROTECT AND<br/>
        SERVE US
      </h1>
      <p id='aboutText'>
        Get ready to experience advanced AI security.<br/>
        Our technology easily recognizes dangerous<br/>
        situations and can contact the emergency<br/>
        services when needed.
      </p>
      <div id='btnDemo'>
        <Link to='/demo' className='whiteLink'>REQUEST DEMO</Link>
      </div>
    </div>
  );
}

export default AboutHeader;
