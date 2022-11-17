/* eslint-disable no-console */
// TODO controllers
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const Flutterwave = require('flutterwave-node-v3');

const publicKey = process.env.FLUTTERWAVE_PUBLIC_KEY;

const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;

// creating a flutter wave instance
const flw = new Flutterwave(publicKey, secretKey);

// create wallet for users
const createWallet = async (req, res) => {
  try {
    // a transaction reference is randomly created for each wallet created
    const transactionRef = uuidv4();
    const userEmail = req.body.email;
    const userBvn = req.body.bvn;
    // payload is what is coming from the user
    const payload = { email: userEmail, is_permanent: true, bvn: userBvn, tx_ref: transactionRef };
    const response = await flw.VirtualAcct.create(payload);
    res.status(201).json({ data: response });
  } catch (error) {
    res.status('status').json({ error });
  }
};

module.exports = { flw, createWallet };
