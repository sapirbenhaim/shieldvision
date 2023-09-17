import React, { useState } from 'react';
import './UpdateCamera.css';
import axios from 'axios';
import { getUser } from '../../managers/authManager';
import { logError } from '../../utils/logger';

/**
 * UpdateCamera component for editing and updating camera information.
 */
const UpdateCamera = ({ cameraUrl }) => {
  const userId = getUser()._id;
  const [data, setData] = useState({
    userId: userId,
    camera: cameraUrl,
    updatedCamera: cameraUrl,
  });

  /**
   * Handles the form submission to update the camera information.
   */
  const submit = async () => {
    try {
      if (data.camera == null) {
        data.camera = cameraUrl;
      }
      const url = "http://localhost:8080/api/cameras/update";
      const { data: res } = await axios.post(url, data);
      
      window.location = "/cameras";
    } catch (error) {
      logError(error);
    }
  };

  /**
   * Handles the removal of the camera.
   */
  const removeCamera = async () => {
    try {
      if (data.camera == null) {
        data.camera = cameraUrl;
      }
      const url = "http://localhost:8080/api/cameras/remove";
      const { data: res } = await axios.post(url, data);
      
      window.location = "/cameras";
    } catch (error) {
      logError(error);
    }
  };

  /**
   * Handles changes in the input fields.
   * @param {Event} input - The input event.
   */
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  return (
    <div id='cameraEditContainer'>
      {/* CAMERA URL INPUT */}
      <div className='inputContainer'>
        <label>Edit Camera Url</label>
        <input 
          id="cameraUrl" 
          className="input" 
          type="text" 
          placeholder="Camera Url"
          name='updatedCamera'
          onChange={handleChange}
          value={data.updatedCamera}
          required 
        />
      </div>
            
      <button onClick={() => submit()} type="text" className="submitButton">Update Camera</button>
      <button onClick={() => removeCamera()} type="text" className="submitButton">Delete Camera</button>
    </div>
  );
}

export default UpdateCamera;

// TODO: Extract network logic to external managers for better organization and separation of concerns.
