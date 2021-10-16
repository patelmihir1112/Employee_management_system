
const express = require('express');
const route = express.Router();
const auth = require('../../middleware/auth');


route.get('', auth, async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.redirect('/');
    } catch {

    }
    res.render();
});

module.exports = route;