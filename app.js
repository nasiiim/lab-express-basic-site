const express = require("express")
const app = express()
const port = 3000

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/views/index.html")
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/images", (req, res) => {
    res.sendFile(__dirname + "/views/images.html")
})

app.listen(port, () =>{console.log(`Listening on port ${port}`)})