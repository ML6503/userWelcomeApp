const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ServerError = require('../error/serverError');
const { User } = require('../models/userModel');

const getToken = (id, email, name) => {
  return jwt.sign({ id, email, name }, process.env.SECRET_KEY, { expiresIn: '12h' });
};

class UserController {
  async registration(req, res, next) {
    const { fullname, email, password } = req.body;
    console.log('user details', req.body);
    if (!email || !password) {
      return next(ServerError.badRequest('Password or email is not correct'));
    }
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (user) {
      return next(ServerError.badRequest('User with specified email already exists'));
    }
    const hashedPassword = await bcrypt.hash(password, +process.env.SALT);
    const newUser = await User.create({ name: fullname, email: email, password: hashedPassword });
    const token = getToken(newUser.id, newUser.email, newUser.name);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(ServerError.badRequest('Password or email is not correct'));
    }
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return next(ServerError.internal('User not found'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ServerError.internal('Password is incorrect'));
    }

    const token = getToken(user.id, user.email, user.name);
    return res.json({ token });
  }

  async authCheck(req, res, _next) {
    const { id, email, name } = req.user;
    const token = getToken(id, email, name);
    return res.json({ token });
  }
}

module.exports = new UserController();
