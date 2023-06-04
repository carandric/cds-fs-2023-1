const express = require("express");
const router = express.Router();
const clothesCtrl = require("./clothes.controller");
const authVerify = require("../../middlewares/authVerify");
const authOptional = require("../../middlewares/authOptional");

router.post("/add", authVerify, clothesCtrl.add);
router.get('/', authOptional, authVerify, clothesCtrl.getAll); //getAll
router.get('/detail/:id', clothesCtrl.getDetail); //get Detail
router.get('/myStuff', authVerify, clothesCtrl.getMyStuff);
router.patch("/status/:id", clothesCtrl.changeStatus);
router.put("/:id", authVerify, clothesCtrl.update);

module.exports = router;

/*
  getAll:
    1. cliente, agregue en el filtro el id del seller (el mismo user)
    2. Tener 2 paths (endpoints independientes)
      -> clothes/public
      -> clothes/private
    3. crear otro middleware para comprobar token (opcional)
    4. ajustar el middleare actual para que pueda ser opcional o no la verificación del token
*/
