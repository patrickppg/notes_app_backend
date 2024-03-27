function errorHandler(err, req, res, next) {
  if (err.name === 'JsonWebTokenError') {
    res.status(401).json({ error: 'invalid token' })
    return
  }

  else next(err)
}

module.exports = {
  errorHandler
}