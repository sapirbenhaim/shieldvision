import React, { useState } from 'react';
import './Account.css';
import SideMenu from '../../components/SideMenu/SideMenu';
import AccountInfo from '../../components/AccountInfo/AccountInfo';
import Line from '../../img/line.png';
import SignOutButton from '../../components/authentication/LogOutButton/SignOutButton';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../../img/menu-hamburger.png';
import MobileMenu from '../../components/MobileMenu/MobileMenu';

/**
 * The Account component represents the user's account page.
 * @returns {JSX.Element} The Account page content.
 */
const Account = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  // State variables for toggle switches
  const [isMovementDetectionChecked, setIsMovementDetectionChecked] = useState(false);
  const [isFaceDetectionChecked, setIsFaceDetectionChecked] = useState(false);
  const [isWeaponDetectionChecked, setIsWeaponDetectionChecked] = useState(false);
  const faceDetections = 0; // Placeholder value

  const toggleMovementDetectionSwitch = () => {
    setIsMovementDetectionChecked(!isMovementDetectionChecked);
  };

  const toggleFaceDetectionSwitch = () => {
    setIsFaceDetectionChecked(!isFaceDetectionChecked);
  };

  const toggleWeaponDetectionSwitch = () => {
    setIsWeaponDetectionChecked(!isWeaponDetectionChecked);
  };

  return (
    <div id='account'>
      {/* Render the SignOutButton component */}
      <SignOutButton />

      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}

      {/* Render the mobile menu button */}
      <img
        onClick={() => setMobileMenu(!mobileMenu)}
        className='menuButton'
        src={HamburgerMenu}
        alt="Mobile menu button"
      />

      {/* Render the SideMenu component */}
      <SideMenu />

      <div className='accountContainer'>
        {/* Render the AccountInfo component */}
        <AccountInfo style={"accountPageItem"} />

        <div className='settingsContainer'>
          <div className='switchInput'>
            <h3 className='switchSettingText'>Movement detection</h3>
            <div className="switch-container">
              <label className="switch">
                <input type="checkbox" checked={isMovementDetectionChecked} onChange={toggleMovementDetectionSwitch} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          {/* Render a separator line */}
          <img className='line' src={Line} alt="Separator line" />

          {/* Render the Face detection switch */}
          <div className='switchInput'>
            <h3 className='switchSettingText'>Face detection</h3>
            <div className="switch-container">
              <label className="switch">
                <input type="checkbox" checked={isFaceDetectionChecked} onChange={toggleFaceDetectionSwitch} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          {/* Render a separator line */}
          <img className='line' src={Line} alt="Separator line" />

          {/* Render the Weapon detection switch */}
          <div className='switchInput'>
            <h3 className='switchSettingText'>Weapon detection</h3>
            <div className="switch-container">
              <label className="switch">
                <input type="checkbox" checked={isWeaponDetectionChecked} onChange={toggleWeaponDetectionSwitch} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          {/* Render a separator line */}
          <img className='line' src={Line} alt="Separator line" />
        </div>

        <div className='statisticsContainer'>
          <h3 id='statisticsTitle'>Statistics</h3>
          <h4 className='statistic'>Total Movement detections: {isMovementDetectionChecked ? faceDetections : "N/A"}</h4>

          {/* Render a separator line */}
          <img className='line' src={Line} alt="Separator line" />

          <h4 className='statistic'>Total Face detections: {isFaceDetectionChecked ? faceDetections : "N/A"}</h4>

          {/* Render a separator line */}
          <img className='line' src={Line} alt="Separator line" />

          <h4 className='statistic'>Total Weapon detections: {isWeaponDetectionChecked ? faceDetections : "N/A"}</h4>

          {/* Render a separator line */}
          <img className='line' src={Line} alt="Separator line" />

          <h3 id='quickActionsTitle'>Quick Actions</h3>

          {/* Render quick action links */}
          <Link className='actionLink' to={`/cameras`}>
            <p id='quickActionLinkText'>Go to cameras</p>
          </Link>
          <Link className='actionLink' to={`/dashboard`}>
            <p id='quickActionLinkText'>Go to dashboard</p>
          </Link>
          <Link className='actionLink' to={`/support`}>
            <p id='quickActionLinkText'>Go to support</p>
          </Link>
          <Link className='actionLink' to={`/detections`}>
            <p id='quickActionLinkText'>Latest detections</p>
          </Link>
          <Link className='actionLink' to={`/smartvision`}>
            <p id='quickActionLinkText'>Upgrade subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Account;
