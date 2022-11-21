// eslint-disable-next-line no-unused-vars
const { Sequelize, QueryInterface } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { DEBIT, CREDIT, SUCCESS, TRANSFER, DEPOSIT, WITHDRAWAL } = require('../../src/assests/constants');

// this function adds dummy data to the transactions database
module.exports = {
  // eslint-disable-next-line no-shadow, no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('transactions', [
      {
        id: uuidv4(),
        txn_type: DEBIT,
        purpose: TRANSFER,
        amount: 2000,
        wallet_id: await queryInterface.rawSelect(
          'wallets',
          {
            where: {
              balance: 10000,
            },
          },
          ['id']
        ),
        reference: uuidv4(),
        balance_before: 10000,
        balance_after: 8000,
        status: SUCCESS,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        txn_type: DEBIT,
        purpose: WITHDRAWAL,
        amount: 2000,
        wallet_id: await queryInterface.rawSelect(
          'wallets',
          {
            where: {
              balance: 40000,
            },
          },
          ['id']
        ),
        reference: uuidv4(),
        balance_before: 40000,
        balance_after: 38000,
        status: SUCCESS,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        txn_type: CREDIT,
        purpose: DEPOSIT,
        amount: 2000,
        wallet_id: await queryInterface.rawSelect(
          'wallets',
          {
            where: {
              balance: 20000,
            },
          },
          ['id']
        ),
        reference: uuidv4(),
        balance_before: 20000,
        balance_after: 22000,
        status: SUCCESS,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  // eslint-disable-next-line no-shadow, no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('transactions', null, {});
  },
};
