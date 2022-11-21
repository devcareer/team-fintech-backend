/* eslint-disable no-console */
const express = require('express');
const authRoute = require('./routes/route');

// eslint-disable-next-line no-unused-vars
const { sequelize } = require('../database/db.config');

const app = express();

require('dotenv').config();

// using specified routes
app.use(authRoute);

const port = process.env.PORT || 8080;

// To check that node server is running successfully
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
