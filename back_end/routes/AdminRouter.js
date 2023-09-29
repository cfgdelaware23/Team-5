const express = require("express")
const feedback = require("./models/feedback.js")
const products = require("./models/product.js")
const router = express.Router()

// routes

// Gets all feedback in JSON array
router.get("/feedback", async (req, res) => {
    const feedback = await feedback.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)

})
// Gets all products 
router.get("/products_all", async (req, res) => {
    const products = await products.find({}).sort({quantitySold: -1})
    
    res.status(200).json(workouts)
})

module.exports = router