const express = require('express');
const router = express.Router();
const authCtrl = require('./auth.controller');

router.post('/login', authCtrl.login);
router.post('/logout', authCtrl.logout);
router.post('/signup', authCtrl.signup);
router.get('/', authCtrl.info);

module.exports = router;
