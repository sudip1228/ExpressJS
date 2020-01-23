//using pug.  pug is engine like html but code is shorter than html and it is popular.

const express= require("express");//using expressJS
const  app=express();
app.use('/static', express.static('public'));

app.set('view engine','pug');//if you use ejs app.set('view engine', 'ejs)//if twig app.set('view engine', 'twig')
app.set('views','./public/views');//giving path

app.get('/',(req,res)=>{//creating server

res.render('index',{title:'tutorialWebsites', message: 'hello'});//here index means index.pug inside views folder.render method is used here for pug
});//the second parameter of render method should be json format.

app.listen(2000,()=> console.log("express is good"));
