const clothesService = require("./clothes.service");


const add = async (req, res) => {
  try {
    const clotheData = req.body;
    const userId = '6472168cab2ea4095ed0d034'; //TODO
    const response = await clothesService.add(clotheData, userId);
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

const getAll = async (req, res) => {
  try {
    //Cuando es GET los parámetros se reciben por los Params
    const filters = req.query;
    const response = await clothesService.getAll(filters)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}
const getDetail = async (req, res) => {
  try {
    const {id: clotheId} = req.params; //OJO: esto es Renaming: Notación para asignar un atributo de un objeto
    const response = await clothesService.getDetail(clotheId)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}
const changeStatus = async (req, res) => {
  try {
    const {id: clotheId} = req.params;
    const {statusId} = req.query;
    const response = await clothesService.changeStatus(clotheId, statusId)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}
const update = async (req, res) => {
  try {
    const response = await null
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

module.exports = {
  add,
  getAll,
  getDetail,
  changeStatus,
  update
}

