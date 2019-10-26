const Sequelize = require('sequelize');
let sequelize = require('../db/db')

const User = sequelize.define('user', {
    // attributes
    email: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    name: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    pwd: {
        type: Sequelize.STRING(200),
        allowNull: true
    }
}, {
    // options
});

module.exports = User