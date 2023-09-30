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
        required: false,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model("Customer", customerSchema)