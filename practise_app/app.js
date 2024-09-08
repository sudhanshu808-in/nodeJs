const { urlencoded } = require('body-parser');
const { log } = require('console');
const express = require('express');
const app = express();
const path= require('path');
const userModel = require('./models/user');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    res.render('index');
})
app.get('/read',async(req,res)=>{
    let allusers = await userModel.find();
    res.render("read",{users : allusers});      
      
})
app.get('/edit/:user_id',async(req,res)=>{
    let user = await userModel.findOne({_id:req.params.user_id});
    res.render("edit",{user}); 
})

app.get('/delete/:id',async(req,res)=>{
    let users = await userModel.findOneAndDelete({_id :req.params.id});
    // res.render("read",{users : allusers});
    res.redirect('/read');
      
})
app.post('/update/:userid',async(req,res)=>{
    let  { image, name , email} =  req.body;
    let user = await userModel.findOneAndUpdate({_id:req.params.userid},{image , name , email} ,{new : true});
    res.redirect("/");
})
app.post('/create',async(req,res)=>{
    let { image , name , email }= req.body;
    let createdUser = await userModel.create({
        // if anywhere we find that the data is  like name : name then we can  just do the name only
        image,
        name,
        email
    })
    res.redirect('/read');
})



app.listen(3000);
