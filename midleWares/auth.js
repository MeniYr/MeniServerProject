const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");

exports.auth = (req, res, next) => {
    let token = req.header("auth-token")
    if (!token)
        return res.json({ err_msg: "please SignUp again" })

    try {
        let TokenDecode = jwt.verify(token, config.tokenSecret);
        req.TokenData = TokenDecode;
        next();
    }
    catch (err) {
        return res.status(401).json({ err_msg: "token invilid or expired" })
    }
}