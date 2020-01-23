const express= require("express");//using expressJS
const  app=express();
//app.use(express.static('public'));//using static files indicates where the files are.our files are on public folder.
app.use('/static', express.static('public'))//here /static is a virtual folder which doesnot exist on reality.It is just to deceive hackers or unauthorize person.
app.get("/users",(req,res)=>{//creating a server using expressJS. /users is the name of url after localhost:4000

    res("hello express");
});

app.get("/",(req,res)=>{

    res.sendFile(__dirname +'/index.html');//using sendfile method
});

app.post("/users/profile",(req,res)=>{

    res.send("using post req");
});

app.listen(4000,()=> console.log("express is good"));
