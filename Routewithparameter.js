const express= require("express");//using expressJS
const  app=express();
app.use('/static', express.static('public'))//here /static is a virtual folder which doesnot exist on reality.It is just to deceive hackers or unauthorize person.
app.get("/users/:id?/",(req,res)=>{//creating a server using expressJS. /users is the name of url after localhost:4000

    if((req.params.id)==undefined)
    {
        res.send("undefined id");
    }
    else
    res.send("hello express "+"id= "+req.params.id);//(req.params.id) it reads id paramater from url.
});

app.get("/",(req,res)=>{

    res.sendFile(__dirname +'/index.html');//using sendfile method for static file
});

app.post("/users/profile",(req,res)=>{

    res.send("using post req");
});

app.listen(4000,()=> console.log("express is good"));

app.get("/flights/:sudip?.:su?/",(req,res)=>{//using "-" and "." in url. you can use "- " or "." in this code.both work same.But if you want to use optional you have to use "."


    res.send("search for Flights "+ "From "+ req.params.sudip+" to "+req.params.su);//using From and To in url
    
});

app.get("/ab?cd",(req,res)=>{//here "b" is optional

    res.send("hello abcd");
});

app.get("/ab+cd",(req,res)=>{//here "b" can be added multiple times in url

    res.send("hello abcd");
});
app.get("/ab*cdefg",(req,res)=>{//here you can add anything between "ab" and "cdefg" // /ab(*)cdefg .this is also similar to this code.


    res.send("hello abcd"+  req.params[0]);
});

app.get(/.*fly$/,(req,res)=>{//last word of url must be "fly"


    res.send("hello abcd ");
});
