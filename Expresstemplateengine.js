const express= require("express");//using expressJS
const  app=express();
app.get("/users",(req,respondok)=>{//creating a server using expressJS. /users is the name of url after localhost:4000

    respondok.send("hello express");
});

app.listen(4000,()=> console.log("express is good"));//creating a server port
