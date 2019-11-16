var express = require('express')
var router = express.Router()
let models = require('../models/index')
let passwordHash = require('password-hash');


router.post('/', function(req, res, next) {
  models.user.findOne({ where: {email: req.body.email}, attributes: ['pwd'] }).then(user => {
    // If: there is no user, send response with error status
    if(user === null){
        res.status(404).send()
    }
    // else: there is user
    else{
        // Check if pwd is correct -> return JWT
        if(passwordHash.verify(req.body.pwd, user.dataValues.pwd)){
            res.send('pwd correct')
            // TODO JWT
        }
        // else: return error
        else{
            res.status(404).send()
        }
    }
  })
  //res.send(req.body)
});

module.exports = router;