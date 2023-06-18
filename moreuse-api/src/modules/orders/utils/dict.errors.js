const dictErrors = {
  SERVER_ERROR: {
    status: 500,
    message: "server internal error"
  },
  ORDER_NOT_FOUND: {
    status: 404,
    message: "The order has not been found"
  },
  CLOTHE_NOT_AVAILABLE: {
    status: 404,
    message: 'Unfortunately the clothe is not available'
  }
}

module.exports = dictErrors;
