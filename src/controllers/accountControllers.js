require('dotenv').config();
const Flutterwave = require('flutterwave-node-v3');
const { SUCCESS, ERROR } = require('../assests/constants');

// get kwys for flutterwave api
const { FLUTTERWAVE_PUBLIC_KEY: publicKey, FLUTTERWAVE_SECRET_KEY: secretKey } = process.env;

// creating a flutter wave instance
const flw = new Flutterwave(publicKey, secretKey);

const getAccountDetails = async (req, res, next) => {
  try {
    const { accountNumber, bankCode } = req.query;

    const payload = {
      account_number: accountNumber,
      account_bank: bankCode,
    };

    const response = await flw.Misc.verify_Account(payload);

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
  getAccountDetails,
};
