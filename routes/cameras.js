const router = require("express").Router();
const { User } = require("../models/user");
const authenticateToken = require("../middlewares/authenticate");

/**
 * Handles adding a camera to a user's cameras list.
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post('/add', authenticateToken , async (req, res) => {
    try {
        const userId = req.body.userId;
        const camera = req.body.camera;

        if (!userId || !camera) {
            return res.status(409).send({ message: "Please fill in all the required fields!" });
        }

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId }, 
            { $addToSet: { cameras: camera } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ message: 'Error while adding camera' });
    }
});

/**
 * Handles updating a user's camera URL.
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post('/update', async (req, res) => {
    try {
        const userId = req.body.userId;
        const camera = req.body.camera;
        const updatedCameraUrl = req.body.updatedCamera;

        if (!userId || !camera || !updatedCameraUrl) {
            return res.status(409).send({ message: "Please fill in all the required fields!" });
        }

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId, cameras: camera },
            { $set: { "cameras.$": updatedCameraUrl } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send({ message: "User not found or camera URL not matched" });
        }

        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ message: 'Error while updating camera URL' });
    }
});

/**
 * Handles removing a camera from a user's cameras list.
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post('/remove', async (req, res) => {
    try {
        const userId = req.body.userId;
        const cameraUrl = req.body.camera;
        const user = await User.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.cameras = user.cameras.filter(camera => camera !== cameraUrl);
        const savedUser = await user.save();

        return res.status(200).json(savedUser);
    } catch (error) {
        return res.status(500).json({ error: 'Error while removing camera' });
    }
});

/**
 * Handles fetching a user's cameras.
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.post('/get-cameras', async (req, res) => {
    try {
        const userId = req.body.userId;
        const user = await User.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user.cameras);
    } catch (error) {
        return res.status(500).json({ error: 'Error while fetching cameras' });
    }
});

module.exports = router;