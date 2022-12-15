require('dotenv').config();

const flw = require('../utils/flw_sdk');

const { SUCCESS, ERROR } = require('../assests/constants');

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

const webHookHandler = async (req, res, next) => {
  try {
    const payload = req.body;

    // placeholder for business logic to be performed by webhook
    // for now we log the request.
    // eslint-disable-next-line no-console
    console.log('webhook payload', payload);
  } catch (error) {
    next(error);
  }
};

module.exports = { getBvnDetails, webHookHandler };
