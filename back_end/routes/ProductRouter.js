const express = require("express")
const product = require("../models/product")
const router = express.Router()
const mongoose = require("mongoose")

// for image processing
const multer = require("multer") 
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// routes

// Gets random product
router.get("/get_random_product", async(req, res) => {
    const randomNum = Math.floor(Math.random() * 10)
    const prod = await product.find({}).limit(1).skip(randomNum).exec()

    if (!prod) {
        res.status(404).json({mssg: "products not found"})
    }
    
    res.status(200).json(prod)
})

// Gets all products
router.get("/", async(req, res) => {
    const allProducts = await product.find({}).sort({ quantitySold: -1 })

    if (!allProducts) {
        res.status(404).json({mssg: "products not found"})
    }

    res.status(200).json(allProducts)
})

// Gets product with id
router.get("/get_product/:id", async(request, res) => {
    let passedInId = request.params.id;
    
    try {
        let productInstance = await product.findById(passedInId);
        res.status(200).json(productInstance);
    }
    catch (err) {
        console.log(err);
        res.status(404).json({ mssg: "product not found" })
    }
    return;

    // if (!mongoose.Types.ObjectId.isValid(passedInId)) {
    //     return res.status(404).json({error: 'no such product'})
    //   }

    // try {
    //     let product = await product.findById(passedInId);
          
    //     console.log(product);
    //     res.status(200).json(product);
    // } catch (err) {
    //     res.status(404).json({ mssg: "product not found" })
    //     return;
    // }
    // return;
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

        if (!new_product) {
            res.status(404).json({ mssg: "new product not created" })
        }

        console.log(new_product);

        res.status(200).json(new_product);
    } catch (err) {
        res.status(400).json({ error: "product not created" });
    }
    return;
})

// updates product
router.put("/update_product/:id", async(request, res) => {
    let passedInId = request.params.id;

    let name = request.body.name;
    let quantitySold = Number(request.body.quantitySold);
    let priceFull = Number(request.body.priceFull);
    let priceDiscount = Number(request.body.priceDiscount);

    try {
        const productInstance = await product.findById(passedInId);
        if (name === undefined) {
            name = productInstance.name
        }
        if (quantitySold === undefined) {
            quantitySold = productInstance.quantitySold
        }
        if (priceFull === undefined) {
            priceFull = productInstance.priceFull
        }
        if (priceDiscount === undefined) {
            priceDiscount = productInstance.priceDiscount
        }
        let newProduct = await product.findByIdAndUpdate(passedInId, {
            name, quantitySold, priceFull, priceDiscount
        })

        // Can be optimized (uneccessary multiple SQL queries), but this is fine for now
        let updatedProduct = await product.findById(passedInId);
        console.log(updatedProduct);
        res.status(200).json(updatedProduct);
    }
    catch (err) {
        console.log(err);
        res.status(400, "product not updated")
    }
    return;
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: 'no such product'})
    // }

    // let quantity = request.body.quantitySold;

    // const product = await product.findById(id);
    // if (!product) {
    //     return res.status(404).json({ message: 'Product not found' });
    // }

    // product.quantitySold += quantity;

    // res.json({ mssg: "product incremented" })
    // return;
})

// Delete product w id
router.delete("/delete_product/:id", async(request, res) => {

    const {id} = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such product'})
    }

    const prod = await product.findOneAndDelete({productId: id})

    if(!prod) {
        return res.status(400).json({error: 'No such product'})
    }

  res.status(200).json(prod)

})

// uploads image for product w productId
router.post("/products/:productId/upload_image", upload.single("image"), async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: "Product not found." });
        }

        product.image.data = req.file.buffer;
        product.image.contentType = req.file.mimetype;

        await product.save();

        res.status(200).json({ message: "Image uploaded successfully." });

    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Image unable to be uploaded" });
    }
});

module.exports = router