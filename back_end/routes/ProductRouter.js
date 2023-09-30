const express = require("express")
const product = require("../models/product")
const router = express.Router()

// routes
router.get("/", async(req, res) => {
    const allProducts = await product.find({}).sort({ quantitySold: -1 })

    res.status(200).json(allProducts)
})

router.get("/get_product/:id", async(request, res) => {
    let passedInId = request.params.id;
    try {
        let product = await Product.findById(passedInId);
        console.log(product);
        res.status(200).json(product);
    } catch (err) {
        res.json({ mssg: "product not found" })
        return;
    }
    return;
})

router.POST("/update_product/:id", async(request, res) => {
    let id = request.body.id;
    let quantity = request.body.quantitySold;

    const product = await Product.findById(id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    product.quantitySold += quantity;

    res.json({ mssg: "product incremented" })
    return;
})

module.exports = router