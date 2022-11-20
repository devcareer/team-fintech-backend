/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars
const { Sequelize } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

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
          password: '9099',
          phoneNumber: '0909',
          is_verified: 'verified',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          firstName: 'Mary',
          lastName: 'Ernest',
          email: 'nn@gmail.com',
          password: '0909',
          phoneNumber: '90889876',
          is_verified: 'verified',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          firstName: 'Emmanuel',
          lastName: 'Ade',
          email: 'eni@gmail.com',
          phoneNumber: '09090909090',
          password: '90u98ihd',
          is_verified: 'verified',
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
