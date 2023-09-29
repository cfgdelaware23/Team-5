const express = require("express")

const router = express.Router()

router.post("/save_customer", (request, res) => {
    console.log(request.body);
})

router.post("/retrieve_customer", (request, res) => {
    console.log(request.body);
})

router.post("/feedback_create", (request, res) => {
    console.log(request.body);
})

module.exports = router