const app = require('./server');

const logger = require('./utils/logger');

require('dotenv').config();
require('../database/db.config');

const port = process.env.PORT || 8080;

// To check that node server is running successfully
app.listen(port, () => {
  // eslint-disable-next-line no-console
  logger.info(`App is running on port ${port}`);
});
