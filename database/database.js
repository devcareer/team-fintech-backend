require('dotenv').config();

const { DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME, HOST } = process.env;

module.exports = {
  development: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: HOST,
    dialect: 'postgres',
    logQueryParameters: true,
    // logging: (str) => (process.env.SHOW_SQL_LOGS ? console.log(`[SEQUELIZE DATABASE] ${str}`) : null),
  },

  test: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: HOST,
    dialect: 'postgres',
    logging: false,
  },

  production: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: HOST,
    dialect: 'postgres',
  },
};
