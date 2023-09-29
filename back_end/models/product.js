let mongoose = require("mongoose");

let productSchem = new mongoose.Schema({
    name: String,
    quantitySold: Number,
    priceFull: Number,
    priceDiscount: Number,
},
 {timestamps: true})