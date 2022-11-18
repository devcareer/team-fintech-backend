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

module.exports = app;
