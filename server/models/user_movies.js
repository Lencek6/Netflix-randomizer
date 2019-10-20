const Sequelize = require('sequelize');
let sequelize = require('../db/db')

const User_movie = sequelize.define('user_movie', {
    // attributes
    user_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    movie_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }
}, {
    // options
});

module.exports = User_movie