const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    console.log("token from midll",token)
    if (!token)
      return res
        .status(401)
        .json({ msg: "No authentication token, authorization denied." });

    const verified = jwt.verify(token,`${process.env.JWT_SECRET_KEY}`);
    console.log("verifiedtokne:",verified)
    if (!verified)
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied." });

    req.user = verified.userId
    console.log(req.user)
    next();
  } catch (err) {
    res.status(500).json({ errortoken: err.message });
  }
};

module.exports = auth;