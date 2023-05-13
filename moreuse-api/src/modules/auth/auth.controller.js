const { response } = require("express");
const authService = require("./auth.services");

const login = (req, res) => {
  try{
    const {email, password} = req.body;
    const response = authService.login(email, password);
    res.status(200).json(response);
  } catch (error){
    res.status(error.status).json(error.response);
  }
}

const logout = (req, res) => {
  const idUser = '1234'; //TODO
  const response = authService.logout(idUser);
  res.status(200).json(response);
}

const info = (req, res) => {
  const idUser = '1234'; //TODO
  const response = authService.info(idUser);
  res.status(200).json(response);
}

module.exports = {
  login,
  logout,
  info
}
