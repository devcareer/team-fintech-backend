/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      txn_type: {
        type: Sequelize.ENUM('debit', 'credit'),
        allowNull: false,
      },
      purpose: {
        type: Sequelize.ENUM('deposit', 'transfer', 'withdrawal'),
        allowNull: false,
      },
      amount: {
        type: Sequelize.DECIMAL(20, 4).UNSIGNED,
        allowNull: false,
      },
      wallet_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'wallets',
          key: 'id',
        },
      },
      reference: {
        type: Sequelize.UUID,
        unique: true,
      },
      balance_before: {
        type: Sequelize.DECIMAL(20, 4).UNSIGNED,
        allowNull: false,
      },
      balance_after: {
        type: Sequelize.DECIMAL(20, 4).UNSIGNED,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('success', 'failed', 'pending'),
        defaultValue: 'pending',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  },
};
