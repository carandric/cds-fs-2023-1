const ordersService = require("./orders.service");
const clothesService = require("../clothes/clothes.service");
const {SERVER_ERROR, ORDER_NOT_FOUND, CLOTHE_NOT_AVAILABLE} = require('./utils/dict.errors');


const add = async (req, res) => {
  try {

    const order = req.body;
    const {idUser: buyerId} = req.payload;

    let response = await clothesService.getDetail(order.clotheId);
    const clothe = response.clothe;

    if (clothe.status == clothesService.CLOTHES_STATUS.FOR_SALE) {
      order.sellerId = clothe.sellerId;
      order.salePrice = clothe.price;

      response = await clothesService.changeStatus(order.clotheId, clothesService.CLOTHES_STATUS.SOLD);

      response = await ordersService.add(order, buyerId);

      res.status(200).json(response);
    } else {
      res.status(CLOTHE_NOT_AVAILABLE.status).json(CLOTHE_NOT_AVAILABLE);
    }

  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

const getDetail = async (req, res) => {
  try {
    const {id: orderId} = req.params;
    const response = await ordersService.getDetail(orderId)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

const getMyPurchases = async (req, res) => {
  try {
    const {idUser: buyerId} = req.payload;
    const response = await ordersService.getMyPurchases(buyerId);
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

const getMySales = async (req, res) => {
  try {
    const {idUser: sellerId} = req.payload;
    const response = await clothesService.getMySales(sellerId);
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

module.exports = {
  add,
  getDetail,
  getMyPurchases,
  getMySales
}
