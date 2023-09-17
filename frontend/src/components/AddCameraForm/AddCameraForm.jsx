import React, { useState } from 'react';
import axios from 'axios';
import './AddCameraForm.css';
import { getToken, getUser, getUserObject, removeTokenAndLogOut } from '../../managers/authManager';
import { logError, logMessage } from '../../utils/logger';

/**
 * Adds a camera URL based on the user's subscription package.
 * @param {string} cameraUrl - The camera URL to add.
 * @param {string} userId - The user's ID.
 * @param {function} setErrorMessage - Function to set error messages.
 */
const addCameraUrl = async (cameraUrl, userId, setErrorMessage) => {
  try {
    const userObject = await getUserObject();
    logMessage(userObject.subscriptionPackage);

    // Check the user's subscription package and camera limit
    switch (userObject.subscriptionPackage) {
      case "Free":
        if (userObject.cameras.length >= 3) {
          setErrorMessage("Your subscription only supports up to 3 cameras");
          window.location = "/smartvision";
          logMessage("Your subscription only supports up to 3 cameras");
          return;
        }
        break;
    
      case "Essential":
        if (userObject.cameras.length >= 6) {
          setErrorMessage("Your subscription only supports up to 6 cameras");
          window.location = "/smartvision";
          logMessage("Your subscription only supports up to 6 cameras");
          return;
        }
        break;
    
      case "Professional":
        if (userObject.cameras.length >= 12) {
          setErrorMessage("Your subscription only supports up to 12 cameras");
          logMessage("Your subscription only supports up to 12 cameras");
          return;
        }
        break;
    
      default:
        // Handle cases for other subscription packages
       logMessage ("default state");
        break;
    }
    
    const token = getToken();

    const response = await axios.post('http://localhost:8080/api/cameras/add', {
      userId: userId,
      camera: cameraUrl
    },
    {
      headers: {
        'Authorization': `Bearer ${token}` // Include the token in the Authorization header
      }
    }, 
    );
    // window.location = '/cameras';
    return response.data;
  } catch (error) {
    logError('Error adding camera URL: ' + error);
  }
};

/**
 * Represents a form to add a camera.
 * @param {Object} props - The component props.
 * @param {function} props.setErrorMessage - Function to set error messages.
 */
const CameraForm = ({ setErrorMessage }) => {
  const userId = getUser()._id;
  const [cameraUrl, setCameraUrl] = useState('');

  /**
   * Handles form submission.
   * @param {Object} e - The event object.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await addCameraUrl(cameraUrl, userId, setErrorMessage);
      window.location = "/cameras";
    } catch (error) {
      logError(error.message);
    }
  };

  return (
    <form className='addCameraForm' onSubmit={handleSubmit}>
      {/* Input for camera URL */}
      <input
        className='cameraUrlInput'
        type="text"
        placeholder="Camera URL"
        value={cameraUrl}
        onChange={(e) => setCameraUrl(e.target.value)}
      />
      {/* Button to add the camera */}
      <button className='btnAddCamera' type="submit">Add Camera</button>
    </form>
  );
};

export default CameraForm;
