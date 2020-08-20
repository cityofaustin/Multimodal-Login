const jsonwebtoken = require("jsonwebtoken");

function getTokenFromHeader(req) {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    let oauthJwt = req.headers.authorization.split(" ")[1];

    return oauthJwt;
  }

  return null;
}

var auth = {
  required: async (req, res, next) => {
    let oauthJwt = getTokenFromHeader(req);
    let decoded;
    try {
      decoded = jsonwebtoken.verify(oauthJwt, process.env.AUTH_SECRET);
    } catch (err) {
      console.log("Invalid token!");
      res.status(403).json({
        error: "Account not authorized. Invalid auth token",
      });
      return;
    }

    const payload = {
      username: decoded.username,
    };

    req.payload = payload;

    next();
  },
};

module.exports = auth;
