import React, { useState } from 'react';
import './SignIn.css';
import Login from '../../components/authentication/Login/Login';
import logo from '../../img/logo.png';
import SecurityCamera from '../../components/SecurityCamera/SecurityCamera';

/**
 * The SignIn component provides a page for user authentication and login.
 * @returns {JSX.Element} The SignIn page content.
 */
const SignIn = () => {
  
  // State to manage the current authentication tab
  const [currentAuthTab, setCurrentAuthTab] = useState();

  // Initialize the currentAuthTab with the Login component
  if (currentAuthTab == null) {
    setCurrentAuthTab(<Login setCurrentAuthTab={setCurrentAuthTab} />);
  }

  return (
    <div className='signIn'>
      <div className='left'>
        {/* Render the logo */}
        <img id="logo" src={logo} alt="logo" />
        <h1 id='loginTitle'>
          Secure, detect and deploy your private security for free.
        </h1>
        <p id='loginSubText'>
          ShieldVision HUB is our NEW no-code solution to secure your private environment, business, and home with the latest developments in AI security solutions.
        </p>
        <p id='loginActionText'>Get started for free now!</p>
        <div className='cameraContainer'>
          {/* Render preview SecurityCamera components */}
          <SecurityCamera isPreview={true} cameraUrl={"http://5.10.10.199:50000/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER"} index={3} />
          <SecurityCamera isPreview={true} cameraUrl={"http://194.90.125.12:80/webcapture.jpg?command=snap&channel=1?1694789447"} index={3} />
        </div>
      </div>

      <div className='right'>
        {/* Render the current authentication tab */}
        {currentAuthTab}
      </div>
    </div>
  );
}

export default SignIn;
