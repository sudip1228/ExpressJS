

const express= require("express");
const  app=express();
app.use('/static', express.static('public'));

const bodyParser = require('body-parser')//using body-parser for post method.this is mandatory

app.set('view engine','twig');
app.set('views','./public/views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))//using body-parser for post method.this is mandatory

// parse application/json
app.use(bodyParser.json())//using body-parser for post method.this is manddatory

app.get('/',(req,res)=>{

res.render('index',{title:'loginform', message: 'enter name and password'});
});

app.post('/',(req,res)=>{//using post method


    res.render('login',{title:"userdetails", username:req.body.username, password: req.body.password});
    });



app.get('/about/:a-:b',(req,res)=>{

res.render('about',{title:'about', sum:parseInt(req.params.a)+parseInt(req.params.b),
substract:parseInt(req.params.a)-parseInt(req.params.b),

multiply:parseInt(req.params.a)*parseInt(req.params.b)});//parse change string to integer
    });

app.listen(2000,()=> console.log("express is good"));

