const jwt = require('../../config/jwt');
const userService = require('./userService')

const authenticateUser = async (data) => {
    try {
        const user = await getEmail(data.email)
        if (!user) throw new HttpError(404, 'Login inválido')
            
        const isPasswordValid = await bcrypt.compare(data.password, user.hashed_password);
        if (!isPasswordValid) throw new HttpError(404, 'Login inválido')
                
        const token = jwt.sign({ id: user.id});
        return {token: token};
    } catch (error){
        throw (error)
    }
}