let mongoose = require("mongoose");

let customerSchema = new mongoose.Schema({
    name: String,
    qualify: Boolean,
    address: String,
    dateCreated: Date,
    isAdmin: Boolean,
}, {timestamps: true})