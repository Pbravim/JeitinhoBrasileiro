const db = require ('../sequelize/models/index')
const User = db.User
const jwt = require('../../config/jwt');
const { v4: uuidv4 } = require('uuid');
const { profile, error } = require('console');
const HttpError = require("../utils/customError/httpError");
require('dotenv').config();


const createUser = async (body) => {
    try {

        if(mess.length>0){
            throw new Error(error.mess)
        }

        const hashedPassword = await bcrypt.hash(body.password, 10)

        const novoUser = await User.create({
            id: uuidv4(),
            hashed_password: hashedPassword,
            name: body.name,
            email: body.email,
            date_birth: body.date_birth,
            phone: body.phone,
            cpf: body.cpf,
            status: 0
        })

        const token = jwt.sign({ id: novoUser.id, email: novoUser.email});

        return {novoUser, token}

    } catch (err) {
        console.error(err.message)
        throw new HttpError(400, "Não foi possível criar a tarefa");

    }
}

const authenticate = async (body) => {
    const user = await this.getEmail(body.email)

    if (!user) {
        console.error("Usuário não encontrado")
        throw new Error('Usuário inválido')

    }
    const isPasswordValid = await bcrypt.compare(body.password, user.hashed_password);
    if (!isPasswordValid) {
        throw new Error("Usuário inválido")
    }

    const token = jwt.sign({ id: user.id, email: user.email});
    return token;
}


const deleteUser = async (id) => {
    try {
        const user = await User.findOne({
            where: {
                id: id
            }
        });

        if (!user){
            throw new HttpError(404, "Usuário não existe")

        }

        await user.destroy()

        return true;
    } catch (e){
        throw(e)

    }
}

const getAllUser = async () => {
    try{
        const users = await User.findAll({
            attributes: { exclude: ['hashed_password'] }
        })
        return users
    }catch (e) {
        throw(e)
    }
}

const getUser = async (id) => {
    try {
        const user = await User.findOne({
            where:{
                id: id
            }
        })

        if (!user){
            throw new HttpError(404, "Usuário não existe")

        }

        return user
    }catch (e){
        throw(e)
    }
}

const getUserWithoutPassword = async (id) => {
    try {
        const user = await User.findOne({
            where:{
                id: id
            },
            attributes: { exclude: ['hashed_password', 'password_token', 'password_token_expiry'] } // Excluir o campo 'password'

        })

        if (!user){
            throw new HttpError(404, "Usuário não existe")

        }

        return user
    }catch (error){
        throw(error)
    }
}

const updateUser = async (userId, body) => {
    try {
        const user = await this.getUser(userId)
        if (!user){
            throw new HttpError(404, "Usuário não existe")

        }
        const {hashed_password, id, createdAt, updatedAt,
            ...dataUpdate} = body
        dataUpdate.updatedAt = new Date()

        await user.update(dataUpdate)

        return user
    } catch (error) {
        throw(error)
    }
}

const getEmail = async (email) => {
    try {
        const user = await User.findOne({
            where:{
                email: email
            }
        })
        if (!user){
            throw new HttpError(404, "Usuário não existe")

        }

        return user
    }catch (e){
        throw(e)
    }
}

module.exports = { 
    createUser,
    authenticate,
    deleteUser,
    getAllUser,
    getUser,
    getUserWithoutPassword,
    updateUser,
    getEmail,
}

//
// exports.mudarSenha = async (body, userId) => {
//     try{
//
//         if (!body.password || !body.newPassword || !body.newPassword2)
//
//             if (!body.password){
//                 throw new Error("Coloque a senha")
//             }
//         if (body.newPassword !== body.newPassword2){
//             throw new Error("Senhas distintas")
//         }
//
//         const user = await this.getUser(userId)
//
//         const isPasswordValid = await bcrypt.compare(body.password, user.hashed_password);
//         if (!isPasswordValid){
//             throw new Error('Senha Incorreta')
//         }
//
//         let newHashedPassword = await bcrypt.hash(body.newPassword, 10)
//
//         user.hashed_password = newHashedPassword
//         user.updatedAt = new Date()
//
//         await user.save()
//         return
//     }catch(error){
//         throw new Error(error)
//     }
// }
//
//
//
// exports.requestPasswordReset = async (email) => {
//     try {
//         if (!email) {
//             throw new Error( 'Por favor, forneça um email.');
//         }
//
//         const user = await this.getEmail(email);
//
//         if (!user) {
//             throw new Error('Email não cadastrado.');
//         }
//
//         const token = crypto.randomBytes(32).toString('hex');
//         const expiration = new Date(Date.now() + 1800000);
//
//         await user.update({
//             password_token: token,
//             password_token_expiry: expiration
//         });
//
//
//
//         const emailData = helper.createDefaultEmailConfig(email, token);
//         await sendMailPromise(emailData.email, emailData.subject, emailData.message, emailData.template, emailData.variables);
//
//         return
//     } catch (error) {
//         console.error(error.message);
//         throw (error);
//     }
// }
//
// exports.resetPassword = async (userId, token, newPassword, newPassword2) => {
//     try {
//         if (!token || !newPassword) {
//             throw new HttpError(400, 'Token e nova senha são obrigatórios.');
//         }
//
//         if (newPassword !== newPassword2){
//             throw new HttpError( 400, "Senhas distintas")
//         }
//
//         const user = getUser(userId)
//
//
//         if (!user.password_token_expiry || user.password_token_expiry < new Date()) {
//             throw new HttpError(400, 'Token inválido ou expirado.');
//         }
//
//
//         if (!user) {
//             throw new HttpError(404, 'Usuário não encontrado.');
//         }
//
//         const newHashedPassword = bcrypt.hash(newPassword, 10)
//
//         await user.update({ hashed_password: newHashedPassword, password_token: null, password_token_expiry: null, updatedAt: new Date() });
//
//         return
//     } catch (error) {
//         console.error(err.message);
//         throw (error)
//     }
// }