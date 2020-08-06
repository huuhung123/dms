const mongoose = require("mongoose");
const User = require("../models/user.model")


module.exports.postLogin = (req, res) => {
    const checkedAdmin = {
        username: req.body.user,
        password: req.body.password
    }
    if(arrOfCheckedAdmin.indexOf(checkedAdmin) !== -1) {
        res.redirect("/admin")
    }
    else {
        res.json({errCheckedAdmin: true})
    }
}