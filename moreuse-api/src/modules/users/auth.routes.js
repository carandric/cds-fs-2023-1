const express = require('express');
const authCtrl = require('./auth.controller');
const authVerify = require("../../middlewares/authVerify");

const router = express.Router();

router.post('/login', authCtrl.login);
router.post('/logout', authVerify, authCtrl.logout);
router.post('/signup', authCtrl.signup);
router.get('/', authVerify, authCtrl.info);

module.exports = router;
