require('dotenv').config();

const Flutterwave = require('flutterwave-node-v3');

const { FLUTTERWAVE_PUBLIC_KEY: publicKey, FLUTTERWAVE_SECRET_KEY: secretKey } = process.env;

const flw = new Flutterwave(publicKey, secretKey);

module.exports = flw;
