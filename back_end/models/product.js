let mongoose = require("mongoose");

let productSchem = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantitySold: {
        type: Number,
        required: true,
    },
    priceFull: {
        type: Number,
        required: true,
    },
    priceDiscount: {
        type: Number,
        required: true
    }
},
 {timestamps: true})