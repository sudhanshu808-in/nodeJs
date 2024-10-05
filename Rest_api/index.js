const express = require('express');
const app= express();
const users = require("./MOCK_DATA.json");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
 console.log(" middleware initiated");
// return res.json({ msg: "done with this part" });
next();
})

app.get("/",(req,res)=>{
    res.send("home page");
})

app.get("/api/users",(req,res)=>{
    res.send(users);
})

app.get("/users",(req,res)=>{
    const html = `
    <ul>
    ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);

    
});

app.get("/users/:id",(req,res)=>{
    const data = Number( req.params.id);
    const user = users.find(user=>user.id ===data);
    if(!user){
        res.status(404).send("user not found");
    }
    res.send(user);
})

app.post("/users/name/:user",(req,res)=>{
   res.send("pending.......");
    
})

app.patch("/users/name/:user",(req,res)=>{
    res.send("pending.......");
     
 })

 
app.delete("/users/name/:user",(req,res)=>{
    res.send("pending.......");
     
 })

// app.route("/api/user/:id").get((req,res)=>{
//     const data = Number( req.params.id);
//     const user = users.find(user=>user.id ===data);
//     if(!user){
//         res.status(404).send("user not found");
//     }
//     res.send(user);
// }).post((req,res)=>{
//     res.send("pending.......");
     
//  }).delete()


app.listen(3000);