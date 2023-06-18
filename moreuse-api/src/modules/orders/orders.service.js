
const mongoose = require("mongoose");
const errorHandler = require("../../utils/errorHandler");
const Order = require("./models/order.moldel");
const dictErrors = require("./utils/dict.errors");

const ORDER_STATUS = {
  REGISTERED: 1,
  ANNULED: 2,
  PAID: 3
};

const add = async (orderData, buyerId) => {
  try {
    orderData.buyerId = buyerId;
    const order = Order(orderData);
    await order.save();
    return {
      message: 'order created',
      order
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR)
  }
}

const getDetail = async (orderId) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      throw errorHandler(dictErrors.ORDER_NOT_FOUND);
    }
    const order = await Order.findById(orderId);
    if (order) return order;
    throw errorHandler(dictErrors.ORDER_NOT_FOUND)
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR)
  }
}

const getMyPurchases = async (buyerId) => {
  try {
    const query = {
      buyerId: buyerId,
      status: {$ne: ORDER_STATUS.ANNULED}
    }

    const orders = await Order.find(query);
    if (orders) return {orders};
    throw errorHandler(dictErrors.ORDER_NOT_FOUND)
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR)
  }
}

const getMySales = async (sellerId) => {
  try {
    const query = {
      sellerId: sellerId,
      status: {$ne: ORDER_STATUS.ANNULED}
    }

    const orders = await Order.find(query);
    if (orders) return {orders};
    throw errorHandler(dictErrors.ORDER_NOT_FOUND)
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR)
  }
}

module.exports = {
  add,
  getDetail,
  getMyPurchases,
  getMySales
}
