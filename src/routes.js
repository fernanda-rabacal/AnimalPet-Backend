const express = require('express');
const router = express();

const userController = require('./controllers/userController')

router.post('/login', userController.login);

module.exports = router;