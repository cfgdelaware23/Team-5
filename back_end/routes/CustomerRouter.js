const express = require("express");
const Customer = require("../models/user");
const Feedback = require("../models/feedback");

const router = express.Router()

router.post("/save_customer", async (request, res) => {
    let name = request.body.name;
    let qualify = request.body.qualify;
    let address = request.body.address;
    let isAdmin = request.body.isAdmin;

    try {
        const customer = await Customer.create({name, qualify, address, isAdmin})
        console.log(customer);
        res.status(200).json(customer);
    }
    catch (err) {
        res.status(400).json({error: "customer not created"});
    }
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
        res.status(404).json({error: "customer not found"})
        return;
    }
    return;
})

router.put("/update_customer/:id", async (request, res) => {
    let passedInId = request.params.id;

    let name = request.body.name;
    let qualify = request.body.qualify;
    let address = request.body.address;
    let isAdmin = request.body.isAdmin;


    try {
        const customer = await Customer.findById(passedInId);
        if (name === undefined) {
            name = customer.name
        }
        if (qualify === undefined) {
            qualify = customer.qualify
        }
        if (address === undefined) {
            address = customer.address
        }
        if (isAdmin === undefined) {
            isAdmin = customer.isAdmin
        }
        let newCustomer = await Customer.findByIdAndUpdate(passedInId, {name, qualify, address, isAdmin});

        // Can be optimized (multiple SQL queries), but find for now
        let updatedCustomer = await Customer.findById(passedInId);
        res.status(200).json(updatedCustomer);
    }
    catch(err) {
        res.status(400, {error: "customer not updated"});
    }
    return;
});

router.get("/retrieve_feedback/:id", async (request, res) => {
    let passedInId = request.params.id;
    try {
        let feedback = await Feedback.findById(passedInId);
        console.log(feedback);
        res.status(200).json(feedback);
    }
    catch (err) {
        res.status(404).json({error: "feedback not found"})
    }
    return;
});

router.post("/feedback_create", async (request, res) => {
    let id = request.body.customerId
    let feedback = request.body.feedbackPositive
    let feedbackDescription = request.body.feedbackDescription

    console.log(request.body);
})

module.exports = router