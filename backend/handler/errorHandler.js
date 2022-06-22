const errorHandler = (err, req, res, next) => {
  const statusCode = !res.statusCode ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    success: false,
    stack: process.env.NODE_ENV === "production" ? "" : err.stack,
  });
};

module.exports = { errorHandler };
