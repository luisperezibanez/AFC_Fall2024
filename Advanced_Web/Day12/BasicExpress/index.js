// Foundation
const express = require("express")
const app = express()
//console.log(process)
const port = process.env.PORT || 3000

// Route Handlers
app.get("/", (request, response) => {
    //response.send("I am from the back end!!")
    response.redirect("/home")
})

app.get("/home", (req, res) => {
    res.send("I'm from the redirect")
})

// Listeners
app.listen(port, console.log(`Server running on port ${port}`));
