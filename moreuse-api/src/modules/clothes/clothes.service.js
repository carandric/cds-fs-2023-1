
const mongoose = require("mongoose");
const errorHandler = require("../../utils/errorHandler");
const Clothe = require("./models/clothe.model");
const dictErrors = require("./utils/dict.errors");

const CLOTHES_STATUS = {
  FOR_SALE: 1,
  SOLD: 2,
  RESERVED: 3
};

const add = async (clotheData, sellerId) => {
  try {
    clotheData.sellerId = sellerId;
    const clothe = Clothe(clotheData);
    await clothe.save();
    return {
      message: 'clothe created',
      clothe
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR)
  }
}

const getAll = async (filter) => {
  try {
    const query = {
      status: CLOTHES_STATUS.FOR_SALE
    }

    if (filter.gender) query.gender = filter.gender;
    if (filter.target) query.target = filter.target;
    if (filter.minPrice && filter.maxPrice) {
      query.price = {$gte: filter.minPrice, $lte: filter.maxPrice}
    }
    if (filter.name) query.name = { $regex: filter.name, $options: "i" }; //"i": NO case sensitive
    if (filter.excludeSeller) query.sellerId = { $ne: filter.excludeSeller }

    const clothes = await Clothe.find(query);
    return{
      clothes
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR)
  }
}

const getDetail = async (clotheId) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(clotheId)) {
      throw errorHandler(dictErrors.CLOTHE_NOT_FOUND)
    }
    const clothe = await Clothe.findById(clotheId);
    if (clothe) return clothe
    throw errorHandler(dictErrors.CLOTHE_NOT_FOUND)
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR)
  }
}

const changeStatus = async (clotheId, statusId) => {
  try {
    const query = {"_id": clotheId}
    const update = {
      $set: {status: statusId}
    };
    const result = await Clothe.updateOne(query, update);
    return {
      result
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR)
  }
}

module.exports = {
  add,
  getAll,
  getDetail,
  changeStatus
}
