const errorHandler = require("../../utils/errorHandler");
const {USER_PASS_WRONG, SERVER_ERROR} = require("./utils/dict.errors");

const login = (email, password) => {
  try {
    if (email==='juanito@gmail.com' && password==="123") {
      return {
        token: 'xyz'
      }
    }
    throw errorHandler(USER_PASS_WRONG);
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, {error: JSON.stringify(error)});
  }
}

const logout = (idUser) => {
  return {
    message: 'user logout'
  }
}

const info = (idUser) => {
  return {
    name: "Juanito Perez",
    email: "juanito@gmail.com",
    address: "Calle siempre viva",
    phone: "300111222333"
  }
}

module.exports = {
  login,
  logout,
  info
}


