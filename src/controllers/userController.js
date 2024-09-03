const UserService = require('../services/userService');

class UserController {
    static async login(req, res) {
        const { email, password } = req.body;

        try {
            const { user, token } = await UserService.authenticate(email, password);
            return res.json({ user, token });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async register(req, res) {
        try {
            const { user, token } = await UserService.register(req.body);
            return res.status(201).json({ user, token });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async profile(req, res) {
        try {
            const user = await UserService.getUserById(req.userInfo.id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: "An error occurred" });
        }
    }
}

module.exports = UserController;
