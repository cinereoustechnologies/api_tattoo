const UserProfile = require('../models/userProfile');

// @desc    Get user profile
// @route   GET /profile
// @access  Private
const getProfile = async (req, res) => {
    try {
        const profile = await UserProfile.findOne({ user_id: req.user.id });
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// @desc    Update user profile
// @route   PUT /profile
// @access  Private
const updateProfile = async (req, res) => {
    try {
        const { name, email, phone, preferences } = req.body;

        const profile = await UserProfile.findOneAndUpdate(
            { user_id: req.user.id },
            { name, email, phone, preferences },
            { new: true, runValidators: true }
        );

        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

module.exports = { getProfile, updateProfile };
