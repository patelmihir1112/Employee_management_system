const express = require('express');
const route = express.Router();
const auth = require('../../middleware/auth');
const query = require('../database/database')


route.get('',auth, async (req,res)=>{
    const sql = 'select e.Emp_ID,e.salary,e.FirstName,e.LastName ,e.Email,l.total_leave from Employee as e LEFT join (select Emp_ID, sum(leave_type) as total_leave from Employee_Leave GROUP BY Emp_ID ) as l on e.Emp_ID = l.Emp_ID;' ;

    try {
        const rows = await query(sql);
        
            console.log(rows);
             const maulik = rows.map((item,index)=>{
                let cal_salary = Math.trunc (item.salary - item.total_leave*item.salary/30);
              if(!item.total_leave){
                item.total_leave = 0;
              }
                item.cal_salary = cal_salary;

                return item;
            
            });
            console.log('mauliksajhavdljh',maulik);
        
        res.render('dashboard.ejs',{data:rows})
    } catch (err) {
        console.log(err);
    }
;
});

module.exports=route;