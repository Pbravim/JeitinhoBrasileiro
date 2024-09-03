const EntregaService = require('../services/entregaService');

class EntregaController {
    static async getEntrega(req, res) {
        try {
            const entrega = await EntregaService.findById(req.userInfo.id, req.params.id);
            return res.json(entrega);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    static async getAllEntregas(req, res) {
        try {
            const entregas = await EntregaService.findAll(req.userInfo.id);
            return res.json(entregas);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = EntregaController;
