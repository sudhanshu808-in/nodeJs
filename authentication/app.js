// const express = require ('express');
const bcrypt = require('bcrypt');
const { log } = require('npmlog');
const jwt  = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
import express from 'express';
const app = express();

// import 

app.use(cookieParser());

app.get("/",function(req,res){
let token = jwt.sign({email:"shubham@hgamil.com"},"secret")
res.cookie("token",token);
console.log("done");
res.send("hello"); 
})

app.get("/read",function(req,res){
// console.log(req.cookies.token);
let data = jwt.verify(req.cookies.token, "secret");
console.log(data);

 
})

app.listen(3000);