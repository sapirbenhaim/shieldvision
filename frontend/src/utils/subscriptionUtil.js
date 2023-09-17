import { logError } from "./logger";

/**
 * Gets the maximum allowed number of cameras based on the subscription package.
 * @param {string} subscriptionPackage - The user's subscription package.
 * @returns {number} The maximum allowed number of cameras.
 */
export const getMaxAllowedCameras = async (subscriptionPackage) => {
    switch (subscriptionPackage) {
        case "Free":    
            return 3; // Maximum of 3 cameras for Free package
        case "Essential": 
            return 6; // Maximum of 6 cameras for Essential package
        case "Professional":    
            return 12; // Maximum of 12 cameras for Professional package
        case "Enterprise":
            return 99; // Maximum of 99 cameras for Enterprise package
        default:
            logError("Non-existent package received.");
            break;
    }
}
