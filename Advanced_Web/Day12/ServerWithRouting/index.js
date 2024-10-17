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
    res.send("I'm from the home")
})

app.get("/about", (req, res) => {
    res.send("I'm from the about")
})

app.get("/contact", (req, res) => {
    res.send("I'm from the contact")
})

app.get("/name/:name/bank/:money", (req, res) => {

    const {name, money} = req.params

    if(isNaN(money))
        res.send("is not a number")

    res.send(`Your name is ${req.params.name} and you have ${req.params.money} dollars.`)
})

app.get("/fruit/:doggy", (req, res) => {
    console.log(req.params.doggy);
    res.send("Done")
})

app.get("*", (req, res) => {
    res.send("No matching route");
})

// Listeners
app.listen(port, console.log(`Server running on port ${port}`));
