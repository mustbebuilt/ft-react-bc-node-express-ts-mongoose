const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  // const token = req.body.token || req.query.token || req.headers["x-access-token"];
  // console.log(req.cookies);
  const token = req.cookies.jwt;

  if (!token) {
    // return res.status(403).send("A token is required for authentication");
    return res.redirect("/login");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    // return res.status(401).send("Invalid Token");
    return res.redirect("/login");
  }
  return next();
};

module.exports = verifyToken;
