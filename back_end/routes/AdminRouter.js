const express = require("express")
const feedback = require("./models/feedback.js")
const products = require("./models/product.js")
const users = require("./models/customers.js")
const router = express.Router()

// routes

// Gets all feedback in JSON array
router.get("/feedback", async (req, res) => {
    const feedback = await feedback.find({}).sort({createdAt: -1})

    res.status(200).json(feedback)

})

// Gets all products 
router.get("/products_all", async (req, res) => {
    const products = await products.find({}).sort({quantitySold: -1})
    
    res.status(200).json(products)
})

// Gets all customers
router.get("/customers_all", async (req, res) => {
    const customers = await users.find({}).sort({createdAt: -1})
    
    res.status(200).json(customers)
})

module.exports = router