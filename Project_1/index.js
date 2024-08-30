const express = require('express');
const app = express();
const path = require('path');
const fs= require('fs');
const { log } = require('console');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
 
app.get("/",function(req,res){
    fs.readdir('./files',function(err,files){

        res.render("index",{files : files});
    })
})

app.post("/create",function(req,res){
fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
res.redirect("/");
});
})

// utf-8 is important  as it converts the data into english readable format.... otherwise it will be in buffer form 
app.get("/file/:filename",function(req,res){
   fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
    res.render("show",{filename : req.params.filename , filedata : filedata});
   });
})
 // yaha pr  data aega through form submition AS  the form gets submitted wo yaha par aega sara data fir  yaha se with the help of req.body.title / details hum wo data fetch  krenngey 

// How req.body Works
// When a client submits a form or sends data to the server via an HTTP POST or PUT request, the data is included in the body of the request. Express.js, with the help of middleware, parses this data and makes it available through the req.body object.

app.listen(3000);
