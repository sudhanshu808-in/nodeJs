const express = require('express')
const app = express()

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req,res){
    res.send("I is am the one"); 
})

app.get("/shubham", function(req,res){
    res.send("Shubham is the one");
})

app.listen(3000);