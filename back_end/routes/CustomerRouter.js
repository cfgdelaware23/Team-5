const express = require("express")
const Customer = require("../models/user")

const router = express.Router()

router.post("/save_customer", async (request, res) => {
    let name = request.body.name;
    let qualify = request.body.qualify;
    let address = request.body.address;
    let isAdmin = request.body.isAdmin;

    const customer = await Customer.create({name, qualify, address, isAdmin})
    
    console.log(customer);

    res.json({ mssg: "customer created successfully" })
    return;
})

router.get("/retrieve_customer/:id", async (request, res) => {
    let passedInId = request.params.id;
    try {
        let customer = await Customer.findById(passedInId);
        console.log(customer);
        res.status(200).json(customer);
    }
    catch(err) {
        res.json({mssg: "customer not found"})
        return;
    }
    return;
})

router.post("/feedback_create", async (request, res) => {
    console.log(request.body);
})

module.exports = router