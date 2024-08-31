const express= require('express');
const app = express();
const userModel = require("./usermodel");

app.get("/",(req,res)=>{
    res.send("nigga");
})

app.get("/create",async(req,res)=>{
       let createduser= await userModel.create({
        user : "vanshika",
        username : "vanshika_1234",
        email : "vanshikajaurat@gmail.com"
    })
    res.send(createduser);
})

app.get("/update",async(req,res)=>{
let udpdatedUser = await userModel.findOneAndUpdate({username : "skphenomenol"}, {name : "Sudhanshu"},{new : true})
res.send(udpdatedUser);
})

app.get("/read",async(req,res)=>{
    let users=await userModel.find(); // find returns array and empty array when none is found
    // let users=await userModel.findOne({username : "vanshika_1234"}); findOne gives object and nothing when no matches found
    res.send(users); 
    })

    app.get("/delete",async(req,res)=>{
        let User = await userModel.findOneAndDelete({username : "vanshika_1234"})
        res.send(User);
        })


app.listen(3000);