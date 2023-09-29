const express = require("express")
const mongoose = require("mongoose")

// routers
const AdminRouter = require("./routes/AdminRouter.js")
const CustomerRouter = require("./routes/CustomerRouter.js")
// const ProductRouter = require("./routes/AdminRouter.js")

// set up express app
const app = express()

app.use(express.json())

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get("/", (req, res) => {
    res.json({mssg:"welcome to our app"})
})

// routes
app.use("/admin", AdminRouter)
app.use("/customer", CustomerRouter)
// app.use("/products", ProductRouter)

// listening for requests
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         app.listen(4000, () => {
//             console.log("Listening in port 4000")
//         })
//     })
//     .catch((err) => {
//         console.log("error")
//     })

app.listen(4000, () => {
    console.log("Listening in port 4000")
})