const Sequelize = require('sequelize');
let sequelize = require('../db/db')

const Movie = sequelize.define('movie', {
    // attributes
    title: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    image: {
        type: Sequelize.STRING(100)
    },
    synopsis: {
        type: Sequelize.STRING(500)
    },
    rating: {
        type: Sequelize.FLOAT(4, 2)
    },
    type: {
        type: Sequelize.STRING(10)
    },
    released: {
        type: Sequelize.STRING(4)
    },
    runtime: {
    type: Sequelize.STRING(5)
}
}, {
    // options
});

module.exports = Movie