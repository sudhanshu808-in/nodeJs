const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/posts');
const posts = require('./models/posts');

app.get("/",(req,res)=>{
    res.send("working");
})

app.get("/create",async(req,res)=>{
    let user = await userModel.create({
        username : "shubham",
        email : "shubham@gamil.com",
        age : 21
    })
    res.send(user);
})


app.get("/post/create", async(req,res)=>{
    let post = await postModel.create({
        postdata : "This is the final version ",
         user :  "66e2866c4e14129ec42c18e1",

       })

       let user = await userModel.findOne({_id : "66e2866c4e14129ec42c18e1"});
       user.posts.push(post._id);
       await user.save();
       res.send({posts,user});
})
app.listen(3000)