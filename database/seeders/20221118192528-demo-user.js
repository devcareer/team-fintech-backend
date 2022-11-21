/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars
const { Sequelize } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const { VERIFIED, UNVERIFIED } = require('../../src/assests/constants');

const saltRounds = 10;

// This function creates dummy data for the user table
module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: uuidv4(),
          firstName: 'John',
          lastName: 'Bassey',
          email: 'JB@gmail.com',
          password: await bcrypt.hash('9099', saltRounds),
          phoneNumber: '09088765432',
          is_verified: VERIFIED,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          firstName: 'Mary',
          lastName: 'Ernest',
          email: 'nn@gmail.com',
          password: await bcrypt.hash('0909', saltRounds),
          phoneNumber: '08033456789',
          is_verified: VERIFIED,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          firstName: 'Emmanuel',
          lastName: 'Ade',
          email: 'eni@gmail.com',
          phoneNumber: '08033134557',
          password: await bcrypt.hash('90u98ihd', saltRounds),
          is_verified: UNVERIFIED,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      { returning: true }
    );
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
