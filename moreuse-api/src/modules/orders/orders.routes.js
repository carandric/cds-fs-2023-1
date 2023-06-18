const express = require("express");
const router = express.Router();
const ordersCtrl = require("./orders.controller");
const authVerify = require("../../middlewares/authVerify");
const authOptional = require("../../middlewares/authOptional");

router.post("/add", authVerify, ordersCtrl.add);
router.get('/detail/:id', ordersCtrl.getDetail);
router.get('/myPurchases', authVerify, ordersCtrl.getMyPurchases);
router.get('/mySales', authVerify, ordersCtrl.getMySales);

module.exports = router;
