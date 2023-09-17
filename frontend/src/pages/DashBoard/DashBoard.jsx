import React, { useState } from 'react';
import './DashBoard.css';
import SignOutButton from '../../components/authentication/LogOutButton/SignOutButton';
import SideMenu from '../../components/SideMenu/SideMenu';
import ActionItem from '../../components/ActionItem/ActionItem';
import TutorialItem from '../../components/TutorialItem/TutorialItem';
import AccountInfo from '../../components/AccountInfo/AccountInfo';
import AppPoster from '../../img/app_poster.png';
import Camera from '../../img/camera.png';
import SmartVision from '../../img/eye.png';
import Detections from '../../img/eye-scanner.png';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import supportAnimation from '../../lottieAnimations/lottie-support.json';
import playButton from '../../lottieAnimations/lottie-play-button.json';
import StaticVideo from '../../components/StaticVideo/StaticVideo';
import HamburgerMenu from '../../img/menu-hamburger.png';
import MobileMenu from '../../components/MobileMenu/MobileMenu';

/**
 * The DashBoard component represents the dashboard page.
 * @returns {JSX.Element} The Dashboard page content.
 */
const DashBoard = () => {
  const [videoIsVisible, setVideoIsVisible] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div id='dashBoard'>
      {/* Render the SignOutButton component */}
      <SignOutButton />
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
      <div className='gridContainer'>
        {/* Render the TutorialItem component */}
        <TutorialItem />
        {/* Render the AccountInfo component */}
        <AccountInfo />
        {/* Render the ActionItem components */}
        <ActionItem icon={Camera} title={"Cameras"} text={"Add your own private cameras and start securing your environment with the latest technology."} linkText={"Add Camera"} link={'cameras'}/>
        <ActionItem icon={SmartVision} title={"SmartVision"} text={"Customize your security system with specific AI detectors to fit your personal needs."} linkText={"Customize"} link={'smartvision'}/>
        <ActionItem icon={Detections} title={"Detections"} text={"Get a quick overview of the latest detections in your privately secured environment."} linkText={"See Detections"} link={'detections'}/>
      
        <div className='item item6'>
          {/* Render a link to the support page with a Lottie animation */}
          <Link className='actionLink' to={`/support`}>
            <Lottie animationData={supportAnimation} loop={true}/>
          </Link> 
          <Link className='actionLink' to={`/support`}>
            <p className='actionLinkText'>Go to Support</p>
          </Link>
        </div>
        <div className='item7'>
          {/* Render an image */}
          <img id='item7Image' src={AppPoster} alt="App poster" />
        </div>
        <div className='item item8' onClick={() => setVideoIsVisible(true)}>
          {/* Render a Lottie animation for the play button */}
          <Lottie animationData={playButton} loop={true}/>
        </div>
      </div>
      {/* Render the StaticVideo component */}
      <StaticVideo videoIsVisible={videoIsVisible} setVideoIsVisible={setVideoIsVisible}/>
    </div>
  );
}

export default DashBoard;
