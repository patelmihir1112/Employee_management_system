const express = require('express');
const route = express.Router();
const query = require('../database/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

route.get('',(req,res)=>{

    res.render('login.ejs');
    // res.send('dkdjbc');
});
route.post('',async(req,res)=>{
    const user_input = { Email : req.body.U_name ,
        Password :req.body.Password
    }
    
    const sql = `select * from Admin_Employee where Email = '${user_input.Email}'`;

    try{
        const user = await query(sql);
        if(user.length!==0){
            console.log(user[0].Password);
            const pass =  user_input.Password;
    
            const match = await bcrypt.compare(pass, user[0].Password);
            console.log('jbvbf',match);
           if(match){
            console.log(user);
            const a = jwt.sign(user[0].Email,"mihirmihir");
            console.log(a);
            res.cookie("jwt",a,{
                maxAge:600000,
                // expire : new Date() + 9999,
                httpOnly:true
            });
            res.redirect('/Dashboard');
    
           }else{
               res.redirect('/login')
           }
        }else{
         
            res.render('login.ejs');
        }
       
           
   
    }catch(err){
        console.log(err);
    }
  
    
});


module.exports=route;