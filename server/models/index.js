let user = require('./model_user')
let movie = require('./model_movie')
let user_movie = require('./user_movies')
let sequelize = require('../db/db')

// Associations between tables
user.belongsToMany(movie, {
    through: {
        model: user_movie
    },
    foreignKey: 'user_id'
});

movie.belongsToMany(user, {
    through: {
        model: user_movie
    },
    foreignKey: 'movie_id'
});

// Synchronize tables and associations, uncomment on changes
//sequelize.sync()

module.exports = {
    user,
    movie,
    user_movie
}