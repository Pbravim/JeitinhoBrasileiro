const bcrypt = require('bcryptjs')
const jwt = require('../../config/jwt')
const { User } = require('../models')
require('dotenv').config()


class UserService {    
    static async authenticate(email, password) {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.hashed_senha);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ id: user.id, email: user.email });


        return { user, token };
    }

    static async register(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await User.create({
            ...userData,
            hashed_senha: hashedPassword
        });

        const token = jwt.sign({ id: user.id, email: user.email });

        return { user, token };
    }
}

module.exports = UserService;