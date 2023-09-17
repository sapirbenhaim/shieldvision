// Import the Mongoose library for working with MongoDB
const mongoose = require("mongoose");
const { logMessage, logError } = require("../../utils/logger");

/**
 * Initializes a connection to the MongoDB database.
 */
module.exports = () => {
    // Define connection parameters
    const connectionParams = {
        useNewUrlParser: true,         // Use the new URL parser
        useUnifiedTopology: true,      // Use the new Server Discover and Monitoring engine
    };

    try {
        // Attempt to establish a connection to the database using the provided URL and connection parameters
        mongoose.connect(process.env.DB, connectionParams);
        
        // Log a success message if the connection is established
        logMessage("Connected to the database successfully");
    } catch (error) {
        // Log an error message if there's an issue with connecting to the database
        logError(error);
        logError("Could not connect to the database");
    }
}
