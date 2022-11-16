/* eslint-disable no-console */
const { Sequelize } = require('sequelize');

require('dotenv').config();

// using the data from the .env file to configure our database
const databaseName = process.env.DATABASE_NAME;

const username = process.env.DATABASE_USERNAME;

const password = process.env.DATABASE_PASSWORD;

const host = process.env.HOST;

// creating an instance of our sequelize connection
const sequelize = new Sequelize(databaseName, username, password, { host, dialect: 'postgres' });

// database connection using configuration in db.config.js
const databaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('successfully connected to database');
  } catch (error) {
    console.error('unable to connect to database');
  }
};

databaseConnection();

// export the instance of the connection
module.exports = { sequelize };
