import React, { useState } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import './Support.css';
import FaqItem from '../../components/FaqItem/FaqItem';
import HamburgerMenu from '../../img/menu-hamburger.png';
import MobileMenu from '../../components/MobileMenu/MobileMenu';

/**
 * The Support component provides a page with frequently asked questions (FAQ) for user support.
 * @returns {JSX.Element} The Support page content.
 */
const Support = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div id='support'>
      {/* Render the side menu */}
      <SideMenu />
      {/* Render the mobile menu if active */}
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
      {/* Render the hamburger menu button */}
      <img onClick={() => setMobileMenu(!mobileMenu)} className='menuButton' src={HamburgerMenu} alt="menu button" />
      {/* Render the page title */}
      <h3 className='pageTitle'>Support</h3>
      <div className='gridContainer'>
        {/* Render frequently asked questions (FAQ) items */}
        <FaqItem question={"Is ShieldVision free to use?"} answer={"ShieldVision is free to use up to 3 cameras and 200 detections a day."} />
        <FaqItem question={"How to add a camera"} answer={"Go to the Cameras page and click on the 'Add Camera' button."} />
        <FaqItem question={"Where can I see my latest detections"} answer={"Go to the Detections page to see the latest detections."} />
        <FaqItem question={"How to upgrade my account"} answer={"Go to the SmartVision tab to select a new subscription."} />
      </div>
    </div>
  );
}

export default Support;
