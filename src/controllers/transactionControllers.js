require('dotenv').config();

const { v4: uuidv4 } = require('uuid');

const { ERROR, SUCCESS } = require('../assests/constants');

const flw = require('../utils/flw_sdk');

const transferAirtime = async (req, res, next) => {
  const { country, customer, amount, recurrence } = req.body;

  const reference = uuidv4();
  try {
    const payload = {
      country,
      customer,
      amount,
      recurrence,

      type: 'AIRTIME',

      reference,
    };
    const response = await flw.Bills.create_bill(payload);

    if (response.status === 'error') {
      res.status(ERROR).json(response);
    } else {
      res.status(SUCCESS).json(response);
    }
  } catch (error) {
    next(error);
  }
};

const transferData = async (req, res, next) => {
  try {
    const reference = uuidv4();
    const { country, customer, amount, type, recurrence } = req.body;
    const payload = {
      country,
      customer,
      amount,
      type,
      reference,
      recurrence,
    };

    const response = await flw.Bills.create_bill(payload);

    if (response.status === 'error') {
      res.status(ERROR).json(response);
    } else {
      res.status(SUCCESS).json(response);
    }
  } catch (error) {
    next(error);
  }
};

const transferFunds = async (req, res, next) => {
  try {
    const { bankCode, accountNumber, amount, narration, beneficiaryName } = req.body;

    // create transfer details for flutterwave
    const payload = {
      account_bank: bankCode,
      account_number: accountNumber,
      amount,
      narration,
      currency: 'NGN',
      debit_currency: 'NGN',
      reference: uuidv4(),
      beneficiary_name: beneficiaryName,
    };

    const response = await flw.Transfer.initiate(payload);

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

module.exports = { transferAirtime, transferData, transferFunds };
