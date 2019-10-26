const Sequelize = require('sequelize');
let sequelize = require('../db/db')

const Movie = sequelize.define('movie', {
    // attributes
    title: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    image: {
        type: Sequelize.STRING(300),
        allowNull: true
    },
    synopsis: {
        type: Sequelize.STRING(500),
        allowNull: true
    },
    rating: {
        type: Sequelize.FLOAT(4, 2),
        allowNull: true
    },
    type: {
        type: Sequelize.STRING(10),
        allowNull: true
    },
    released: {
        type: Sequelize.STRING(4),
        allowNull: true
    },
    runtime: {
    type: Sequelize.STRING(5),
        allowNull: true
}
}, {
    // options
});

module.exports = Movie