// middleware/logger.js
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // pass control to the next middleware or route
}

module.exports = logger;