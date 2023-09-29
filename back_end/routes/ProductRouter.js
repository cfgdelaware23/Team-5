const express = require("express")

const router = express.Router()

// routes
router.get("/", (req, res) => {
    res.json({ mssg: "get all products" })
})

router.get("/:id", (req, res) => {
    req.params;
    res.json(req.params)
})

router.POST("/:name", (req, res) => {
    req.params;
    res.json(req.params)
})

module.exports = router