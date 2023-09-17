// Import the 'jsonwebtoken' library for working with JSON Web Tokens (JWT)
const jwt = require('jsonwebtoken');

/**
 * Middleware function to authenticate requests using JWT.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The callback function to pass control to the next middleware.
 */
const authenticateToken = (req, res, next) => {
    // Extract the JWT from the 'Authorization' header
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // Check if the token is missing
    if (token == null) return res.sendStatus(401);

    // Verify the token using the JWT private key
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, user) => {

        // Handle JWT verification errors (e.g., expired token)
        if (err) return res.status(403).json(err);

        // Attach the user data from the token to the request object
        req.user = user;

        // Move to the next middleware in the chain
        next();
    });
};

// Export the 'authenticateToken' middleware for use in other modules
module.exports = authenticateToken;
