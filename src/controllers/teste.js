const testeService = require('../services/teste')
const HttpError = require('../utils/customError/httpError')

const getExemplo = async (req, res, next) => {
    const body = req.body
    const params = req.params
    const query = req.query
    
    try{
        const resposta = await testeService.getExemploById(params.id)
        
        if (!resposta){
            throw new HttpError(404, 'Sem resposta')
        }

        res.status(200).json(resposta)
    } catch (error){
        next (error)
    }

}

module.exports = {
    getExemplo,
}