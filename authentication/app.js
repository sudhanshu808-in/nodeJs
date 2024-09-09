const express = require ('express');
const bcrypt = require('bcrypt');
const { log } = require('npmlog');
const app = express();

app.get("/",function(req,res){
    bcrypt.compare("shubham", "$2b$05$5Q3Jvc3dQg/RxCXCu1pTE.91hlT1Fyc38O/TctGguRVU.yw9SUTWy", function(err, result) {
    console.log(result);
       
    });
})

app.get("/read",function(req,res){
res.send("cookies done");   
})

app.listen(3000);