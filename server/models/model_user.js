const Sequelize = require('sequelize');
let sequelize = require('../db/db')

const User = sequelize.define('user', {
    // attributes
    email: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    pwd: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
}, {
    // options
});

module.exports = User