// error handler middleware that catches all errors
const handleError = (err, req, res) => {
  const { message, stack } = err;
  let { statusCode } = err;

  // displays the error and the location it occurred
  console.error(stack);

  // if no status code has been set, set to 500 as default
  statusCode = statusCode || 500;

  // return error message to user
  res.status(statusCode).json({
    status: 'error',
    message,
  });
};

module.exports = handleError;
