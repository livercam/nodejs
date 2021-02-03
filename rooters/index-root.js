const express = require("express");
const faker = require("faker");
const rooter = express.Router();


rooter.get("/", (req, res)=>{
    res.render("pages/home",{
        saudacao:"Hello World Again"
    })
})

rooter.get("/about",(req, res)=>{

    var users = [{
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/300/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/400/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/500/300'
    }]

    res.render('pages/about', {
        usuarios: users
    })
})
module.exports = rooter;