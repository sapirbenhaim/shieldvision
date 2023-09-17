import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { logError } from '../utils/logger';

/**
 * Get the JWT token from local storage.
 * @returns {string|null} The JWT token or null if not available.
 */
export const getToken = () => {
  const user = localStorage.getItem("token");
  if (user) {
    // Decode the JWT token
    const decodedToken = jwt_decode(user);
    return user;
  } else {
    return null;
  }
}

/**
 * Get the user object from the JWT token.
 * @returns {Object|null} The user object or null if not available.
 */
export const getUser = () => {
  const user = localStorage.getItem("token");
  if (user) {
    // Decode the JWT token to get user data
    const decodedToken = jwt_decode(user);
    return decodedToken;
  } else {
    return null;
  }
}

/**
 * Fetch user data from the server using the JWT token.
 * @returns {Promise<Object|null>} A promise that resolves to the user data or null if not available.
 */
export const getUserObject = async () => {
  try {
    // Retrieve the token from local storage
    const token = getToken();

    if (!token) {
      logError('No token available.');
      return null;
    }

    const data = {
      userId: getUser()._id,
    };

    // Include the token in the request headers
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    // Send a POST request to get user data
    const response = await axios.post('http://localhost:8080/api/authentication/get-user', data, config);

    if (response.status === 403) {
      // Handle a 403 status (Forbidden)
      logError('Access forbidden. Logging out user...');
      removeTokenAndLogOut();
    }

    return response.data.data;
  } catch (error) {
    logError('Error fetching user data:', error);
    throw error;
  }
}

/**
 * Update user data on the server.
 * @param {Object} userData - The updated user data.
 * @returns {Promise<Object|null>} A promise that resolves to the response data or null if not available.
 */
export const updateUser = async (userData) => {
  try {
    // Retrieve the token from local storage
    const token = getToken();

    if (!token) {
      logError('No token available.');
      return null;
    }

    // Include the token in the request headers
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    // Send a POST request to update user data
    const response = await axios.post('http://localhost:8080/api/authentication/update-user', userData, config);

    if (response.status === 403) {
      // Handle a 403 status (Forbidden)
      logError('Access forbidden. Logging out user...');
      removeTokenAndLogOut();
    }
    
    return response.data;
  } catch (error) {
    logError('Error updating user data:', error);
    throw error;
  }
};

/**
 * Fetch all users from the server.
 * @returns {Promise<Object[]|null>} A promise that resolves to an array of user objects or null if not available.
 */
export const getAllUsers = async () => {
  try {
    // Retrieve the token from local storage
    const token = getToken();

    if (!token) {
      logError('No token available.');
      return null;
    }

    // Include the token in the request headers
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    // Send a POST request to get all users
    const response = await axios.post('http://localhost:8080/api/authentication/get-all-users', null, config);

    if (response.status === 403) {
      // Handle a 403 status (Forbidden)
      logError('Access forbidden. Logging out user...');
      removeTokenAndLogOut();
    }

    return response.data.data;

  } catch (error) {
    logError('Error fetching all users', error);
    throw error;
  }
};

/**
 * Delete a user by ID.
 * @param {string} userIdToDelete - The ID of the user to delete.
 * @returns {Promise<Object|null>} A promise that resolves to the response data or null if not available.
 */
export const deleteUser = async (userIdToDelete) => {
  try {
    // Retrieve the token from local storage
    const token = getToken();

    if (!token) {
      logError('No token available.');
      return null;
    }

    // Include the token in the request headers
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    // Send a POST request to delete the user
    const response = await axios.post('http://localhost:8080/api/authentication/test', { userIdToDelete: userIdToDelete }, config);
    
    if (response.status === 403) {
      // Handle a 403 status (Forbidden)
      logError('Access forbidden. Logging out user...');
      removeTokenAndLogOut();
    }

    return response.data;

  } catch (error) {
    logError('Error deleting user', error);
    throw error;
  }
};

/**
 * Remove the JWT token from local storage and log out the user.
 */
export const removeTokenAndLogOut = () => {
  localStorage.removeItem("token");
  window.location = '/';
}
