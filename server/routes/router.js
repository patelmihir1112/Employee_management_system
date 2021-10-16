const express = require('express');
const route = express.Router();


route.use('/Login',require('../controller/login'));
route.use('/Register',require('../controller/register'));
route.use('/Dashboard',require('../controller/dashboard'));
route.use('/Logout',require('../controller/logout'));
route.use('/Employee',require('../controller/Employee'));

module.exports=route;