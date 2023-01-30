const express = require('express');
const router = express.Router();

/* POST to register new user */
router.post('/registration', userController.registration);

/* POST to register new user */
router.post('/login', function (req, res, next) {
  res.send('login');
});

/* GET to check users auth */
router.get('/auth', function (req, res, next) {
  res.send('check auth');
});

module.exports = router;
