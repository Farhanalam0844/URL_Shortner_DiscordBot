const mongoose = require('mongoose');

const urlShortnerSchema = new mongoose.Schema({
    ShortId: {
        type: String,
        unique: true,
        required: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    urlHistory: [
        {
            TimeStamp: {
                type: Number
            }
        }
    ]
}, { timestamps: true }); // Added timestamps option to automatically add createdAt and updatedAt fields

const Url = mongoose.model('url', urlShortnerSchema);

module.exports = Url;
