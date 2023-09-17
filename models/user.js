// Import required libraries and modules
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

// Define the user schema for the MongoDB collection
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cameras: { type: [String], required: false },
    isAdmin: { type: Boolean, required: false },
    subscriptionPackage: { type: String, required: false },
});

// Add a custom method to the user schema for generating authentication tokens
userSchema.methods.generateAuthToken = function () {
    // Generate a JWT (JSON Web Token) using the user's _id and the JWT private key
    const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY, { expiresIn: "4h" });
    return token;
};

// Create the User model based on the user schema
const User = mongoose.model("user", userSchema);

/**
 * Validates user data using a Joi schema.
 * @param {object} data - The user data to be validated.
 * @returns {object} - The result of the validation, including any validation errors.
 */
const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        isAdmin: Joi.bool().required().label("Admin"),
    });
    return schema.validate(data);
};

// Export the User model and the validate function for use in other modules
module.exports = { User, validate };
