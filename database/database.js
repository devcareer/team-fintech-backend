require('dotenv').config();

const { DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME, HOST } = process.env;
// import env variables for test environment
const { TESTDATABASE_USERNAME, TESTDATABASE_PASSWORD, TESTDATABASE_NAME, TESTHOST } = process.env;

module.exports = {
  development: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: HOST,
    dialect: 'postgres',
    logging: (str) => (process.env.SHOW_SQL_LOGS ? console.log(`[SEQUELIZE DATABASE] ${str}`) : null),
  },

  test: {
    username: TESTDATABASE_USERNAME,
    password: TESTDATABASE_PASSWORD,
    database: TESTDATABASE_NAME,
    host: TESTHOST,
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
