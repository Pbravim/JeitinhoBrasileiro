import usersService from '../services/usersService'

exports.create = async(req, res) => {
    try{
        const user = await usersService.createUser(req.body)
        res.status(200).json({data: user})
    } catch (error){
        res.status(500).json({error: error.message})
    }
}

exports.update = async(req, res) => {
    try{
        const userId = req.params.id || req.userInfo.id

        const user = await usersService.updateUser(userId, req.body)
        res.status(200).json({data: user})
    } catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.delete = async(req, res) => {
    try{
        await usersService.deleteUser(req.params.id)
        res.status(200).json({data: 'Usuário deletado com sucesso'})
    } catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.getAll = async(req, res) => {
    try{
        const users = await usersService.getAllUser()
        res.status(200).json({data: users})
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

exports.getUserWithoutPassword = async(req, res) => {
    try{
        const user = await usersService.getUserWithoutPassword(req.userInfo.id)
        res.status(200).json({data: user})
    } catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.authenticate = async (req, res) => {
    try {
        const {token} = await usersService.authenticate(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

// exports.mudarSenha = async (req, res) => {
//     try {
//         await usersService.mudarSenha(req.body, req.userInfo.id)
//         res.status(204).send()
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }
//
// exports.resetPassword = async (req, res) => {
//     try {
//         await usersService.resetPassword(req.userInfo.id, req.body.token, req.body.newPassword, req.body.newPassword2)
//         res.status(204).send()
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }
//
// exports.requestPasswordReset = async (req, res) => {
//     try {
//         await usersService.requestPasswordReset(req.body.email)
//         res.status(204).send()
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }