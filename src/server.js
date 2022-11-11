/* eslint-disable no-console */
// TODO setup server
const express = require('express');

// eslint-disable-next-line no-unused-vars
const { databaseConnection } = require('../database/db.config');

const app = express();

require('dotenv').config();

const port = process.env.PORT || 8080;

// To check that node server is running successfully
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
