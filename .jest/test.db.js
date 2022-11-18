const { Sequelize } = require('sequelize');
const { test } = require('../database/database');

// creating an instance of our database connection for the test environment
const db = new Sequelize(test);

module.exports = db;