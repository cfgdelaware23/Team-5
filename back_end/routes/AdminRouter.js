const express = require("express")

const router = express.Router()

// routes

// Gets all feedback in JSON array
router.get("/feedback", (req, res) => {
    res.json({mssg: "Feedback"})
})
// Gets all products 
router.get("/products_all", (req, res) => {
    res.json({mssg: "All products"})
})

module.exports = router