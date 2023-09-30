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
        let product = await product.findById(passedInId);
        console.log(product);
        res.status(200).json(product);
    } catch (err) {
        res.json({ mssg: "product not found" })
        return;
    }
    return;
})

router.post("/create_product/:name/:quantity/:full/:discount", async(request, res) => {
    let name = request.body.name
    let quantitySold = request.body.quantity
    let priceFull = request.body.full
    let priceDiscount = request.body.discount
    try {
        const new_product = await product.create({
            if (name) { name },
            if (quantitySold) { quantitySold },
            if (priceFull) { priceFull },
            if (priceDiscount) { priceDiscount }
        })
        console.log(new_product);
        res.status(200).json(new_product);
    } catch (err) {
        res.status(400).json({ error: "product not created" });
    }
    return;
})


router.put("/update_product/:id/:quantitySold", async(request, res) => {
    let id = request.body.id;
    let quantity = request.body.quantitySold;

    const product = await product.findById(id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    product.quantitySold += quantity;

    res.json({ mssg: "product incremented" })
    return;
})

module.exports = router