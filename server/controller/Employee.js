const express = require('express');
const route = express.Router();
const auth = require('../../middleware/auth');
const query = require('../database/database');

route.get('/leave', auth ,async(req,res)=>{
    let sql = 'select Emp_ID,FirstName from Employee' ;

            try {
                const rows = await query(sql);
                console.log(rows);
                res.render('leave.ejs',{data:rows});
            } catch (err) {
                console.log(err);
            }
    
});
route.post('/leave', auth, async(req,res)=>{
    let leave = {
        Emp_ID: req.body.Emp_ID,
        leave_type: req.body.leave_type,
        leave_date: req.body.leave_date,
        Reason:req.body.Reason
    }
    console.log(leave.leave_type);
    console.log(req.body);
    
    let sql = `INSERT INTO Employee_Leave (Emp_ID,Leave_type,Date,Reason) VALUES ('${leave.Emp_ID}','${leave.leave_type}','${leave.leave_date}','${leave.Reason}')`;
    

            try {
                const rows = await query(sql);
                console.log(rows);
                res.redirect('/dashboard');
                
            } catch (err) {
                console.log(err);
            }
});
route.get('/Add_Employee',auth, (req,res)=>{

res.render('Add_Employee.ejs');
});

route.post('/Add_Employee',auth,async(req,res)=>{
    let Employee = {
        F_name: req.body.F_name,
        L_name: req.body.L_name,
        email: req.body.email,
        Salary:req.body.Salary
    }
    console.log(Employee);
            const sql = `INSERT INTO Employee (Email, LastName, FirstName, Salary) VALUES ('${Employee.email}','${Employee.L_name}','${Employee.F_name}','${Employee.Salary}')`;

            try {
                const rows = await query(sql);
            } catch (err) {
                console.log(err);
            }
        
    

   
    res.redirect('/Dashboard');
    console.log(req.body);
});

module.exports=route;