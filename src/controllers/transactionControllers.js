require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const Flutterwave = require('flutterwave-node-v3');
const { SUCCESS, ERROR } = require('../assests/constants');

// get kwys for flutterwave api
const { FLUTTERWAVE_PUBLIC_KEY: publicKey, FLUTTERWAVE_SECRET_KEY: secretKey } = process.env;

// creating a flutter wave instance
const flw = new Flutterwave(publicKey, secretKey);

const transferFunds = async (req, res, next) => {
  try {
    const { accountName, accountNumber, amount, narration, currency, beneficiaryName } = req.body;

    // create transfer details for flutterwave
    const payload = {
      account_bank: accountName,
      account_number: accountNumber,
      amount,
      narration,
      currency,
      reference: uuidv4(),
      beneficiary_name: beneficiaryName,
    };

    const response = await flw.Transfer.initiate(payload);

    // TODO save transaction to database

    // if reponse returns error
    if (response.status === 'error') {
      res.status(ERROR).json(response);
    } else {
      res.status(SUCCESS).json(response);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  transferFunds,
};
