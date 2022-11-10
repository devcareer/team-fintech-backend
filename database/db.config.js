// TODO postgres connection config file
const { Sequelize } = require('sequelize');

require('dotenv').config();

// using the data from the .env file to configure our database
const databaseName = process.env.DATABASE_NAME;

const username = process.env.DATABASE_USERNAME;

const password = process.env.DATABASE_PASSWORD;

const host = process.env.HOST;

// creating an instance of our sequelize connection
const sequelize = new Sequelize(databaseName, username, password, { host, dialect: 'postgres' });

module.exports = { sequelize };
