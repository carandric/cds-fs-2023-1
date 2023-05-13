
const errorHandler = (errorData, extra = {}) => {
  const response = {...extra, message: errorData.message}
  return{
    handled: true,
    status: errorData.status,
    response: response
  }
}

module.exports = errorHandler;
