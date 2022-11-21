const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.wallets);
    }
  }
  Transaction.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      txn_type: {
        type: DataTypes.ENUM('debit', 'credit'),
        allowNull: false,
      },
      purpose: {
        type: DataTypes.ENUM('deposit', 'transfer', 'withdrawal'),
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(20, 2).UNSIGNED,
        allowNull: false,
      },
      wallet_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      reference: {
        type: DataTypes.UUID,
        unique: true,
      },
      balance_before: {
        type: DataTypes.DECIMAL(20, 2).UNSIGNED,
        allowNull: false,
      },
      balance_after: {
        type: DataTypes.DECIMAL(20, 2).UNSIGNED,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('success', 'failed', 'pending'),
        allowNull: false,
        defaultValue: 'pending',
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'transactions',
      underscored: true,
    }
  );
  return Transaction;
};
