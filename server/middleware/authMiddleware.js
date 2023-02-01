const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization.split(' ')[1];

    if (!bearerToken) {
      return res.status(401).json({ message: 'User is not authorized' });
    }
    const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'User is not authorized' });
  }
};
