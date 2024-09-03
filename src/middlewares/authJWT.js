const jwt = require('../../config/jwt');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ error: "No token provided" });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).send({ error: "Token error" });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: "Token malformatted" });
    }

    let userInfo;
    try {
        userInfo = jwt.verify(token);
        req.userInfo = userInfo
    } catch (error) {
        return res.status(401).send({ error: "Token invalid" });
    }

    if (!userInfo) {
        return res.status(401).send({ error: "Token invalid" });
    }

    return next()
}

module.exports = authMiddleware;