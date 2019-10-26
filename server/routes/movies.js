var express = require('express')
var router = express.Router()
let models = require('../models/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.user)
  models.user.findAll({
    where: {id: 1},
      include: [
    {model: models.movie}
  ]
    }).then(movies => {
    res.send(movies)
  });
});

module.exports = router;
