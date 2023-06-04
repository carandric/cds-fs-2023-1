const express = require('express');
const router = express.Router();
const authCtrl = require('./auth.controller');
const authVerify = require("../../middlewares/authVerify");

router.post('/login', authCtrl.login);
router.post('/logout', authVerify, authCtrl.logout);
router.post('/signup', authCtrl.signup);
router.get('/', authVerify, authCtrl.info);

module.exports = router;
