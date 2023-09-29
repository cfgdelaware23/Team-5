let mongoose = require("mongoose");

let feedbackSchema = new mongoose.Schema({
    customerId: String,
    feedbackPositive: Boolean,
    feedbackDescription: String,
}, 
{timestamps: true})