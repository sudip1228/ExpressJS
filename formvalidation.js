

const express= require("express");
const bodyParser = require('body-parser')//using body-parser for post method.this is mandatory
const { check, validationResult } = require('express-validator');//using form validation.mandatory.here check and validationresult is a function.
const { matchedData,sanitizeBody } = require('express-validator');//using sanitization 

const  app=express();
app.use('/static', express.static('public'));
app.set('view engine','twig');
app.set('views','./public/views');

var jsonParser= app.use(bodyParser.json())//for post method
var urlencodedParser=bodyParser.urlencoded({extended:false});//for post method


app.get('/',(req,res)=>{
res.render('index',{title:'loginform', message: 'enter name and password'});
});


app.post('/login',urlencodedParser,function (req,res){//using post method
    res.send('welcome'+req.body.username);
    });


app.post('/',urlencodedParser,[check('username','user name should be emailID').trim().isEmail(),//here urlencoderdparser is a middleware
check('password','password must be 5 character').trim().isLength({min:5}),
check('confirmpassword').custom((value,{req})=>{

    if(value!=req.body.password)//checks whether confirmpassword match password or not.here "value" contains the password.
    {
        throw new Error(' confirmation password does not match password');
    }
    return true;
})


],
(req,res)=>{//using post method
    const errors = validationResult(req);//validationresult function used for showing error
    console.log(errors.mapped());//shows multiple error if validation is not required
    //console.log(req.body);
    if(!errors.isEmpty()){
        const user= matchedData(req);
        res.render('index',{title:"userdetails",error:errors.mapped(),user:user});//"user" reads input from username,password and confirmpassword.so "user" includes  username,password and confirmpassword input
    }
       else{
           const user= matchedData(req);
           console.log(user);
        res.render('login',{title:"userdetails",user:user});
       } 
 });


app.listen(2000,()=> console.log("express is good"));

