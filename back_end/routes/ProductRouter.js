const express = require("express")
const Customer = require("../models/product")
const router = express.Router()

// routes
router.get("/", async(req, res) => {
    const products = await products.find({}).sort({ quantitySold: -1 })

    res.status(200).json(products)
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

    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    product.quantitySold += 1;

    res.json({ mssg: "product incremented" })
    return;
})

module.exports = router