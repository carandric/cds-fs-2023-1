const dictErrors = {
  USER_PASS_WRONG: {
    status: 404,
    message: "user or password wrong"
  },
  SERVER_ERROR: {
    status: 500,
    message: "server internal error"
  }
}

module.exports = dictErrors;
