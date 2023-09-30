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
    try {
        let feedbackPositive = request.body.feedbackPositive
        let feedbackDescription = request.body.feedbackDescription  
        let productId = request.body.productId
        let customerId = request.body.customerId

        let feedbackData = {};
        if (feedbackPositive !== undefined) {
            feedbackData.feedbackPositive = feedbackPositive
        }
        if (feedbackDescription !== undefined) {
            feedbackData.feedbackDescription = feedbackDescription
        }
        if (productId !== undefined) {
            feedbackData.productId = productId
        }
        if (customerId !== undefined) {
            feedbackData.customerId = customerId
        }

        const feedback = await Feedback.create(feedbackData);
        console.log(feedback);
        res.status(200).json(feedback);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({error: "feedback not created"});
    }
})

router.put("/feedback_update/:id", async (request, res) => {
    let passedInId = request.params.id;
    let feedbackPositive = request.body.feedbackPositive
    let feedbackDescription = request.body.feedbackDescription  
    let productId = request.body.productId
    let customerId = request.body.customerId

    let feedbackData = {};
    if (feedbackPositive !== undefined) {
        feedbackData.feedbackPositive = feedbackPositive;
    }
    if (feedbackDescription !== undefined) {
        feedbackData.feedbackDescription = feedbackDescription
    }
    if (productId !== undefined) {
        feedbackData.productId = productId
    }
    if (customerId !== undefined) {
        feedbackData.customerId = customerId
    }
    try {
        let feedbackOld = await Feedback.findByIdAndUpdate(passedInId, feedbackData);
        let newFeedBack = await Feedback.findById(passedInId);
        res.status(200).json(newFeedBack);
        
    }
    catch (err) {
        res.status(400).json({error: "feedback not updated"});
    }
    return;

});

// Delete customer w id
router.delete("/delete_customer/:id", async(request, res) => {

    const {id} = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such customer'})
    }

    const cust = await Customer.findOneAndDelete({_id: id})

    if(!cust) {
        return res.status(400).json({error: 'No such customer'})
    }

  res.status(200).json(customer)

})

module.exports = router