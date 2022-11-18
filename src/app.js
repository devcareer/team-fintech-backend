const app = require('./server');

require('dotenv').config();

const port = process.env.PORT || 8080;

// To check that node server is running successfully
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${port}`);
});
