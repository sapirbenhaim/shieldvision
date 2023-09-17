import React, { useState } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import './Detections.css';
import Detection from '../../components/Detection/Detection';
import HamburgerMenu from '../../img/menu-hamburger.png';
import MobileMenu from '../../components/MobileMenu/MobileMenu';

/**
 * The Detections component represents the page for displaying the latest detections.
 * @returns {JSX.Element} The Detections page content.
 */
const Detections = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div id='detections'>
      {/* Render the SideMenu component */}
      <SideMenu />
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
      {/* Render the mobile menu button */}
      <img
        onClick={() => setMobileMenu(!mobileMenu)}
        className='menuButton'
        src={HamburgerMenu}
        alt="Mobile menu button"
      />
      {/* Page title */}
      <h3 className='pageTitle'>Latest Detections</h3>
      <div className='detectionsGrid'>
        {/* Render multiple Detection components */}
        <Detection />
        <Detection />
        <Detection />
        <Detection />
        <Detection />
        <Detection />
      </div>

      {/* Message indicating that the feature is under development */}
      <div className='underDevelopment'>
        <h1>This feature is still under development</h1>
      </div>
    </div>
  );
}

export default Detections;
