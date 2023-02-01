const ServerError = require('../error/serverError');

module.exports = (err, _req, res, _next) => {
  if (err instanceof ServerError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ mesage: 'Internal unexpected error' });
};
