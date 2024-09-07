const { urlencoded } = require('body-parser');
const { log } = require('console');
const express = require('express');
const app = express();
const path= require('path');


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'\public')));

app.get('/',function(req,res){
    res.render('index');
})
app.get('/read',function(req,res){
    res.render('read');
})

app.listen(3000);
console.log(path.join(__dirname,'\public'));
