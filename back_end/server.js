const express = require("express")

// set up express app
const app = express()

// listening for requests
app.listen(4000, () => {
    console.log("Listening in port 4000")
})
