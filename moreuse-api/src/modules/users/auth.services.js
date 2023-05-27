const errorHandler = require("../../utils/errorHandler");
const User = require("./models/user.model");
const bcrypt = require("bcrypt");
const {USER_PASS_WRONG, SERVER_ERROR, USER_ALREADY_EXISTS, USER_NOT_FOUND} = require("./utils/dict.errors");

const login = async (email, password) => {
  try {

    //Validación del usuario
    const user = await User.findOne({ email: email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // TODO: generate token
        return{
          token: 'xxxxxyyyyyzzzzzzz'
        }
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

const signup = async (userData) => {
  try {
    //Validación del usuario
    const validateUser = await User.findOne({ email: userData.email });
    if (validateUser) {
      throw errorHandler(USER_ALREADY_EXISTS);
    }

    //Encriptación de la contraseña
    const passHashed = await bcrypt.hash(userData.password, 10);
    userData.password = passHashed //.toString();

    const user = User(userData);
    await user.save(); //el ORM evita hacer el InsertOne implicito

    return {
      message: "user created successful",
      user
    }

  } catch(error){
    throw error.handled ? error: errorHandler(SERVER_ERROR, {error: JSON.stringify(error)})
  }
}

const info = async (idUser) => {
  try {
    const user = await User.findById(idUser);
    return user || errorHandler(USER_NOT_FOUND);
  } catch (error) {
    throw error.handled ? error: errorHandler(SERVER_ERROR, {error: JSON.stringify(error)})
  }
}

module.exports = {
  login,
  logout,
  signup,
  info
}


