const express = require("express")

const products = require("../models/product")
const users = require("../models/user");
const feedback = require("../models/feedback");
const router = express.Router()
const mongoose = require("mongoose")

// routes

// Gets all admins
router.get("/", async(req, res) => {
    // const currAdmin = await feedback.find({isAdmin: true})
    return
})

// Gets all feedback in JSON array
router.get("/feedback_all", async(req, res) => {
    const allFeedback = await feedback.find({}).sort({ createdAt: -1 })

    if (!allFeedback) {
        return res.status(404).json({ mssg: "feedback not found" })
    }

    res.status(200).json(allFeedback)
})

// Gets all products 
router.get("/products_all", async(req, res) => {
    const allProducts = await products.find({}).sort({ quantitySold: -1 })

    if (!allProducts) {
        return res.status(404).json({ mssg: "products not found" })
    }

    res.status(200).json(allProducts)
})

// Gets all customers
router.get("/customers_all", async(req, res) => {
    const customers = await users.find({}).sort({ createdAt: -1 })

    if (!customers) {
        return res.status(404).json({ mssg: "customers not found" })
    }

    res.status(200).json(customers)
})

module.exports = router