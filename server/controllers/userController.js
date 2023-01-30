const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ServerError = require('../error/serverError');
const { User } = require('../models/userModel');

const getToken = (id, email, name) => {
  return jwt.sign({ id, email, name }, process.env.SECRET_KEY, { expiresIn: '12h' });
};
class UserController {
  async registration(req, res, next) {
    const { name, email, password } = req.body;
    if (!email || !password) {
      return next(ServerError.badRequest('password or email is not correct'));
    }
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (user) {
      return next(ServerError.badRequest('user with specified email already exists'));
    }
    const hashedPassword = await bcrypt.hash(password, +process.env.SALT);
    console.log('hashed pswd: ', hashedPassword);
    const newUser = await User.create({ name: name, email: email, password: hashedPassword });
    const token = getToken(newUser.id, newUser.email, newUser.name);
    return res.json({ token });
  }
}

module.exports = new UserController();
