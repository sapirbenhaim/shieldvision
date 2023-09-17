import axios from 'axios';
import { getToken, getUser, removeTokenAndLogOut } from './authManager';
import { logError } from '../utils/logger';

/**
 * Get the subscription level of the currently logged-in user.
 * @returns {Promise<string|null>} A promise that resolves to the subscription level or null if not available.
 */
export const getSubscriptionLevel = async () => {
    const user = await getUser();
    return user.subscriptionLevel;
}

/**
 * Update the subscription level for a user.
 * @param {string} userId - The ID of the user to update the subscription for.
 * @param {string} subscriptionLevel - The new subscription level to set for the user.
 * @returns {Promise<Object|null>} A promise that resolves to the response data or null if not available.
 */
export const updateSubscriptionLevel = async (userId, subscriptionLevel) => {
    try {
      // Retrieve the token from where you have stored it (e.g., in local storage or a state variable)
      const token = getToken();
  
      if (!token) {
        logError('No token available.'); // Handle the case where the token is missing
        return null;
      }
  
      // Include the token in the Authorization header
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
  
      // Send a POST request to update the subscription level
      const response = await axios.post('http://localhost:8080/api/subscription/change-subscription', {
        userId: userId,
        subscriptionPackage: subscriptionLevel
      }, config);
      
      if (response.status === 403) {
        // Handle a 403 status (Forbidden)
        logError('Access forbidden. Logging out user...');
        removeTokenAndLogOut();
      }
  
      return response.data;
  
    } catch (error) {
      logError('Error updating subscription', error);
      // Handle the error appropriately
      throw error;
    }
};

/**
 * Get a list of available subscription packages.
 * @returns {Promise<Object[]|null>} A promise that resolves to an array of subscription packages or null if not available.
 */
export const getSubscriptionPackages = async () => {
    try {
        // Send a GET request to fetch subscription packages
        const response = await axios.post('http://localhost:8080/api/subscription/get-subscriptions');
        
        // Extract the subscription packages from the response data
        const subscriptionPackages = response.data;
        return subscriptionPackages.data;
    } catch (error) {
        logError('Error fetching subscription packages', error);
        // Handle the error appropriately
        throw error;
    }
};
