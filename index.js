const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const connect_DB =require('./server/database/database');
const cookieParser = require('cookie-parser');


app.use(cookieParser());

const port =  3000;


app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.set('view engine', 'ejs');
const route = require('./server/routes/router');

app.use('/',route);

app.get('',(req,res)=>{
res.render('Home.ejs');
});

app.listen(port,()=>{
    console.log(port);
});
