const express = require("express")
const Customer = require("../models/user")

const router = express.Router()

router.post("/save_customer", (request, res) => {
    let name = request.body.name;
    let qualify = request.body.qualify;
    let address = request.body.address;
    let isAdmin = request.body.isAdmin;

    const customer = Customer.create({ name, qualify, address, isAdmin })

    console.log(customer);

    res.json({ mssg: "customer created successfully" })
    return;
})

router.get("/retrieve_customer", (request, res) => {
    console.log(request.body);
})

router.get("/feedback_create", (request, res) => {
    console.log(request.body);
})

module.exports = router