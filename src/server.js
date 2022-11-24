/* eslint-disable no-console */
const express = require('express');

// routes
const walletRouter = require('./routes/walletRoutes');
const accountRouter = require('./routes/accountRoutes');
const bvnRouter = require('./routes/bvnRoutes');

const airtimeRouter = require('./routes/airtimeRoutes');

const app = express();

// middleware for parsing json from client side
app.use(express.json());

// middleware for routing
app.use('/api/v1/wallet', walletRouter);
app.use('/api/v1/account', accountRouter);
app.use('/api/v1/airtime', airtimeRouter);
app.use('/api/v1/bvn', bvnRouter);

module.exports = app;
