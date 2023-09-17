const mongoose = require('mongoose');

// Define the subscription schema
const subscriptionSchema = new mongoose.Schema({
    planId: { type: Number, required: true }, // Unique identifier for the subscription plan
    subscriptionPackage: { type: String, required: true }, // Name of the subscription package (e.g., "Essential")
    price: { type: Number, required: true }, // Current price of the subscription package
    oldPrice: { type: Number, required: true }, // Previous price of the subscription package
    billedPeriod: { type: String, required: true }, // Billing period (e.g., "Billed Monthly")
    description: { type: String, required: true }, // A brief description of the subscription plan
    subDescription: { type: String, required: true }, // Additional description or subtitle
    planContent: { type: [String], required: true }, // Array of features included in the plan
    maxCameras: { type: Number, required: true }, // Maximum number of cameras allowed for this plan
});

/**
 * Represents a subscription plan model in the database.
 * @typedef {Object} SubscriptionPlanModel
 * @property {Number} planId - Unique identifier for the subscription plan.
 * @property {String} subscriptionPackage - Name of the subscription package.
 * @property {Number} price - Current price of the subscription package.
 * @property {Number} oldPrice - Previous price of the subscription package.
 * @property {String} billedPeriod - Billing period.
 * @property {String} description - A brief description of the subscription plan.
 * @property {String} subDescription - Additional description or subtitle.
 * @property {String[]} planContent - Array of features included in the plan.
 * @property {Number} maxCameras - Maximum number of cameras allowed for this plan.
 */

/**
 * Represents a subscription plan model in the database.
 * @typedef {import('mongoose').Model<SubscriptionPlanModel>} SubscriptionPlan
 */

/**
 * Represents a subscription plan model in the database.
 * @type {import('mongoose').Model<SubscriptionPlanModel>}
 */
const SubscriptionPlan = mongoose.model("subscriptionPlans", subscriptionSchema);

module.exports = { SubscriptionPlan };
