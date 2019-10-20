var express = require('express');
var router = express.Router();
let models = require('../models/index')


/* GET users listing. */
router.get('/', function(req, res, next) {
  models.movie.findAll().then(movies => {
    let tmp = "All users:" +  JSON.stringify(movies, null, 4)
    res.send(tmp);
  });
});

module.exports = router;
