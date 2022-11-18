/* eslint-disable no-console */
const { Sequelize } = require('sequelize');
const { development } = require('./database');

// new database connection using sequelize client
const sequelize = new Sequelize(development);

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
