const express = require("express")

const router = express.Router()

// routes
router.get("/", (req, res) => {
    res.json({mssg: "Welcome to app"})
})

module.exports = router