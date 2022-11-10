/* eslint-disable no-console */
// TODO setup server
const express = require('express');

const { sequelize } = require('../database/db.config');

const app = express();

require('dotenv').config();

const port = process.env.PORT;

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

// To check that node server is running successfully
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
