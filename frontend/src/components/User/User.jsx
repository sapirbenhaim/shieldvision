import React from 'react';
import './User.css';
import VerticalLine from '../../img/VerticalLine.png';
import Close from '../../img/pencil.png';
import { deleteUser } from '../../managers/authManager';
import { logError, logMessage } from '../../utils/logger';

/**
 * User component for displaying user information.
 * @param {Object} user - The user object to be displayed.
 * @param {Function} setUserToEdit - Function to set the user to edit.
 */
const User = ({ user, setUserToEdit }) => {
  /**
   * Handles the deletion of the user.
   */
  const handleDeleteUser = async () => {
    try {
      const { _id } = user;
      // Call the delete user by ID function
      await deleteUser(_id);
      // Handle success or update the UI as needed
      window.location = '/admin';
    } catch (error) {
      // Handle any errors that occur during the delete operation
      logError('Error deleting user:', error);
    }
  };

  return (
    <div className='user'>
      {/* Display user email */}
      <p className='userText'>User: {user.email}</p>
      {/* Vertical line separator */}
      <img className='verticalLine' src={VerticalLine} alt='Vertical Line' />
      {/* Delete icon with click handler */}
      <img
        className='delete'
        src={Close}
        alt='Delete User'
        onClick={() => {
          logMessage('email: ' + user.email);
          setUserToEdit(user);
        }}
      />
    </div>
  );
};

export default User;
