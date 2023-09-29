let mongoose = require("mongoose");

let feedbackSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: false
    },
    feedbackPositive: {
        type: Boolean,
        required: false
    },
    feedbackDescription: {
        type: String,
        required: false
    }
}, 
{timestamps: true})

module.exports = mongoose.model("Feedback", feedbackSchema)