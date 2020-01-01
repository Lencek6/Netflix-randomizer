let express = require('express');
let router = express.Router();
let models = require('../models/index');
let validateJwt = require('../middleware/validateJWT');
const Op = require('Sequelize').Op;

// Get current user movies for history list
router.post('/history', validateJwt.checkToken, function (req, res, next) {
    models.user.findAll({
        where: {id: req.decoded.id},
        include: [
            {model: models.movie}
        ],
        attributes: ['id', 'email']
    }).then(movies => {
        res.send(movies)
    });
});

// Add or delete user movie. Based on action send in req body
router.post('/addremove', validateJwt.checkToken, function (req, res, next) {
    // Add movie to the personal database if it not exists
    models.movie.findOrCreate({
        where: {[Op.and]: [{title: req.body.title, released: req.body.year}]},
        defaults: {
            title: req.body.title,
            image: req.body.image,
            synopsis: req.body.synopsis,
            rating: req.body.rating,
            type: req.body.type,
            released: req.body.year,
            runtime: ''
        }
    }).then(([movie, created]) => {
        // If action is equal to 'Add' then try to add user - movie relation. Else (action is equal to 'Delete') remove relation
        if (req.body.action === 'Add') {
            // Add relation if possible
            movie.addUser(req.decoded.id).then(result => {
                // If result is undefined movie relation already exists
                if (result === undefined) {
                    res.json({
                        type: 'error',
                        title: 'Ooops',
                        message: 'Movie already on history list'
                    })
                } else {
                    res.json({
                        type: 'success',
                        title: 'Successfully added',
                        message: 'Movie added on history list'
                    })
                }
            });
        } else {
            // Delete relation
            movie.removeUser(req.decoded.id);
            res.json({
                type: 'success',
                title: 'Successful deletion',
                message: 'Movie deleted from the History list'
            })
        }
        // In case of DB error, return message to front-end
    }).catch(error => {
        res.json({
            type: 'error',
            title: 'server side error',
            message: 'Database error'
        })
    })
});

module.exports = router;
