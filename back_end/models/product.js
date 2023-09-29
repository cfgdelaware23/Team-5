let mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
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
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)