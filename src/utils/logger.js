const { createLogger, format, transports } = require('winston');

const { combine, timestamp, colorize, printf } = format;

// eslint-disable-next-line no-shadow
const myFormat = printf(({ level, message, timestamp }) => {
  const log = `${timestamp} ${level}: ${message}`;
  return log;
});

const logger = createLogger({
  format: combine(colorize(), timestamp(), myFormat),
  transports: [new transports.Console()],
});

module.exports = logger;
