const authOptional = (req, res, next) => {
  req.authNotMandatory = true;
  next();
}

module.exports = authOptional;
