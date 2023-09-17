const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const { addBaseData, addFirstTwoCameras } = require("../utils/databasePrepUtil");

/**
 * Handles user registration.
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post("/", async (req, res) => {
    try {
        // Validate the request body
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        // Check if a user with the same email already exists
        const user = await User.findOne({ email: req.body.email });

        if (user)
            return res.status(409).send({ message: "User with given email already exists!" });

        // Check if there are any users in the database
        const isFirstUser = (await User.countDocuments()) === 0;

        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new user with isAdmin set to true if it's the first user
        const newUser = new User({
            ...req.body,
            password: hashPassword,
            isAdmin: isFirstUser,
            subscriptionPackage: "Free" // Set isAdmin to true for the first user
        });

        await newUser.save();

        if (isFirstUser) {
            // If this is the first user, add initial data
            await addBaseData(newUser._id);
        }

        // Add dummy and example cameras to the user's camera list
        await User.findOneAndUpdate(
            { email: req.body.email },
            { $addToSet: { cameras: "empty" } },
            { new: true }
        );

        await User.findOneAndUpdate(
            { email: req.body.email },
            { $addToSet: { cameras: "http://176.12.133.181:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER" } },
            { new: true }
        );

        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        // Handle any internal server error
        res.status(500).send({ message: "Internal Server Error: " + error });
    }
})

module.exports = router;
