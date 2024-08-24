const express= require('express');
const app = express()


app.use(function(req,res,next){
    console.log("middleware 111");
    next();  //to send  it to next place for the request
});


app.get('/',function(req,res){
    res.send('SK Phenomenols');
})

app.get('/profiles',function(req,res,next){
    // res.send('SK Phenomenols');
    return next(new Error('Something went wrong'))
})

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).send('Something broke !'); // ye error jayga fornt end p kyuki response h 
})

app.listen(3000)