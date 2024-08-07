const HttpError = require('../utils/customError/httpError');
// const Exemplo = require('../models/exemplo')

const getExemploById = async(exemploId) => {
    try {
        let exemplo

        // exemplo = await Exemplo.find(id)
        if(!exemplo){
            throw new HttpError(404, 'Exemplo não encontrado')
        }

        return null

    } catch (error){
        throw (error)
    }

}

module.exports = {
    getExemploById,
}