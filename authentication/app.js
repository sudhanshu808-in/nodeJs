// Create user account 
//   mongoose
//   schema 
//   model 
//   user create -> password -> hash 
//   jwt token -> cookie
//   login ->  token -> decrypt -> email

const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const userModel = require('./models/user')
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken')

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/create",(req,res)=>{
    // res.render("index");
    // res
    let {username , email,password, age}= req.body;
    bcrypt.genSalt(10,(err,salt)=>{
          bcrypt.hash(password, salt, async(err,hash)=>{

              let createdUser = await userModel.create({
                  username,
                  email,
                  password : hash,
                  age
              })
              let token = jwt.sign({email},"shshhhhhhhhhhhhhhhh");
              res.cookie("token",token);
              res.send(createdUser);
          })
    })

})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.post("/login", async(req,res)=>{
    //     email:: This is the key of the object that represents the field name in your MongoDB collection.
    // req.body.email: This is the dynamic value you want to match against the email field in the collection.
    const {email,password}=req.body
    if(!email || !password) res.send("Something went wrong");
    let user = await userModel.findOne({email : req.body.email}); 
     if(!user){
        res.send("SOMETHING WENT WRONG")
     }
     bcrypt.compare(req.body.password,user.password,(err,result)=>{
        if(result){
            res.send("LOGEED in ")
         let token = jwt.sign({email : user.email},"shshhhhhhhhhhhhhhhh");
        }
        else{
            res.send("SOMETHING IS WRONG")
        }
     })

})
app.get("/logout",(req,res)=>{
    res.clearCookie("token");
    res.redirect("/")
})
app.listen(3000);