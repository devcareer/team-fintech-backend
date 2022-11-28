require('dotenv').config();
// import flutterwave sdk
const flw = require('../utils/flw_sdk');
const { SUCCESS, ERROR } = require('../assests/constants');

const verifyAccountDetails = async (req, res, next) => {
  try {
    const { accountNumber, bankCode } = req.body;

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
  verifyAccountDetails,
};
