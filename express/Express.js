const express = require('express')
const app = express()

app.get("/", function(req,res){
    res.send("I is am the one");
})

app.get("/shubham", function(req,res){
    res.send("Shubham is the one");
})

app.listen(3000);