/* eslint-disable no-console */
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const flw = require('../utils/flw_sdk'); // import flutter wave sdk
const { ERROR, CREATED } = require('../assests/constants');

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
