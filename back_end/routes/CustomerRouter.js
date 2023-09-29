const express = require("express")

const router = express.Router()

router.get("/save-customer", (req, res) => {
    res.json({mssg: "Welcome to app"})
})

module.exports = router