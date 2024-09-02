require('dotenv').config()

const JWT_SECRET = process.env.TOKEN_JWT || 'hestia';
const jwtLib = require('jsonwebtoken');

const sign = (values = {}) => {
    return jwtLib.sign(values, JWT_SECRET, { algorithm: 'HS256', expiresIn: "1d" })
}

const verify = token => {
    try {
        return jwtLib.verify(token, JWT_SECRET);
        
    } catch(error) {
        throw new Error(error);
    }
}

const jwt = {}
jwt.sign = sign;
jwt.verify = verify;

module.exports = jwt;