// Import required modules and middleware
const router = require("express").Router();
const { User } = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const authenticateToken = require("../middlewares/authenticate");
const { SubscriptionPlan } = require("../models/subscriptionPlan");

/**
 * Handles changing a user's subscription package.
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post('/change-subscription', authenticateToken, async (req, res) => {
    try {
        const userId = req.body.userId;
        const newSubscriptionPackage = req.body.subscriptionPackage; // New subscription package value

        if (!userId || !newSubscriptionPackage) {
            return res.status(409).send({ message: "Please fill in all the required fields!" });
        }

        // Assuming your User model has a 'subscriptionPackage' field
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $set: { subscriptionPackage: newSubscriptionPackage } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ message: 'Error while updating subscription package' });
    }
});

/**
 * Handles fetching all subscription plans.
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post('/get-subscriptions', async (req, res) => {
    try {
        // Retrieve all subscription plans from the database
        const plans = await SubscriptionPlan.find();

        // Check if plans were found
        if (!plans || plans.length === 0)
            return res.status(404).send({ message: "No plans found" });

        // Send the list of plans in response
        res.status(200).send({ data: plans, message: "All plans retrieved successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error: " + error });
    }
});

// Export the router
module.exports = router;