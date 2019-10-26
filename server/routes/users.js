var express = require('express');
var router = express.Router();
let models = require('../models/index')


/* GET users listing. */
router.get('/', function(req, res, next) {
  //models.movie.create({
    //id: 2,
    //title: 'Chair',
    //user: [  // avtomatsko doda še zapis v user tabelo :) avtomatsko generira tudi zapis v vmesno tabelo user_movie
      //{name: 'rok'}
    //]
  //}, {
    //include: [ models.user ]
  //})
  models.user.findAll().then(users => {
    let tmp = "All users:" +  JSON.stringify(users, null, 4)
    res.send(tmp)
  });

});

module.exports = router;
