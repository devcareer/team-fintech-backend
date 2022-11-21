/* eslint-disable no-console */
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const Flutterwave = require('flutterwave-node-v3');
const { ERROR, CREATED } = require('../assests/constants');

// eslint-disable-next-line import/no-unresolved

const { FLUTTERWAVE_PUBLIC_KEY: publicKey, FLUTTERWAVE_SECRET_KEY: secretKey } = process.env;

// creating a flutter wave instance
const flw = new Flutterwave(publicKey, secretKey);

// create wallet for users
const createWallet = async (req, res, next) => {
  try {
    // a transaction reference is randomly created for each wallet created
    const transactionRef = uuidv4();

    const userEmail = req.body.email;

    const userBvn = req.body.bvn;

    // payload is what is coming from the user
    const payload = { email: userEmail, is_permanent: true, bvn: userBvn, tx_ref: transactionRef };

    const response = await flw.VirtualAcct.create(payload);

    // return error for error response
    if (response.status === 'error') {
      res.status(ERROR).json(response);
    } else {
      res.status(CREATED).json(response);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWallet,
};
