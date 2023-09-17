import React, { useEffect, useState } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import './Cameras.css';
import SecurityCamera from '../../components/SecurityCamera/SecurityCamera';
import SignOutButton from '../../components/authentication/LogOutButton/SignOutButton';
import AddCameraForm from '../../components/AddCameraForm/AddCameraForm';
import axios from 'axios';
import CloseIcon from '../../img/close.png';
import UpdateCamera from '../../components/UpdateCamera/UpdateCamera';
import { getUser } from '../../managers/authManager';
import HamburgerMenu from '../../img/menu-hamburger.png';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import { logError } from '../../utils/logger';

/**
 * Function to fetch all cameras associated with the current user.
 * @returns {Promise<Array>} Array of camera URLs.
 */
const getAllCameras = async () => {
  try {
    const userId = getUser()._id;
    const response = await axios.post('http://localhost:8080/api/cameras/get-cameras', { userId: userId });
    return response.data;
  } catch (error) {
    logError('Error fetching cameras: ' + error);
  }
}

/**
 * The Cameras component represents the cameras page.
 * @returns {JSX.Element} The Cameras page content.
 */
const Cameras = () => {
  const [cameraUrls, setCameraUrls] = useState(['']);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [cameraToEdit, setCameraToEdit] = useState(null);

  if (errorMessage != null) {
    alert(errorMessage);
    window.location = "/smartvision";
  }

  useEffect(() => {
    const fetchCameras = async () => {
      try {
        const cameras = await getAllCameras();
        setCameraUrls(cameras);
      } catch (error) {
        logError(error.message);
      }
    };

    fetchCameras();
  }, [cameraToEdit]);

  return (
    <div id='cameras'>
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
      {/* Render the SignOutButton component */}
      <SignOutButton />
      {/* Render the AddCameraForm component */}
      <AddCameraForm setErrorMessage={setErrorMessage} />
      <div id='camerasContainer'>
        {cameraUrls?.map((url, index) => {
          return <SecurityCamera cameraUrl={url} index={index} key={index} setCameraToEdit={setCameraToEdit} />;
        })}
      </div>
      {/* Render a message if there are no cameras */}
      {cameraUrls?.length === 0 ? <p id='noCameraText'>No cameras added yet</p> : <p></p>}
      {/* Render the UpdateCamera component when cameraToEdit is not null */}
      <div className={cameraToEdit != null ? "editCameraContainer" : "none"}>
        <img onClick={() => setCameraToEdit(null)} id="btnClose" src={CloseIcon} alt="Close button" />
        <UpdateCamera cameraUrl={cameraToEdit} />
      </div>
    </div>
  );
}

export default Cameras;
