const jsw = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization.split(' ')[1];
    if (!bearerToken) {
      return res.status(401).json({ message: 'User is not authorized' });
    }
    const tokenData = jwt.verify(bearerToken, process.env.SECRET_KEY);
    req.user = tokenData;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'User is not authorized' });
  }
};
