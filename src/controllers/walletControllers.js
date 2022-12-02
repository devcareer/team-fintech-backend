/* eslint-disable no-console */
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const flw = require('../utils/flw_sdk'); // import flutter wave sdk
const { ERROR, CREATED, FUNDING_FAILED, FUNDING_SUCCESS } = require('../assests/constants');

// create wallet for users
async function createWallet(req, res, next) {
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
}

// Fund Users wallet
const fundWallet = async (req, res, next) => {
  try {
    // Get amount user wants to fund wallet with and the transaction description from the user
    const { accountBank, accountNumber, fundNarration, amountFund } = req.body;
    const fundCurrency = 'NGN';
    const fundReference = `transfer-${Date.now()}`;
    const callbackUrl = 'https://webhook.site/74e008b8-e302-406c-84bd-dd19d400d8cf'; // Page to redirect users to after funding their wallet
    const debitCurrency = 'NGN';
    // Payload for creating the users Bank account
    const payload = {
      account_bank: accountBank,
      account_number: accountNumber,
      amount: amountFund,
      narration: fundNarration,
      currency: fundCurrency,
      reference: fundReference, // This is a merchant's unique reference for the transfer, it can be used to query for the status of the transfer
      callback_url: callbackUrl,
      debit_currency: debitCurrency,
    };
    const response = await flw.Transfer.initiate(payload);
    // return error for error response
    if (response.status === 'error') {
      res.status(500).json({
        message: FUNDING_FAILED,
      });
    } else {
      res.status(200).json({
        message: FUNDING_SUCCESS,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWallet,
  fundWallet,
};
