const subscriptionPlansData = require('../data/basicdata/subscriptionplans.cjs');
const exampleCameraData = require('../data/basicdata/examplecameras.cjs');
const { SubscriptionPlan } = require('../models/subscriptionPlan');
const { User } = require('../models/user');
const { logMessage, logError } = require('./logger');

/**
 * Add base data to the database, including subscription plans and test cameras.
 * @param {string} userId - The ID of the user for whom the data is added.
 */
const addBaseData = async (userId) => {
    try {
        await addSubscriptionPlans();
        await addTestCameras(userId);
    } catch (error) {
        console.error(error);
    }
}

/**
 * Add subscription plans to the database if they don't already exist.
 */
const addSubscriptionPlans = async () => {
    try {
        for (const planData of subscriptionPlansData) {
            const { planId, subscriptionPackage } = planData;

            // Check if a subscription plan with the same planId already exists
            const existingPlan = await SubscriptionPlan.findOne({ planId });

            if (!existingPlan) {
                // Create a new SubscriptionPlan document and save it to the database
                const subscriptionPlan = new SubscriptionPlan(planData);
                logMessage("Adding plan: " + subscriptionPackage);
                await subscriptionPlan.save();
            } else {
                logMessage(`Plan '${subscriptionPackage}' already exists. Skipping.`);
            }
        }

        logMessage('Subscription plans inserted into the database.');
    } catch (error) {
        logError('Error inserting subscription plans:', error);
    }
}

/**
 * Add test cameras to the user's cameras list.
 * @param {string} userId - The ID of the user for whom test cameras are added.
 */
const addTestCameras = async (userId) => {
    for (const cameraData of exampleCameraData) {
        const { cameraUrl } = cameraData;
        await addCameraUrl(cameraUrl, userId);
    }
}

/**
 * Add a camera URL to the user's cameras list.
 * @param {string} camera - The camera URL to be added.
 * @param {string} userId - The ID of the user to whom the camera URL is added.
 */
const addCameraUrl = async (camera, userId) => {
    await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { cameras: camera } },
        { new: true }
    );
}

/**
 * Add the first two cameras to the user's cameras list.
 * @param {User} user - The user to whom the cameras are added.
 * @param {Express.Request} req - The Express request object.
 */
const addFirstTwoCameras = async (user, req) => {
    // Add logic to add the first two cameras here
}

module.exports = { addBaseData, addFirstTwoCameras };
