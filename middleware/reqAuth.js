const jwt = require("jsonwebtoken");
const keys = require("../keys/keys");
module.exports = (req, res, next) => {
  const token = req.header("Token");
  if (!token) {
    res.status(401).send("access denied");
    return;
  }
  try {
    const decodedUser = jwt.verify(token, keys.privateKey);
      req.id = decodedUser;
    next();
  } catch (error) {
    res.status(400).send("invalid token");
  }
};
