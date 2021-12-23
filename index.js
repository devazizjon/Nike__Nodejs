const express = require('express')
const app = express()
const path = require("path")
app.get("/", (req, res, next) => {
  
    res.sendFile(path.join(__dirname, "views", "Nike.html"))
})


app.use(express.static(path.join(__dirname, "public")));


app.listen(3000, () => {
    console.log("Server ishga tushdi");
})