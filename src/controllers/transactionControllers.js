require('dotenv').config();

const Flutterwave = require('flutterwave-node-v3');

const { v4: uuidv4 } = require('uuid');

const { FLUTTERWAVE_PUBLIC_KEY: publicKey, FLUTTERWAVE_SECRET_KEY: secretKey } = process.env;

const flw = new Flutterwave(publicKey, secretKey);

const { ERROR, SUCCESS } = require('../assests/constants');

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
    console.log(error);
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
    console.log(error);
  }
};

module.exports = { transferAirtime, transferData };
