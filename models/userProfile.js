const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    phone: { type: String },
    preferences: { type: [String], default: [] },
}, {
    timestamps: true,
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
