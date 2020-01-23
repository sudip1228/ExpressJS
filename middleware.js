//middleware acts as middlemen between server and user.You can put your validation code on your middle ware and then forward it.
const express= require("express");//using expressJS
const  app=express();

var mw = require('./middlewarevalidation');


app.use('/static', express.static('public'));
app.listen(4000,()=> console.log("express is good"));

var validation= function(req,res,next){//using middleware
    console.log("middle ware wokring");
    next();
}

var uservalidation= function(req,res,next){//using middleware.
    if(req.params.username=="sudip")
    {
        console.log("user validate");
       next();//goes to next line of code if next() is called.
    }
    else
    {
        console.log("not authorized user")
    }
       
}

app.use(mw({ option1: '1', option2: '2' }));//This is the way to use middleware globally meaning it is called everytime the any url is hit in browserhere we are passing a object as a parameter in function.remember this is javascript
app.use(uservalidation);

//app.use(validation);//using middle ware. globally

app.get('/',validation,(req,res)=>{//first the validation function is called to check the validation.This is alternative way of using a middleware

    res.send("hello middleware");
})

app.get('/users/:username',(req,res)=>{
    res.send("hello users ");
})