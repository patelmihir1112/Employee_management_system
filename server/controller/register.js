const express = require('express');

const bcrypt = require('bcryptjs');
const salt = 10;
const route = express.Router();
const query = require('../database/database');


route.get('', (req, res) => {
    res.render('register.ejs');
});

route.post('', async (req, res) => {
    let user = {
        F_name: req.body.F_name,
        L_name: req.body.L_name,
        email: req.body.email,
    }


    const hashpassword = await bcrypt.hash(req.body.password, salt)

    console.log(hashpassword);
    const sql = `INSERT INTO Admin_Employee (Email, LastName, FirstName, Password) VALUES ('${user.email}','${user.L_name}','${user.F_name}','${hashpassword}')`;

    try {
        const rows = await query(sql);
    } catch (err) {
        console.log(err);
    }

    res.redirect('/login');
    console.log(req.body);
});
module.exports = route;