const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

/* POST to register new user */
router.post('/registration', userController.registration);

/* POST to register new user */
router.post('/login', userController.login);

/* GET to check users auth */
router.get('/auth', authMiddleware, userController.authCheck);

module.exports = router;
