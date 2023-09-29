let mongoose = require("mongoose");

let customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    qualify: {
        type: Boolean,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    }
}, {timestamps: true})