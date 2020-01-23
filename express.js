//expressJS is a framework built on top of nodejs to reduce nodejs code
const express= require("express");//using expressJS
const  app=express();
app.get("/users",(req,respondok)=>{//creating a server using expressJS. /users is the name of url after localhost:4000

    respondok.send("hello express");
});

app.get("/",(req,respondok)=>{//creating a server using expressJS. /users is the name of url after localhost:4000

    respondok.send("hello express, node js");
});

app.post("/users/profile",(req,respondok)=>{//use postman for this coz brower wont work for post method.

    respondok.send("using post req");
});

app.listen(4000,()=> console.log("express is good"));//creating a server port
