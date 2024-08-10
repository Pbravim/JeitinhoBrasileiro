const usersService = require('../services/userService');

const create = async (req, res) => {
    try {
        const user = await usersService.createUser(req.body);
        res.status(200).json({ data: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const userId = req.params.id || req.userInfo.id;

        const user = await usersService.updateUser(userId, req.body);
        res.status(200).json({ data: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        await usersService.deleteUser(req.params.id);
        res.status(200).json({ data: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const users = await usersService.getAllUser();
        res.status(200).json({ data: users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserWithoutPassword = async (req, res) => {
    try {
        const user = await usersService.getUserWithoutPassword(req.userInfo.id);
        res.status(200).json({ data: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const authenticate = async (req, res) => {
    try {
        const { token } = await usersService.authenticate(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

// const mudarSenha = async (req, res) => {
//     try {
//         await usersService.mudarSenha(req.body, req.userInfo.id);
//         res.status(204).send();
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const resetPassword = async (req, res) => {
//     try {
//         await usersService.resetPassword(req.userInfo.id, req.body.token, req.body.newPassword, req.body.newPassword2);
//         res.status(204).send();
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const requestPasswordReset = async (req, res) => {
//     try {
//         await usersService.requestPasswordReset(req.body.email);
//         res.status(204).send();
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

module.exports = {
    create,
    update,
    delete: deleteUser,
    getAll,
    getUserWithoutPassword,
    authenticate,
    // mudarSenha,
    // resetPassword,
    // requestPasswordReset
};
