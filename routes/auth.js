// Import required modules and middleware
const router = require("express").Router();
const { User } = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const authenticateToken = require("../middlewares/authenticate");

/**
 * Handles user login.
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post("/login", async (req, res) => {
    try {
        // Validate the request body
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        // Find user by email
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" });

        // Compare provided password with hashed password
        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" });

        // Generate authentication token and send it in response
        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "Logged in successfully" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error: " + error});
    }
});

/**
 * Handles getting user by ID (requires authentication).
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post("/get-user", authenticateToken, async (req, res) => {
    try {
        // Find user by ID
        const user = await User.findOne({ _id: req.body.userId });
        if (!user)
            return res.status(401).send({ message: "No such user" });

        // Send user data in response
        res.status(200).send({ data: user, message: "User retrieved successfully" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

/**
 * Handles getting all users (requires authentication).
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post("/get-all-users", authenticateToken, async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await User.find();

        // Check if users were found
        if (!users || users.length === 0)
            return res.status(404).send({ message: "No users found" });

        // Send the list of users in response
        res.status(200).send({ data: users, message: "All users retrieved successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

/**
 * Handles updating user data (requires authentication).
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post('/update-user', authenticateToken, async (req, res) => {
    try {
        const userId = req.body.userId;
        const updatedUserData = {
            email: req.body.email,
            isAdmin: req.body.isAdmin,
            subscriptionPackage: req.body.subscriptionPackage
        };

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $set: updatedUserData },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send({ message: "User not found or update failed" });
        }

        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ message: 'Error while updating user data' });
    }
});

/**
 * Handles deleting a user by ID (requires authentication).
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post("/delete-user", authenticateToken, async (req, res) => {
    try {
        // Check if the user with the given ID exists
        const user = await User.findOne({ _id: req.body.userIdToDelete });
        if (!user)
            return res.status(404).send({ message: "User not found" });

        // Delete the user
        await User.findOneAndDelete({ _id: req.body.userId });

        // Send a success message in response
        res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Define a validation function for the request body
const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    });
    return schema.validate(data);
}

// Export the router
module.exports = router;
