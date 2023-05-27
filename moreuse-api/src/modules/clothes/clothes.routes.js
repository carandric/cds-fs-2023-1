const express = require("express");
const router = express.Router();
clothesCtrl = require("./clothes.controller");

router.post("/add", clothesCtrl.add);
router.get('/', clothesCtrl.getAll); //getAll
router.get('/:id', clothesCtrl.getDetail); //get Detail
router.patch("/status/:id", clothesCtrl.changeStatus);
router.put("/:id", clothesCtrl.update);

module.exports = router;
