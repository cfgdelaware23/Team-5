let mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    productId: {
        type: Number,
        required: true
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
    , 
    image: {
        data: Buffer,
        contentType: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)