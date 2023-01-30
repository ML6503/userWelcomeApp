class UserController {
  async registration(req, res, next) {
    const { name, email, password } = req.body;
  }
}

module.exports = new UserController();
