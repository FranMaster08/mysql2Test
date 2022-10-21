const errorMiddleware = async (err, req, res, next) => {
  if (err) {
    res.status(500).send(err);
  }
  next();
};

module.exports = errorMiddleware;
