// eslint-disable-next-line no-unused-vars
const { Sequelize } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

// this function is created for adding dummmy data to the wallets database
module.exports = {
  // eslint-disable-next-line no-unused-vars, no-shadow
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'wallets',
      [
        {
          id: uuidv4(),
          user_id: await queryInterface.rawSelect(
            'users',
            {
              where: {
                firstName: 'John',
              },
            },
            ['id']
          ),
          balance: 10000,
          order_ref: uuidv4(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          user_id: await queryInterface.rawSelect(
            'users',
            {
              where: {
                firstName: 'Mary',
              },
            },
            ['id']
          ),
          balance: 20000,
          order_ref: uuidv4(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          user_id: await queryInterface.rawSelect(
            'users',
            {
              where: {
                firstName: 'Emmanuel',
              },
            },
            ['id']
          ),
          balance: 40000,
          order_ref: uuidv4(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      { returning: true }
    );
  },
  // eslint-disable-next-line no-unused-vars, no-shadow
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('wallets', null, {});
  },
};
