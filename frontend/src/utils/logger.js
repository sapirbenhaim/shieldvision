// Function to log regular messages
export const logMessage = (message) => {
    console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
  };
  
// Function to log errors
export const logError = (error) => {
    console.error(`[ERROR] ${new Date().toISOString()}:`, error);
};
  