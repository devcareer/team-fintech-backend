/* eslint-disable no-console */
const express = require('express');

const walletRouter = require('./routes/walletRoutes');
const transactionRouter = require('./routes/transactionRoutes');

const app = express();

// middleware for parsing json from client side
app.use(express.json());

// middleware for routing
app.use('/api/v1/wallet', walletRouter);
app.use('/api/v1/transfers', transactionRouter);

module.exports = app;
