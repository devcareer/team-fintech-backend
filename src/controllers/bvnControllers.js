require('dotenv').config();

const Flutterwave = require('flutterwave-node-v3');

const { SUCCESS, ERROR } = require('../assests/constants');

const { FLUTTERWAVE_PUBLIC_KEY: publicKey, FLUTTERWAVE_SECRET_KEY: secretKey } = process.env;

const flw = new Flutterwave(publicKey, secretKey);

// function for getting a user's bvn details
const getBvnDetails = async (req, res, next) => {
  try {
    const { userBvn } = req.body;

    const payload = {
      bvn: userBvn,
    };

    const response = await flw.Misc.bvn(payload);

    if (response.status === 'error') {
      res.status(ERROR).json(response);
    } else {
      res.status(SUCCESS).json(response);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getBvnDetails };
