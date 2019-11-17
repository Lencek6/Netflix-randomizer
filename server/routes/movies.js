var express = require('express')
var router = express.Router()
let models = require('../models/index')
let validateJwt = require('../middleware/validateJWT')



router.post('/',validateJwt.checkToken, function(req, res, next) {
  models.user.findAll({
    where: {id: req.decoded.id},
      include: [
    {model: models.movie}
  ],
    attributes: ['id','email']
    }).then(movies => {
    res.send(movies)
  });
});

module.exports = router;
