import React, { useState } from 'react';
import './UpdateUser.css';
import axios from 'axios';
import { deleteUser, updateUser } from '../../managers/authManager';

/**
 * UpdateUser component for editing and updating user information.
 * @param {Object} user - The user object to be updated.
 */
const UpdateUser = ({ user }) => {
  // Initialize the state with user data
  const [data, setData] = useState({
    email: user.email,
    isAdmin: user.isAdmin,
    subscriptionPackage: user.subscriptionPackage,
    userId: user._id,
  });

  /**
   * Handles the form submission to update user information.
   */
  const submit = async () => {
    try {
      // Call updateUser function and wait for the response
      const response = await updateUser(data);

      // Check the response for success or handle it as needed
      if (response) {
        alert('User data updated successfully:', response);
        // Perform any additional actions if the update was successful
      } else {
        alert('User data update failed.');
        // Handle the case where the update failed
      }
    } catch (error) {
      alert('Error updating user data:', error);
      // Handle the error appropriately
    }
  };

  /**
   * Handles the removal of the user.
   */
  const removeUser = async () => {
    await deleteUser(data.userId);
    alert('User deleted successfully');
    window.location = '/admin';
  };

  /**
   * Handles changes in the input fields.
   * @param {Event} target - The input event.
   */
  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  return (
    <div id='userEditContainer'>
      {/* EMAIL INPUT */}
      <div className='inputContainer'>
        <label>Edit User Email</label>
        <input
          id='email'
          className='input'
          type='text'
          placeholder='Email'
          name='email'
          onChange={handleChange}
          value={data.email}
          required
        />
      </div>
      <div className='inputContainer'>
        <label htmlFor='userRole'>Is Admin:</label>
        <select id='userRole' name='isAdmin' value={data.isAdmin} onChange={handleChange}>
          <option value={false}>Regular</option>
          <option value={true}>Admin</option>
        </select>
      </div>
      <div className='inputContainer'>
        <label htmlFor='subscriptionPackage'>Subscription package:</label>
        <select id='subscriptionPackage' name='subscriptionPackage' value={data.subscriptionPackage} onChange={handleChange}>
          <option value={'Free'}>Free</option>
          <option value={'Essential'}>Essential</option>
          <option value={'Professional'}>Professional</option>
          <option value={'Enterprise'}>Enterprise</option>
        </select>
      </div>

      <button onClick={submit} type='button' className='submitButton'>
        Update User
      </button>
      <button onClick={removeUser} type='button' className='submitButton'>
        Delete User
      </button>
    </div>
  );
};

export default UpdateUser;
