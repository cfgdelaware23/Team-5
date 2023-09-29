const asyncHandler = require("express-async-handler")
const productCopy = require("../models/product");

const getProduct = asyncHandler(async(req, res) => {
    productCopy.findById(request.params.id)
        .then(data => response.json(data))
        .catch(error => response.json(error))
});

const addProduct = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "get customer" })
});