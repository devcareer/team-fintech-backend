/* eslint-disable no-console */
const express = require('express');

// eslint-disable-next-line no-unused-vars
const { sequelize } = require('../database/db.config');

const { router } = require('./routes/route');

const app = express();

require('dotenv').config();

// middleware for parsing json from client side
app.use(express.json());
// middleware for routing
app.use('/api/v1', router);

const port = process.env.PORT || 8080;

// To check that node server is running successfully
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
