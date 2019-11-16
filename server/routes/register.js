let express = require('express');
let router = express.Router();
let models = require('../models/index');
let passwordHash = require('password-hash');


router.post('/', function(req, res, next) {
    let hashedPwd = passwordHash.generate(req.body.pwd);
    models.user.findOrCreate({where: {email: req.body.email}, defaults: {name: req.body.name, pwd:hashedPwd}})
        .then(([user, created]) => {
            // Optionally you can manipulate with this instance of user
            // If user is created, then created = true, else created = false
            if(created === true){
                res.send({message: 'New user ' + req.body.email + ' created!', isCreated: true})
            }
            else{
                res.send({message: 'Email already exists!', isCreated: false})
            }
        })
});

module.exports = router;
