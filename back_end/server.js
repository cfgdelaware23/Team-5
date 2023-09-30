require("dotenv").config()

const cors = require("cors");
const express = require("express")
const mongoose = require("mongoose")

// routers
const AdminRouter = require("./routes/AdminRouter.js")
const CustomerRouter = require("./routes/CustomerRouter.js")
const ProductRouter = require("./routes/ProductRouter.js")

// set up express app
const app = express()

// Set up cors
app.use(cors({
    origin: "*"
}))

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get("/", (req, res) => {
    res.json({ mssg: "welcome to our app" })
})

// routes
app.use("/admin", AdminRouter)
app.use("/customer", CustomerRouter)
app.use("/products", ProductRouter)

// connect to db
mongoose.connect(process.env.MONGODB)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening in port 4000 and connected to db")
        })
    })
    .catch((err) => {
        console.log("error" + err)
    })

// app.listen(process.env.PORT, () => {
//     console.log("Listening in port 4000")
// })