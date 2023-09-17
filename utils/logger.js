// Function to log regular messages
const logMessage = (message) => {
    console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
  };
  
// Function to log errors
const logError = (error) => {
    console.error(`[ERROR] ${new Date().toISOString()}:`, error);
};
  
module.exports = { logMessage, logError };